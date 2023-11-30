import { Metadata } from "next";
import { getPosts } from "@/components/loadFiles";
import Md2Html from "@/components/md2html";
import Thumbnail from "@/components/thumbnail";
import { formatdate } from "@/components/util";
import { css } from "@/styled-system/css";
import { mdStyle } from "@/styled-system/patterns";
import { PostPage } from "@/types";

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

export default function Post({ params }: Props) {
  const { id } = params;
  const posts = getPosts();
  const post = posts.find((post) => post.id.toString() === id) as PostPage;

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
        <div
          className={css({
            marginBottom: "50px",
          })}
        >
          <h1
            className={css({
              fontSize: "2rem",
              fontWeight: 700,
              borderBottom: "1px solid black",
            })}
          >
            {post.meta.title}
          </h1>
          <p
            className={css({
              textAlign: "end",
            })}
          >
            {formatdate(post.meta.created_at)}
          </p>
        </div>

        <div
          className={css({
            maxWidth: post.widthNarrow ? "600px" : "100%",
            marginInline: "auto",
          })}
        >
          {post.meta.thumbnail && (
            <Thumbnail
              src={post.meta.thumbnail}
              alt="thumbnail"
              height={"300px"}
            />
          )}

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

export function generateMetadata({ params }: Props): Metadata {
  const { id } = params;
  const posts = getPosts();
  const post = posts.find((post) => post.id.toString() === id);

  return {
    title: post ? post.meta.title : "Posts",
  };
}
