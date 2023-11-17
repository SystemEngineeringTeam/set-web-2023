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

function parseMetaTag(
  tags: null | string[],
  key: string,
  defaultValue: string
) {
  const tag = tags?.filter((tag) => tag.startsWith(`${key}:`))[0];
  return tag ? tag.replace(`${key}:`, "") : defaultValue;
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

    const style = parseMetaTag(meta.tags, "style", "default");
    const sort = parseMetaTag(meta.tags, "sort", "last");
    const widthNarrow = parseMetaTag(meta.tags, "widthNarrow", "false");
    const path_ = parseMetaTag(
      meta.tags,
      "path",
      `/${meta.title.toLowerCase()}`
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
  filteredPages.sort((a, b) => {
    if (a.sort === "last") return 1;
    return a.sort > b.sort ? 1 : -1;
  });

  return filteredPages;
}

export function getPosts(): Post[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/posts");
  const filenames = fs.readdirSync(contentsDir);

  const pages: Post[] = filenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data;

    const createdAt = parseMetaTag(meta.tags, "at", meta.created_at);
    meta.created_at = new Date(createdAt);

    return {
      filename,
      id: md.data.number,
      meta,
      content: md.content,
    } as Post;
  });

  const filteredPosts = pages.filter((page) => page.meta.title !== "README");
  filteredPosts.sort((a, b) =>
    a.meta.created_at > b.meta.created_at ? -1 : 1
  );

  return filteredPosts;
}
