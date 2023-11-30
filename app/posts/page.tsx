import { Metadata } from "next";
import List from "./_components/list";
import { getPages, getPosts } from "@/components/loadFiles";
import { css } from "@/styled-system/css";

export default function Posts() {
  const posts = getPosts();
  const publishedPosts = posts.filter((post) => post.meta.published);
  const pages = getPages();

  const postsPage = pages.find((page) => page.path === "/posts");
  const widthNarrow = postsPage ? postsPage.widthNarrow : false;

  return (
    <main
      className={css({
        minHeight: "100vh",
        padding: "80px 20px",
      })}
    >
      <div
        className={css({
          marginInline: "auto",
          width: "100%",
          maxWidth: widthNarrow ? "600px" : "800px",
        })}
      >
        <h1
          className={css({
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            borderBottom: "1px solid black",
          })}
        >
          {postsPage ? postsPage.meta.title : "Posts"}
        </h1>

        <List publishedPosts={publishedPosts} />
      </div>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const pages = getPages();
  const postsPage = pages.find((page) => page.path === "/posts");

  return {
    title: postsPage ? postsPage.meta.title : "Posts",
  };
}
