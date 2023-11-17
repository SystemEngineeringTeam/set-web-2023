import Item from "./_components/item";
import { getPages, getPosts } from "@/components/loadFiles";
import { css } from "@/styled-system/css";

export default function Posts() {
  const posts = getPosts();
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

        {posts.map((post) => (
          <Item key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
