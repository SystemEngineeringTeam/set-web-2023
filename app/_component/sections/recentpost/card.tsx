"use client";

import { useRouter } from "next/navigation";
import { formatdate, getTextFromMd } from "@/components/util";
import { css } from "@/styled-system/css";
import { Post } from "@/types";

type Props = {
  post: Post;
};

export default function Card({ post }: Props) {
  const router = useRouter();

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
      onClick={() => router.push(`/posts/${post.id}`)}
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
}
