"use client";

import { useRouter } from "next/navigation";
import { cva } from "@/styled-system/css";

export const btn = cva({
  base: {
    padding: "2px 5px 0",
    fontSize: "sm",
    cursor: "pointer",
    textAlign: "left",
    display: "block",
    transition: "color 0.3s",
  },
  variants: {
    place: {
      footer: {
        width: "100%",
        color: "white",
        _hover: { color: "primary.400" },
      },
      header: {
        _hover: { color: "primary.300" },
      },
      other: {
        marginInline: "auto",
        height: "30px",
        _hover: { color: "primary.300" },
      },
    },
  },
});

type Props = {
  place: "header" | "footer" | "other";
  text: string;
  path: string;
};

export default function MenuButton({ place, text, path }: Props) {
  const router = useRouter();

  return (
    <button className={btn({ place })} onClick={() => router.push(path)}>
      {text}
    </button>
  );
}
