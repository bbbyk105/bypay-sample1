"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
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
            src="/dorayaki.jpg"
            alt="Slide 1"
            fill
            className="object-cover"
            priority
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
          <Image
            src="/nigiyaka.jpg"
            alt="Slide 2"
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
