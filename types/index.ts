import { mdStyles } from "@/const/index";

export type PageStyle = (typeof mdStyles)[number];

export type PageMeta = {
  title: string;
  category: string;
  tags: null | string[];
  created_at: Date;
  updated_at: Date;
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
export type NoticePage = Omit<
  Page,
  "path" | "style" | "widthNarrow" | "other" | "sort"
> & {
  category: string;
  deadline: Date;
};

export type Product = {
  title: string;
  created_at: Date;
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
