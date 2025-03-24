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
      speed={800}
      className="w-full"
      style={
        {
          "--swiper-navigation-color": "#ffffff",
          "--swiper-pagination-color": "#ffffff",
        } as React.CSSProperties
      }
    >
      {["/amachi.png", "/headphone.jpg"].map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-auto min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] bg-gray-900 flex items-center justify-center">
            <Image
              src={src}
              alt={`slide-${index}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
