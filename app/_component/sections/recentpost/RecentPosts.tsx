import Card from "./card";
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
          return <Card post={post} key={post.id} />;
        })}
      </div>
    </section>
  );
}
