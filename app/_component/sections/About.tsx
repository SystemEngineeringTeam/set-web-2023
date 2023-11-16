import Md2Html from "@/components/md2html";
import { css } from "@/styled-system/css";
import { mdStyle } from "@/styled-system/patterns";

type Props = {
  content: string;
};

export default function AboutSection({ content }: Props) {
  return (
    <section
      className={css({
        padding: "70px 20px 80px",
      })}
    >
      <Md2Html
        className={mdStyle({
          style: "no-underline",
          maxWidth: "800px",
        })}
        content={content}
      />
    </section>
  );
}
