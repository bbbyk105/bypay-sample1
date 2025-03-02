"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      effect="fade"
      speed={1000}
      className="w-full"
      style={
        {
          "--swiper-navigation-color": "#ffffff",
          "--swiper-pagination-color": "#ffffff",
        } as React.CSSProperties
      }
    >
      <SwiperSlide>
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
          <Image
            src="/camera.jpg"
            alt="camera"
            fill
            className="object-cover"
            priority
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
          <Image
            src="/headphone.jpg"
            alt="headphone"
            fill
            className="object-cover"
            priority
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
