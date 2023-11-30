import { mdStyles } from "@/const/index";

export type PageStyle = (typeof mdStyles)[number];

export type PageMeta = {
  title: string;
  category: string;
  tags: null | string[];
  created_at: Date;
  updated_at: Date;
  published: boolean;
  number: number;
  thumbnail: string | null;
};

export type Page = {
  path: string;
  style: PageStyle;
  widthNarrow: boolean;
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
