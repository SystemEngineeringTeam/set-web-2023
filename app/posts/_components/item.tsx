"use client";

import { useRouter } from "next/navigation";
import { formatdate } from "@/components/util";
import { css } from "@/styled-system/css";
import { Post } from "@/types";

type Props = {
  post: Post;
};

export default function Item({ post }: Props) {
  const router = useRouter();

  return (
    <div
      key={post.id}
      className={css({
        padding: "10px",
        cursor: "pointer",
        transition: "background-color 0.3s",

        _hover: {
          backgroundColor: "#f5f5f5",
        },
      })}
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <span>{formatdate(post.meta.created_at)}</span>
      <h2
        className={css({
          fontSize: "1.5rem",
          fontWeight: 700,
        })}
      >
        {post.meta.title}
      </h2>
    </div>
  );
}
