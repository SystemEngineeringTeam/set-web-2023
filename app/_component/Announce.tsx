"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";
import {
  getLocalStorageString,
  setLocalStorageString,
} from "@/foundations/useLocalStorage";
import { css } from "@/styled-system/css";

export default function Announce() {
  const localStorageKey = "announce";
  const announceKey = "obog";
  const deadline = "2024/8/20";

  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    const now = Date.now();
    const deadlineTime = new Date(deadline).getTime();

    if (now > deadlineTime) return;

    const value = getLocalStorageString(localStorageKey);
    if (value === announceKey) return;

    setIsClosed(false);
  }, []);

  function onClose() {
    setIsClosed(true);
    setLocalStorageString(localStorageKey, announceKey);
  }

  return (
    <div
      className={css({
        padding: "15px 50px 15px 30px",
        position: "fixed",
        bottom: "5%",
        left: "50%",
        backgroundColor: "#cadbf6",
        borderRadius: "5px",
        zIndex: 10000,
        textAlign: "center",
        transform: "translateX(-50%)",
      })}
      style={{ display: isClosed ? "none" : "block" }}
    >
      <CloseIcon
        className={css({
          position: "absolute",
          top: "5px",
          right: "5px",
          fontSize: "2rem",
        })}
        onClick={onClose}
      />

      <h1
        className={css({
          fontSize: "2rem",
          fontWeight: "bold",
        })}
      >
        OB・OG会のお知らせ
      </h1>
      <p
        className={css({
          fontSize: "1.5rem",
        })}
      >
        詳しくは{" "}
        <a
          href="/posts/255"
          className={css({
            color: "primary.300",
          })}
        >
          こちら
        </a>
      </p>
    </div>
  );
}
