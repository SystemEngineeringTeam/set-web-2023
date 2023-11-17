import { getPosts } from "@/components/loadFiles";
import Md2Html from "@/components/md2html";
import { css } from "@/styled-system/css";
import { mdStyle } from "@/styled-system/patterns";
import { Post } from "@/types";

export const generateStaticParams = () => {
  const posts = getPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
};

type Props = {
  params: {
    id: string;
  };
};

export default function PostPage({ params }: Props) {
  const { id } = params;
  const posts = getPosts();
  const post = posts.find((post) => post.id.toString() === id) as Post;

  return (
    <main
      className={css({
        minHeight: "100vh",
        padding: "80px 20px",
      })}
    >
      <div
        className={css({
          maxWidth: "800px",
          margin: "0 auto",
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
          {post.meta.title}
        </h1>

        <div
          className={css({
            maxWidth: post.widthNarrow ? "600px" : "100%",
            marginInline: "auto",
          })}
        >
          <Md2Html
            className={mdStyle({
              style: "default",
            })}
            content={post.content}
          />
        </div>
      </div>
    </main>
  );
}
