import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Page, Image, PostPage, Product } from "@/types";

export function getTopImages(): Image[] {
  const imagesDir = path.join(process.cwd(), "public/img/top");
  const filenames = fs.readdirSync(imagesDir);
  const filteredFilenames = filenames.filter(
    (filename) => !filename.startsWith("."),
  );
  const images = filteredFilenames.map((filename) => {
    return {
      path: path.join("/img/top", filename),
      name: filename,
    };
  });
  images.sort();

  return images;
}

function parseMetaTag(
  tags: null | string[],
  key: string,
  defaultValue: string,
  check?: RegExp,
): string {
  const tag = tags?.filter((tag) => tag.startsWith(`${key}:`))[0];
  const value = tag && tag.replace(`${key}:`, "");
  if (check === undefined) return value ?? defaultValue;
  if (value && check.test(value)) return value;

  return defaultValue;
}

export function getPages(): Page[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/pages");
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter(
    (filename) => !filename.startsWith("."),
  );

  const pages: Page[] = filteredFilenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data;
    meta.created_at = new Date(meta.created_at);

    if (typeof meta.tags === "string") meta.tags = meta.tags.split(", ");

    const style = parseMetaTag(meta.tags, "style", "default");
    const sort = parseMetaTag(meta.tags, "sort", "last");
    const widthNarrow = parseMetaTag(meta.tags, "widthNarrow", "false");
    const path_ = parseMetaTag(
      meta.tags,
      "path",
      `/${meta.title.toLowerCase()}`,
      /^¥.*$/,
    );

    return {
      path: path_.replace("¥", "/"),
      style,
      widthNarrow: widthNarrow === "true",
      sort,
      filename,
      id: md.data.number,
      meta,
      content: md.content,
    } as Page;
  });

  const filteredPages = pages.filter((page) => page.meta.title !== "README");
  const publishedPages = filteredPages.filter((page) => page.meta.published);
  publishedPages.sort((a, b) => {
    if (a.sort === "last") return 1;
    return a.sort > b.sort ? 1 : -1;
  });

  return publishedPages;
}

export function getPosts(): PostPage[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/posts");
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter(
    (filename) => !filename.startsWith("."),
  );

  const pages: PostPage[] = filteredFilenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data;

    if (typeof meta.tags === "string") meta.tags = meta.tags.split(", ");

    const createdAt = parseMetaTag(
      meta.tags,
      "at",
      meta.created_at,
      /\d{4}-\d{2}-\d{2}/,
    );
    meta.created_at = new Date(createdAt);

    const regex = /^[\s\n]*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;
    const matches = md.content.match(regex);
    md.content = md.content.replace(regex, "");

    if (matches) meta.thumbnail = matches[2] || matches[3];
    else meta.thumbnail = null;

    return {
      filename,
      id: md.data.number,
      meta,
      content: md.content,
    } as PostPage;
  });

  const filteredPosts = pages.filter((page) => page.meta.title !== "README");
  const publishedPosts = filteredPosts.filter((page) => page.meta.published);
  publishedPosts.sort((a, b) =>
    a.meta.created_at > b.meta.created_at ? -1 : 1,
  );

  return publishedPosts;
}

export function getProducts(): Product[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/products");
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter(
    (filename) => !filename.startsWith("."),
  );

  const products: Product[] = filteredFilenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data;

    if (typeof meta.tags === "string") meta.tags = meta.tags.split(", ");
    const createdAt = parseMetaTag(
      meta.tags,
      "at",
      meta.created_at,
      /\d{4}-\d{2}-\d{2}/,
    );

    const content = md.content.split(/\n+/);

    let product: Product = {
      title: meta.title,
      created_at: new Date(createdAt),
      published: meta.published,
      id: meta.number,
      author: null,
      thumbnail: null,
      description: null,
      link: null,
    };
    let value = "";
    content.reverse().forEach((c) => {
      const cnt = c.replace("\n", "");
      if (!cnt.startsWith("#")) {
        value = value ? `${cnt} ${value}` : cnt;
        return;
      }

      if (cnt.startsWith("# 説明")) product.description = value;
      else if (cnt.startsWith("# リンク")) product.link = value;
      else if (cnt.startsWith("# 制作者")) product.author = value;
      else if (cnt.startsWith("# サムネ")) {
        const regex = /^[\s\n]*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;
        const matches = value.match(regex);
        if (matches) product.thumbnail = matches[2] || matches[3];
        else product.thumbnail = null;
      }

      value = "";
    });

    return product;
  });

  const filteredProducts = products.filter(
    (product) => product.title !== "README",
  );
  const publishedProducts = filteredProducts.filter(
    (product) => product.published,
  );
  publishedProducts.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));

  return publishedProducts;
}
