import Card from "./_components/card";
import { getPages, getProducts } from "@/components/loadFiles";
import { css } from "@/styled-system/css";

export default function Products() {
  const products = getProducts();
  const publishedProducts = products.filter((product) => product.published);
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
          {publishedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}
