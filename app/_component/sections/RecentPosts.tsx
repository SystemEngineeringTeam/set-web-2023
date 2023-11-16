import { formatdate, getTextFromMd } from "@/components/util";
import { css } from "@/styled-system/css";
import { Post } from "@/types";

type Props = {
  posts: Post[];
};

export default function RecentPosts({ posts }: Props) {
  return (
    <section
      className={css({
        padding: "50px 0px",
      })}
    >
      <h2
        className={css({
          fontSize: "2rem",
          textAlign: "center",
        })}
      >
        Recent Posts
      </h2>
      <div
        className={css({
          marginInline: "auto",
          maxWidth: "1200px",
          padding: "40px 20px",
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        })}
      >
        {posts.splice(0, 3).map((post) => {
          return (
            <div
              key={post.id}
              className={css({
                padding: "10px 20px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem",
                position: "relative",
                cursor: "pointer",
              })}
            >
              <h3
                className={css({
                  textAlign: "center",
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  lineHeight: "2.5rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                })}
              >
                {post.meta.title}
              </h3>
              <p
                className={css({
                  height: "170px",
                  padding: "0 10px",
                  lineHeight: "1.5rem",
                  overflow: "hidden",
                  overflowWrap: "break-word",
                })}
              >
                {getTextFromMd(post.content)}
              </p>
              <h3
                className={css({
                  lineHeight: "2rem",
                  textAlign: "end",
                })}
              >
                {formatdate(post.meta.created_at)}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
