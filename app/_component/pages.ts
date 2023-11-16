import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Page, PageMeta } from "@/types";

export function getPages(): Page[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/pages");
  const filenames = fs.readdirSync(contentsDir);

  const pages: Page[] = filenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data as PageMeta;

    const styleTag = meta.tags?.filter((tag) => tag.startsWith("style:"))[0];
    const style = styleTag ? styleTag.replace("style:", "") : "default";

    const sortTag = meta.tags?.filter((tag) => tag.startsWith("sort:"))[0];
    const sort = sortTag ? sortTag.replace("sort:", "") : "last";

    const pathTag = meta.tags?.filter((tag) => tag.startsWith("path:/"))[0];
    const filepath = pathTag
      ? pathTag.replace("path:/", "")
      : filename.toLowerCase();

    return {
      path: filepath,
      style,
      sort,
      filename,
      id: md.data.number,
      meta: md.data,
      content: md.content,
    } as Page;
  });

  pages.filter((page) => page.meta.title !== "README");
  pages.sort((a, b) => {
    if (a.sort === "last") return 1;
    return a.sort > b.sort ? 1 : -1;
  });

  return pages;
}
