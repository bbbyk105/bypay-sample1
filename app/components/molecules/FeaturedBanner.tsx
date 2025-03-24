"use client";

import React, { useState, useEffect, JSX } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  align?: "left" | "center" | "right";
  textColor?: string;
  buttonStyle?: "primary" | "secondary" | "outline";
}

interface EcommerceHeroProps {
  slides: HeroSlide[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  showIndicators?: boolean;
  fullHeight?: boolean;
  overlayOpacity?: number;
}

const EcommerceHero = ({
  slides,
  autoplay = true,
  autoplaySpeed = 5000,
  showIndicators = true,
  fullHeight = false,
  overlayOpacity = 40,
}: EcommerceHeroProps): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getButtonStyles = (style: string = "primary") => {
    switch (style) {
      case "secondary":
        return "bg-gray-800 text-white hover:bg-gray-700";
      case "outline":
        return "border-2 border-white text-white hover:bg-white hover:text-black transition";
      case "primary":
      default:
        return "bg-white text-black hover:bg-gray-200";
    }
  };

  const getAlignmentClasses = (align: string = "center") => {
    switch (align) {
      case "left":
        return "justify-start text-left pl-8 md:pl-16 lg:pl-24";
      case "right":
        return "justify-end text-right pr-8 md:pr-16 lg:pr-24";
      case "center":
      default:
        return "justify-center text-center";
    }
  };

  return (
    <div
      className={`relative w-full ${
        fullHeight ? "h-screen" : "h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh]"
      } overflow-hidden`}
    >
      {/* スライド */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* 背景画像 */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />

          {/* オーバーレイ */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity / 100 }}
          />

          {/* コンテンツ */}
          <div
            className={`absolute inset-0 flex items-center ${getAlignmentClasses(
              slide.align
            )}`}
          >
            <div className="relative z-10 flex flex-col items-center md:items-start gap-4 px-6 max-w-2xl">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
                  slide.textColor || "text-white"
                } leading-tight`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg sm:text-xl ${
                  slide.textColor || "text-white"
                } max-w-lg`}
              >
                {slide.subtitle}
              </p>
              <Link href={slide.buttonLink}>
                <button
                  className={`mt-4 px-6 py-3 font-semibold rounded-lg shadow-lg transition ${getButtonStyles(
                    slide.buttonStyle
                  )}`}
                >
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* ナビゲーションボタン */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
        onClick={prevSlide}
        aria-label="前のスライド"
      >
        ❮
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
        onClick={nextSlide}
        aria-label="次のスライド"
      >
        ❯
      </button>

      {/* インジケーター */}
      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`スライド ${index + 1} に移動`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EcommerceHero;
