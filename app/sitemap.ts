import { MetadataRoute } from "next";
import { getPages, getPosts } from "@/components/loadFiles";
import { HOST_NAME } from "@/const";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getPages();
  const posts = getPosts();

  const pagesSiteMap: MetadataRoute.Sitemap = pages.map((p) => {
    return {
      url: new URL(p.path, HOST_NAME).toString(),
      lastModified: p.meta.updated_at,
      changeFrequency: "monthly",
      priority: p.path === "/" ? 1 : 0.8,
    };
  });

  const postsSiteMap: MetadataRoute.Sitemap = posts.map((p) => {
    return {
      url: new URL(`post/${p.id}`, HOST_NAME).toString(),
      lastModified: p.meta.updated_at,
      changeFrequency: "never",
      priority: 0.5,
    };
  });

  return [...pagesSiteMap, ...postsSiteMap];
}
