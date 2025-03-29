"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/libs/client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchBar from "../components/molecules/SearchBar";
import { Product } from "../types/Product";

interface ProductsResponse {
  contents: Product[];
  totalCount: number;
  limit: number;
  offset: number;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 10;

  useEffect(() => {
    // AOSの初期化
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * limit;
        const data: ProductsResponse = await client.get({
          endpoint: "products",
          queries: { limit, offset },
        });

        setProducts(data.contents);
        setTotalPages(Math.ceil(data.totalCount / limit));
      } catch (error) {
        console.error("商品データの取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    // ページ変更時にAOSをリフレッシュ
    if (!loading) {
      AOS.refresh();
    }
  }, [loading]);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 pt-12">
        <div className="mb-10 flex justify-center" data-aos="fade-down">
          <SearchBar placeholder="商品を検索..." />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10 mb-16">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex flex-col group"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="block overflow-hidden"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mb-3 relative">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.imageURL.url}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                  </Link>

                  <div className="mt-2 px-1">
                    <Link href={`/products/${product.id}`} className="block">
                      <h3 className="text-sm text-gray-800 font-medium line-clamp-2 mb-1 group-hover:text-gray-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-lg font-bold text-gray-900">
                        {product.price.toLocaleString()}
                        <span className="text-xs ml-1">円</span>
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* ページネーション */}
            <div
              className="mt-12 flex justify-center gap-6 items-center"
              data-aos="fade-up"
            >
              <button
                onClick={handlePrev}
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                disabled={currentPage === 1}
              >
                前へ
              </button>

              <span className="text-sm font-medium bg-white px-4 py-2 rounded-lg shadow-sm">
                {currentPage} / {totalPages}ページ
              </span>

              <button
                onClick={handleNext}
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                disabled={currentPage === totalPages}
              >
                次へ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
