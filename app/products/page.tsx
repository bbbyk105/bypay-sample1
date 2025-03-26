"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/libs/client";
import Link from "next/link";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageURL: { url: string };
  description: string;
};

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
  const limit = 10; // MicroCMSの1ページあたりの上限

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * limit;
        const data: ProductsResponse = await client.get({
          endpoint: "products",
          queries: { limit, offset },
        });

        setProducts(data.contents);
        // 総ページ数を計算
        setTotalPages(Math.ceil(data.totalCount / limit));
      } catch (error) {
        console.error("商品データの取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]); // currentPageが変更されたら再取得

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0); // ページトップにスクロール
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); // ページトップにスクロール
    }
  };

  return (
    <div className="bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">商品一覧</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">読み込み中...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 mb-2">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative aspect-square">
                      <Image
                        src={product.imageURL.url}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                        style={{ objectFit: "cover" }}
                        className="w-full"
                      />
                    </div>
                  </Link>
                </div>

                <div className="mt-1">
                  <h3 className="text-xs text-gray-800 font-medium line-clamp-2 mb-1 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm font-bold">
                    {product.price}
                    <span className="text-xs">円</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ページネーション */}
          <div className="mt-8 flex justify-center gap-4 items-center">
            <button
              onClick={handlePrev}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              前へ
            </button>

            <span className="text-sm font-medium">
              {currentPage} / {totalPages}ページ
            </span>

            <button
              onClick={handleNext}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
            >
              次へ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;
