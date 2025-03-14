import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { productImages } from "@/app/data/ProductData";
import { cn } from "@/lib/utils";

export type ProductsProps = {
  reverse?: boolean;
};

const Products = ({ reverse = false }: ProductsProps): JSX.Element => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      {/* Hero Section - Minimalist style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", reverse && "hidden")}>
          <h2 className="text-5xl font-light tracking-wide text-amber-400 mb-3">
            PickUp
          </h2>
          <p className="text-gray-600 font-light tracking-wider">
            商品ピックアップ
          </p>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-6"></div>
        </div>

        {/* Featured Product - Modern asymmetric layout */}
        <div className="relative mb-32">
          <div
            className={cn(
              "flex flex-col md:flex-row items-center",
              reverse && "md:flex-row-reverse"
            )}
          >
            <div className="md:w-3/5 z-10">
              <Image
                src={productImages[0].src}
                alt={productImages[0].alt}
                width={productImages[0].width}
                height={productImages[0].height}
                className={productImages[0].className}
              />
            </div>

            <div
              className={cn(
                "md:w-2/5 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 bg-white p-8 rounded-xl shadow-xl z-20 mt-6 md:mt-0",
                reverse
                  ? "md:-translate-x-8 md:left-0"
                  : "md:translate-x-8 md:right-0"
              )}
            >
              <div className="border-l-4 border-amber-400 pl-4 mb-6">
                <h3 className="text-2xl font-medium">ヘッドホン</h3>
                <p className="text-amber-500 text-sm">PREMIUM COLLECTION</p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                洋菓子のような優しい小ぶりなサイズながらも風味豊かな餡が上品に仕上げられております。
                独自の製法で作られた薄い生地と風味豊かな素材が織りなす絶妙なハーモニー。
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-gray-100 rounded-full px-4 py-1 text-xs">
                  22本入
                </span>
                <span className="bg-gray-100 rounded-full px-4 py-1 text-xs">
                  常温7日保存
                </span>
                <span className="bg-gray-100 rounded-full px-4 py-1 text-xs">
                  もっちり食感
                </span>
              </div>

              <Link
                href="/products/hakata-yokapai"
                className="group inline-flex items-center justify-center border border-amber-300 bg-white hover:bg-amber-50 rounded-full px-6 py-3 transition duration-300"
              >
                <span className="mr-2">商品一覧を見る</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid - Magazine-style layout */}
      </div>
    </section>
  );
};

export default Products;
