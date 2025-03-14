import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productImages, products } from "@/app/data/ProductData";

const SeasonalProducts = (): React.JSX.Element => {
  // Get featured products from the existing data
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Japanese-inspired header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="w-12 h-1 bg-amber-300 mx-auto mb-6"></div>
            <h2 className="text-4xl font-light tracking-wide text-gray-800 mb-2">
              旬の味覚
            </h2>
            <p className="text-gray-600 font-light tracking-widest">
              季節の彩りコレクション
            </p>
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-l-2 border-amber-300 transform -rotate-45"></div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-amber-300 transform rotate-45"></div>
          </div>
        </div>

        {/* Primary showcase */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-stretch rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Left side image */}
            <div className="md:w-1/2 relative">
              <div className="relative aspect-w-4 aspect-h-3 h-full">
                <Image
                  src={productImages[0]?.src || "/images/placeholder.jpg"}
                  alt="季節の特選商品"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="inline-block bg-amber-400 text-white px-4 py-1 text-sm rounded-full">
                    限定商品
                  </span>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-light text-gray-800 mb-4">
                  <span className="border-b-2 border-amber-300 pb-1">
                    春の彩り
                  </span>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  春の陽気とともに生まれる鮮やかな美味しさをお届けします。厳選された素材と職人の技が織りなす、この季節だけの特別なひとときをお楽しみください。
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>期間限定</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>熨斗対応可</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    <span>全国配送</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collections/spring"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition duration-300"
                >
                  <span>商品を見る</span>
                  <svg
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/about/season"
                  className="inline-flex items-center justify-center px-6 py-3 border border-amber-300 text-amber-600 rounded-full hover:bg-amber-50 transition duration-300"
                >
                  <span>詳細を見る</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary showcase grid - おすすめ商品 */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-center mb-8">
            <span className="relative">
              <span className="relative z-10 px-4">おすすめ商品</span>
              <span className="absolute left-0 right-0 bottom-1/2 h-1 bg-amber-200"></span>
            </span>
          </h3>

          {/* スマホでも横並びを維持するスクロール可能なコンテナ */}
          <div
            className="overflow-x-auto pb-4 md:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div
              className="flex min-w-max"
              style={{ minWidth: "calc(100% - 1rem)" }}
            >
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-64 flex-shrink-0 mx-2 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/products/${product.id}`}>
                    <div
                      className="relative"
                      style={{ width: "100%", height: "192px" }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>

                  <div className="p-5">
                    <h4 className="text-lg font-medium mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-800">
                        {product.price.toLocaleString()} 円
                        <span className="text-xs text-gray-500 ml-1">
                          （税込）
                        </span>
                      </span>
                      <Link
                        href={`/products/${product.id}`}
                        className="text-amber-500 hover:text-amber-600 inline-flex items-center text-sm transition duration-300"
                      >
                        商品を見る
                        <svg
                          className="w-4 h-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* タブレット・PC用グリッドレイアウト（スマホでは表示されない） */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/products/${product.id}`}>
                  <div
                    className="relative"
                    style={{ width: "100%", height: "192px" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>

                <div className="p-5">
                  <h4 className="text-lg font-medium mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-800">
                      {product.price.toLocaleString()} 円
                      <span className="text-xs text-gray-500 ml-1">
                        （税込）
                      </span>
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-amber-500 hover:text-amber-600 inline-flex items-center text-sm transition duration-300"
                    >
                      商品を見る
                      <svg
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom call-to-action */}
        <div className="bg-amber-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-light text-gray-800 mb-4">
              特別なひとときを演出する商品
            </h4>
            <p className="text-gray-600 mb-6">
              季節限定の味わいから定番の人気商品まで、様々なシーンで喜ばれる商品を取り揃えております。
              大切な方への贈り物や、特別な日の演出にぜひご利用ください。
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition duration-300"
            >
              <span>コレクション一覧へ</span>
              <svg
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalProducts;
