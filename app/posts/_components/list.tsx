import Item from "./item";
import { css } from "@/styled-system/css";
import { Post } from "@/types";

export default function List({ publishedPosts }: { publishedPosts: Post[] }) {
  return (
    <div
      className={css({
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      })}
    >
      {publishedPosts.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </div>
  );
}
