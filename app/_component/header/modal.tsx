"use client";

import { useRouter } from "next/navigation";
import { CloseIcon } from "@/components/icons";
import { css } from "@/styled-system/css";
import { Page } from "@/types";

type Props = {
  opened: boolean;
  close: () => void;
  pages: Page[];
};

export default function Modal({ opened, close, pages }: Props) {
  const router = useRouter();

  return (
    <div
      className={css({
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        transition: "background-color 0.3s",
        backgroundColor: opened ? "rgba(0, 0, 0, 0.5)" : "transparent",
        pointerEvents: opened ? "auto" : "none",
      })}
      onClick={close}
    >
      <div
        className={css({
          height: "100vh",
          width: "min(100vw, 300px)",
          backgroundColor: "primary.500",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 1100,
          transform: opened ? "translateX(0)" : "translateX(100%)",
          transition: "all 0.3s",
          boxShadow:
            "-0.7px 0 3.6px rgba(0, 0, 0, 0.014)," +
            "-2.7px 0 10px rgba(0, 0, 0, 0.02)" +
            "7.8px 7px 24.1px rgba(0, 0, 0, 0.026)," +
            "-27px 0 80px rgba(0, 0, 0, 0.04)",
        })}
      >
        <div
          className={css({
            padding: "10px",
            display: "flex",
            justifyContent: "flex-start",
            cursor: "pointer",
          })}
        >
          <CloseIcon />
        </div>

        <ul
          className={css({
            padding: "20px 0px 10px 20px",
          })}
        >
          {pages.map((page) => (
            <li
              className={css({
                padding: "10px 0",
                listStyle: "none",
                position: "relative",
                cursor: "pointer",
              })}
              onClick={() => router.push(page.path)}
              key={page.id}
            >
              {"- "}
              {page.meta.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
