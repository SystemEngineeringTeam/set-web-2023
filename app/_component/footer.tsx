import MenuButton from "./MenuButton";
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
          <MenuButton
            place="footer"
            text={page.meta.title}
            path={page.path}
            key={page.id}
          />
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
