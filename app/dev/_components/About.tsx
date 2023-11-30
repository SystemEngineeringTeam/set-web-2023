import { getMdFile } from "@/components/loadFiles";
import Md2Html from "@/components/md2html";
import { css } from "@/styled-system/css";
import { mdStyle } from "@/styled-system/patterns";

export default function About() {
  const content = getMdFile("app/dev/ABOUT.md");

  return (
    <section
      className={css({
        sm: {
          gridColumn: "span 2",
        },
      })}
    >
      <h1
        className={css({
          fontSize: "1.4rem",
        })}
      >
        About
      </h1>
      <Md2Html
        className={mdStyle({
          style: "default",
        })}
        content={content}
      />
    </section>
  );
}
