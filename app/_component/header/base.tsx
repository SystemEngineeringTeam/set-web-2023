"use client";

import Image from "next/image";
import MenuButton from "../MenuButton";
import { css } from "@/styled-system/css";
import { Post } from "@/types";

type Props = {
  pages: Post[];
};

export default function HeaderBase({ pages }: Props) {
  return (
    <header
      className={css({
        height: "40px",
        padding: "0 10px",
        backgroundColor: "primary.500",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "none",
        alignItems: "center",
        gap: "10px",

        sm: {
          display: "flex",
        },
      })}
    >
      <Image src="/logo/set.webp" width={40} height={40} alt="sysken logo" />
      {pages.map((page) => (
        <MenuButton
          place="header"
          text={page.meta.title}
          path={`/posts/${page.id}`}
          key={page.id}
        />
      ))}
    </header>
  );
}
