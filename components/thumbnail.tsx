import { css } from "@/styled-system/css";

type Props = {
  src: string;
  alt: string;
  height: string;
  hovered?: boolean;
};

export default function Thumbnail({ src, alt, height, hovered }: Props) {
  return (
    <div
      className={css({
        width: "100%",
        height: "300px",
        overflow: "hidden",
        position: "relative",
      })}
      style={{ height }}
    >
      <img
        src={src}
        alt={alt}
        className={css({
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
          transition: "transform 0.5s ease",

          _hover: {
            transform: "scale(1.05)",
          },
        })}
        style={hovered ? { transform: "scale(1.05)" } : {}}
      />
    </div>
  );
}
