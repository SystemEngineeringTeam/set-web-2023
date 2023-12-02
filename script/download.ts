import fs from "fs";
import path from "path";
import axios from "axios";

const MARKDOWN_PATH = "public/markdown";
const IMAGE_DIR = "public/img/markdown";
const IMAGE_REGEX = /<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\)/g;
const IMAGE_SRC_REGEX = /src=['"](.*)['"]/;
const IMAGE_MARKDOWN_REGEX = /!\[.*\]\((.*)\)/;

/*
 * URLからファイル名を取得する
 * @param url URL
 *
 * @return ファイル名
 */
function getFileNameFromURL(url: string): string {
  const urlObject = new URL(url);
  return urlObject.pathname.split("/").pop()!;
}

/*
 * ファイル名からIDを取得する
 * @param fileName ファイル名
 *
 * @return ID
 */
function getFileId(filePath: string): string {
  const fileName = path.basename(filePath);
  return fileName.split(".")[0];
}

/*
 * ディレクトリの一覧を取得する
 * @param filePath ディレクトリのパス
 *
 * @return ディレクトリの一覧
 */
function getDirectories(filePath: string) {
  return fs
    .readdirSync(filePath)
    .filter((file) => fs.statSync(path.join(filePath, file)).isDirectory());
}

/*
 * 画像のURLを取得する
 * @param content ファイルの中身
 *
 * @return 画像のURLの配列
 */
function getImageURLs(content: string): string[] {
  // imgタグを取得
  const imgMatch = content.match(IMAGE_REGEX);

  // imgタグから画像のURLを取得
  const imgSrcMatch = imgMatch?.map((img) => {
    // imgタグから画像のURLを取得
    let src = img.match(IMAGE_SRC_REGEX);
    if (src) return src[1];

    // マークダウンの画像挿入を取得
    src = img.match(IMAGE_MARKDOWN_REGEX);
    if (src) return src[1];

    // 画像のURLが見つからない場合はエラーを返す
    throw new Error(`No image match.\n${img}`);
  });

  return imgSrcMatch?.filter((img) => img.startsWith("http")) ?? [];
}

/*
 * 画像を保存する
 * @param url 画像のURL
 * @param fileId ファイルのID
 */
async function saveImage(url: string, fileId: string): Promise<void> {
  axios
    .get(url, { responseType: "arraybuffer" })
    .then((res) => {
      // 画像のファイル名を取得
      const fileName = getFileNameFromURL(url);
      // 画像を保存するディレクトリのパスを取得
      const dirPath = path.join(IMAGE_DIR, fileId);

      // dirPath が存在しない場合は作成する
      if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

      // 画像を保存
      const filePath = path.join(dirPath, fileName);
      fs.writeFileSync(filePath, res.data, "binary");
    })
    .catch(() => null);
}

/*
 * 画像を保存して、画像のURLを置換したファイルの中身を返す
 * @param content ファイルの中身
 * @param fileId ファイルのID
 *
 * @return 画像のURLを置換したファイルの中身
 */
function saveAndReplaceImages(content: string, fileId: string): string {
  // 画像のURLを取得
  const imageUrls = getImageURLs(content);
  const replacImageUrls = imageUrls.map((imageUrl) => {
    // 画像を保存して、画像のパスを取得
    void saveImage(imageUrl, fileId);

    const imageSrc = path
      .join(IMAGE_DIR, fileId, getFileNameFromURL(imageUrl))
      .replace("public", "");

    // 画像のURLを置換
    if (imageSrc) content = content.replace(imageUrl, imageSrc);
    return {
      original: imageUrl,
      replaced: imageSrc,
    };
  });

  // 画像のURLを置換したファイルの中身を返す
  const replacedContent = replacImageUrls.reduce((curContent, img) => {
    return curContent.replace(img.original, img.replaced);
  }, content);

  return replacedContent;
}

/*
 * 変更されたファイルのみ実行する
 * @param changeFiles 変更されたファイルの一覧
 */
function runOnlyChangeFiles(changeFiles: string) {
  const files = changeFiles.replace(/'/g, "").split(" ");

  files
    .filter((file) => file.endsWith(".md"))
    .forEach((filePath) => {
      // ファイルの中身を取得
      const fileContents = fs.readFileSync(filePath, "utf8");
      // ファイル名からIDを取得
      const fileId = getFileId(filePath);
      // 画像を保存して、画像のURLを置換したファイルの中身を取得
      const replacedContent = saveAndReplaceImages(fileContents, fileId);
      // ファイルの中身を置換
      fs.writeFileSync(filePath, replacedContent, "utf8");
    });
}

/*
 * 全てのファイルを実行する
 */
function runAllFiles() {
  const markdownDir = getDirectories(MARKDOWN_PATH);
  markdownDir.forEach((dirName) => {
    // mdファイルを取得
    const files = fs.readdirSync(path.join(MARKDOWN_PATH, dirName));

    files
      .filter((file) => file.endsWith(".md"))
      .forEach((fileName) => {
        // ファイルパスを取得
        const filePath = path.join(MARKDOWN_PATH, dirName, fileName);
        // ファイルの中身を取得
        const fileContents = fs.readFileSync(filePath, "utf8");
        // ファイル名からIDを取得
        const fileId = getFileId(fileName);
        // 画像を保存して、画像のURLを置換したファイルの中身を取得
        const replacedContent = saveAndReplaceImages(fileContents, fileId);
        // ファイルの中身を置換
        fs.writeFileSync(filePath, replacedContent, "utf8");
      });
  });
}

function main() {
  const changeFiles = process.env.GIT_DIFF_FILTERED;
  if (changeFiles) runOnlyChangeFiles(changeFiles);
  else runAllFiles();
}

main();
