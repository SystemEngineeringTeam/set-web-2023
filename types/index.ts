export type PageStyle = "default";

export type PageMeta = {
  title: string;
  category: string;
  tags: null | string[];
  created_at: string;
  updated_at: string;
  published: boolean;
  number: number;
};

export type Page = {
  path: string;
  style: PageStyle;
  sort: string;
  filename: string;
  id: number;
  meta: PageMeta;
  content: string;
};
