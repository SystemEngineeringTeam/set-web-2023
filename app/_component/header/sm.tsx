"use client";

import MenuButton from "../MenuButton";
import Logo from "./logo";
import { css } from "@/styled-system/css";

type HambergerIconProps = {
  onClick: () => void;
};

function HambergerIcon({ onClick }: HambergerIconProps) {
  return (
    <div
      className={css({
        height: "20px",
        width: "30px",
        position: "relative",
        cursor: "pointer",

        "& > div": {
          height: "2px",
          width: "100%",
          backgroundColor: "primary.100",
          position: "absolute",
        },
      })}
      onClick={onClick}
    >
      <div className={css({ top: "0px" })} />
      <div className={css({ top: "9px" })} />
      <div className={css({ top: "18px" })} />
    </div>
  );
}

type Props = {
  open: () => void;
};

export default function HeaderSm({ open }: Props) {
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
        display: "flex",
        alignItems: "center",
        gap: "10px",

        sm: {
          display: "none",
        },
      })}
    >
      <Logo />
      <MenuButton place="header" text="シス研" path="/" />
      <span
        className={css({
          marginInline: "auto",
        })}
      />
      <HambergerIcon onClick={open} />
    </header>
  );
}
