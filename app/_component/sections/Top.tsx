import { css } from "@/styled-system/css";
import { center } from "@/styled-system/patterns";

type Props = {
  message: string;
  img: string;
};

export default function TopSection({ message, img }: Props) {
  return (
    <section
      className={css({
        height: "100vh",
        paddingTop: "40px",
        position: "relative",
      })}
    >
      <div
        className={center({
          margin: "auto",
          height: "fit-content",
          width: "fit-content",
          inset: 0,
          position: "absolute",
          zIndex: 2,
        })}
      >
        <h1
          className={css({
            color: "prima",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "3px 3px white",
          })}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>

      <img
        src={img}
        alt="background image"
        className={css({
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          objectFit: "cover",
          color: "transparent",
          filter: "opacity(0.7) blur(1px)",
        })}
      />
    </section>
  );
}
