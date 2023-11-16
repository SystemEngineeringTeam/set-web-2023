import Image from "next/image";
import { getPages } from "./pages";
import { css } from "@/styled-system/css";

export default function Header() {
  const pages = getPages();

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
      })}
    >
      <Image src="/img/set.webp" width={40} height={40} alt="sysken logo" />
      {pages.map((page) => (
        <button
          key={page.id}
          className={css({
            padding: "2px 5px 0",
            fontSize: "sm",
            cursor: "pointer",
            transition: "color 0.3s",
            _hover: {
              color: "primary.300",
            },
          })}
        >
          {page.meta.title}
        </button>
      ))}
    </header>
  );
}
