"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Button from "../atoms/Button2";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type SlideProps = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
};

const slides: SlideProps[] = [
  {
    id: 1,
    image: "/camera.jpg",
    title: "New Collection",
    subtitle: "2023 Spring / Summer",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    image: "/headphone.jpg",
    title: "Minimal Design",
    subtitle: "Quality craftsmanship",
    buttonText: "Explore",
    buttonLink: "/collection",
  },
];

const HeroSlider: React.FC = () => {
  return (
    <div className="relative w-full h-screen max-h-[800px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-2 h-2 bg-white opacity-70"></span>`;
          },
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0  bg-opacity-20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h1
                  className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p
                    className="text-lg mb-8 tracking-wide"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                  >
                    {slide.subtitle}
                  </p>
                )}
                <Link href={slide.buttonLink}>
                  <Button
                    variant="outline"
                    size="md"
                    className="border-white text-white hover:bg-white hover:text-black"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
