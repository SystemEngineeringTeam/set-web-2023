"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "@/styled-system/css";
import { Image } from "@/types";

export function Carousel({ images }: { images: Image[] }) {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      navigation={false}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <div
              className={css({
                height: "calc(100vh - 40px)",
                paddingTop: "40px",
                position: "relative",
              })}
            >
              <img
                src={image.path}
                alt="test_image"
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
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
