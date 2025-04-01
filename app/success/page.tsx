"use client";

import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SuccessPage() {
  const { clearCart, cartCount = 0 } = useShoppingCart();
  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    console.log("Initial cart count:", cartCount);

    const clearCartData = async () => {
      try {
        console.log("Attempting to clear cart...");
        await clearCart();
        setIsCleared(true);
        console.log("Cart cleared successfully");
      } catch (error) {
        console.error("Failed to clear cart:", error);
      }
    };

    // cartCount がundefinedの場合でも安全に処理
    if (!isCleared && (cartCount ?? 0) > 0) {
      clearCartData();
    } else {
      console.log("No items in cart or already cleared");
    }

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
      disable: false,
    });
  }, [clearCart, cartCount, isCleared]);

  return (
    <div className="container mt-32 mx-auto px-4 py-12 md:py-20 text-center flex flex-col items-center justify-center min-h-[70vh]">
      <div data-aos="fade-down" data-aos-delay="300" className="mb-4 md:mb-6">
        <svg
          className="w-16 h-16 md:w-24 md:h-24 mx-auto text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>

      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        ご購入ありがとうございます！
      </h1>

      <p
        className="mb-8 md:mb-10 text-base md:text-lg text-gray-600 max-w-md mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        購入が完了しました。
      </p>

      <div
        data-aos="zoom-in"
        data-aos-delay="900"
        className="w-full max-w-xs sm:max-w-none"
      >
        <Link href="/">
          <span className="inline-block w-full sm:w-auto border border-gray-200 bg-white text-gray-800 px-6 sm:px-8 py-3 rounded-md shadow-sm hover:shadow-md transition duration-300 font-medium relative overflow-hidden group">
            <span className="absolute inset-0 w-0 bg-gray-100 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              ホームに戻る
            </span>
          </span>
        </Link>
      </div>

      <div
        className="mt-12 md:mt-16 border-t border-gray-200 pt-8 md:pt-10 w-full max-w-lg mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="1100"
      >
        <p className="text-sm md:text-base text-gray-500">
          何かご不明な点がございましたら、お気軽にお問い合わせください。
        </p>
      </div>
    </div>
  );
}
