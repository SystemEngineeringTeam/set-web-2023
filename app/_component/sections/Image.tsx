import { css } from "@/styled-system/css";

type Props = {
  img: string;
};

export default function Image({ img }: Props) {
  return (
    <section
      className={css({
        width: "100vw",
        height: "100vh",
      })}
    >
      <img
        src={img}
        alt="background image"
        className={css({
          width: "100%",
          height: "100%",
          objectFit: "cover",
        })}
      />
    </section>
  );
}
