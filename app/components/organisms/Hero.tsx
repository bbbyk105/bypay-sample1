"use client";

import React from "react";
import SwiperComponent from "../molecules/Swiper";
import SwiperDoc from "../atoms/SwiperDoc";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-0  mx-auto overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
      <SwiperDoc />
      <SwiperComponent />
    </div>
  );
};

export default Hero;
