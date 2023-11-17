import { getPages } from "@/components/loadFiles";
import Md2Html from "@/components/md2html";
import { specialPath } from "@/const";
import { css } from "@/styled-system/css";
import { mdStyle } from "@/styled-system/patterns";
import { Page } from "@/types";

export const generateStaticParams = () => {
  const pages = getPages();

  const filteredPages = pages.filter(
    (page) => !specialPath.includes(page.path)
  );

  return filteredPages.map((page) => ({
    slug: page.path.replace("/", ""),
  }));
};

type Props = {
  params: {
    slug: string;
  };
};

export default function Pages({ params }: Props) {
  const pages = getPages();
  const page = pages.find((page) => page.path === `/${params.slug}`) as Page;

  return (
    <main
      className={css({
        minHeight: "100vh",
        padding: "80px 20px",
      })}
    >
      <div
        className={css({
          maxWidth: "800px",
          margin: "0 auto",
        })}
      >
        <h1
          className={css({
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            borderBottom: "1px solid black",
          })}
        >
          {page.meta.title}
        </h1>

        <div
          className={css({
            maxWidth: page.widthNarrow ? "600px" : "100%",
            marginInline: "auto",
          })}
        >
          <Md2Html
            className={mdStyle({
              style: page.style,
            })}
            content={page.content}
          />
        </div>
      </div>
    </main>
  );
}
