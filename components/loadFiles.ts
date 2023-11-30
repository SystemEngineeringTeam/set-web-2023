import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Page, Image, Post } from "@/types";

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
  filteredPages.sort((a, b) => {
    if (a.sort === "last") return 1;
    return a.sort > b.sort ? 1 : -1;
  });

  return filteredPages;
}

export function getPosts(): Post[] {
  const contentsDir = path.join(process.cwd(), "public/markdown/posts");
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter(
    (filename) => !filename.startsWith("."),
  );

  const pages: Post[] = filteredFilenames.map((filename) => {
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
    } as Post;
  });

  const filteredPosts = pages.filter((page) => page.meta.title !== "README");
  filteredPosts.sort((a, b) =>
    a.meta.created_at > b.meta.created_at ? -1 : 1,
  );

  return filteredPosts;
}
