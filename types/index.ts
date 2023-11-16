import { mdStyles } from "@/const/index";

export type PageStyle = typeof mdStyles;

export type PageMeta = {
  title: string;
  category: string;
  tags: null | string[];
  created_at: Date;
  updated_at: Date;
  published: boolean;
  number: number;
};

export type Page = {
  path: string;
  style: string;
  sort: string;
  filename: string;
  id: number;
  meta: PageMeta;
  content: string;
};

export type Post = Omit<Page, "path" | "style" | "sort">;

export type Image = {
  path: string;
  name: string;
};
