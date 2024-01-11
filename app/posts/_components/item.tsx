"use client";

import { useState } from "react";
import Thumbnail from "@/components/thumbnail";
import { formatdate } from "@/components/util";
import { DEFAULT_POST_THUMBNAIL } from "@/const";
import { css } from "@/styled-system/css";
import { PostPage } from "@/types";

type Props = {
  post: PostPage;
};

export default function Item({ post }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={`/post/${post.id}`}>
      <div
        key={post.id}
        className={css({
          padding: "10px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          gridRow: "span 3",
          display: "grid",
          gridTemplateRows: "subgrid",
          gap: "10px",

          _hover: {
            backgroundColor: "#f5f5f5",
          },
        })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Thumbnail
          height="150px"
          hovered={hovered}
          src={post.meta.thumbnail || DEFAULT_POST_THUMBNAIL}
          alt={post.meta.title}
        />
        <span>{formatdate(post.meta.created_at)}</span>
        <h2
          className={css({
            height: "4.5rem",
            overflow: "hidden",
            fontSize: "1.5rem",
            fontWeight: 700,
          })}
        >
          {post.meta.title}
        </h2>
      </div>
    </a>
  );
}
