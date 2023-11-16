import { getPages } from "./pages";
import { css } from "@/styled-system/css";

export default function Footer() {
  const pages = getPages();

  return (
    <footer
      className={css({
        backgroundColor: "primary.300",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      })}
    >
      <div
        className={css({
          padding: "30px 100px",
        })}
      >
        {pages.map((page) => (
          <button
            key={page.id}
            className={css({
              width: "100%",
              color: "white",
              textAlign: "left",
              display: "block",
              cursor: "pointer",
              transition: "color .3s",

              _hover: {
                color: "primary.400",
              },
            })}
          >
            {page.meta.title}
          </button>
        ))}
      </div>
      <p
        className={css({
          marginInline: "20px",
          lineHeight: "28px",
          textAlign: "center",
          borderTop: "1px solid white",
          color: "white",
        })}
      >
        SET @ 2023 Copyright.
      </p>
    </footer>
  );
}
