import { Metadata } from "next";
import Card from "./_components/card";
import { getPages, getProducts } from "@/components/loadFiles";
import Pagenation from "@/components/pagenation/pagenation";
import { css } from "@/styled-system/css";

const CONTENTS_NUM = 12;

export default function Products() {
  const rangeMin = 0;

  const products = getProducts();
  const pagenationMax = Math.ceil(products.length / CONTENTS_NUM);
  const displayProducts = products.splice(rangeMin, CONTENTS_NUM);
  const pages = getPages();
  const productsPage = pages.find((page) => page.path === "/products")!;

  return (
    <main
      className={css({
        padding: "80px 20px",
      })}
    >
      <div
        className={css({
          marginInline: "auto",
          width: "100%",
          maxWidth: "800px",
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
          {productsPage.meta.title}
        </h1>

        <section
          className={css({
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          })}
        >
          {displayProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      </div>

      <Pagenation
        pageNum={1}
        PageMax={pagenationMax}
        getPath={(page) => `/products/${page}`}
      />
    </main>
  );
}

export function generateMetadata(): Metadata {
  const pages = getPages();
  const postsPage = pages.find((page) => page.path === "/products");

  return {
    title: postsPage ? postsPage.meta.title : "Products",
  };
}
