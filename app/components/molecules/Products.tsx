import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productImages, products } from "@/app/data/ProductData";

const Products = ({}) => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      {/* Hero Section - Minimalist style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 z-10">
              <Image
                src={productImages[0].src}
                alt={productImages[0].alt}
                width={productImages[0].width}
                height={productImages[0].height}
                className={productImages[0].className}
              />
            </div>

            <div className="md:w-2/5 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-8 bg-white p-8 rounded-xl shadow-xl z-20 mt-6 md:mt-0">
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
        <h3 className="text-2xl font-light text-center mb-12">
          <span className="inline-block border-b-2 border-amber-300 pb-2">
            おすすめ商品
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="overflow-hidden rounded-lg mb-4 transition-transform duration-500 group-hover:shadow-lg">
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>

              <div className="px-2">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1 min-h-12">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <p className="font-medium">
                    {product.price.toLocaleString()} 円
                    {product.taxIncluded && (
                      <span className="text-xs text-gray-500 ml-1">
                        （税込）
                      </span>
                    )}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-amber-500 hover:text-amber-600 text-sm inline-flex items-center transition duration-300"
                  >
                    詳細を見る
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="mt-3">
                  <span className="inline-block border border-gray-200 rounded-full text-xs px-3 py-1 bg-gray-50 text-gray-500">
                    のし対応可能
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
