import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Page, PageMeta, Image, Post } from "@/types";

export function getTopImages(): Image[] {
  const imagesDir = path.join(process.cwd(), "public/img/top");
  const filenames = fs.readdirSync(imagesDir);
  const images = filenames.map((filename) => {
    return {
      path: path.join("/img/top", filename),
      name: filename,
    };
  });
  images.sort();

  return images;
}

export function getPages(): Page[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/pages");
  const filenames = fs.readdirSync(contentsDir);

  const pages: Page[] = filenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data as PageMeta;
    meta.created_at = new Date(meta.created_at);

    const styleTag = meta.tags?.filter((tag) => tag.startsWith("style:"))[0];
    const style = styleTag ? styleTag.replace("style:", "") : "default";

    const sortTag = meta.tags?.filter((tag) => tag.startsWith("sort:"))[0];
    const sort = sortTag ? sortTag.replace("sort:", "") : "last";

    const pathTag = meta.tags?.filter((tag) => tag.startsWith("path:"))[0];
    const filepath = pathTag
      ? pathTag.replace("path:", "")
      : `/${meta.title.toLowerCase()}`;

    return {
      path: filepath,
      style,
      sort,
      filename,
      id: md.data.number,
      meta,
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

export function getPosts(): Post[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/posts");
  const filenames = fs.readdirSync(contentsDir);

  const pages: Post[] = filenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data as PageMeta;

    const createdAtTag = meta.tags?.filter((tag) => tag.startsWith("at:"))[0];
    const createdAt = createdAtTag
      ? createdAtTag.replace("at:", "")
      : meta.created_at;

    meta.created_at = new Date(createdAt);

    return {
      filename,
      id: md.data.number,
      meta,
      content: md.content,
    } as Post;
  });

  pages.filter((page) => page.meta.title !== "README");
  pages.sort((a, b) => (a.meta.created_at > b.meta.created_at ? -1 : 1));

  return pages;
}
