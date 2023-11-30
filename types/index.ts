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
  other: boolean;
  filename: string;
  id: number;
  meta: PageMeta;
  content: string;
};

export type PostPage = Omit<Page, "path" | "style" | "sort" | "other">;

export type Product = {
  title: string;
  created_at: Date;
  published: boolean;
  author: string | null;
  thumbnail: string | null;
  description: string | null;
  link: string | null;
  id: number;
};

export type Image = {
  path: string;
  name: string;
};
