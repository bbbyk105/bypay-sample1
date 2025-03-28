"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../components/molecules/SearchBar";
import AOS from "aos";
import "aos/dist/aos.css";

// ProductGridコンポーネントと同じ型定義を使用
export type Product = {
  id: string;
  name: string;
  price: number;
  imageURL: { url: string };
  description: string;
  priceId?: string;
};

interface SearchResults {
  contents: Product[];
  totalCount: number;
  limit: number;
  offset: number;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // AOSの初期化
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    // クエリが空の場合は検索しない
    if (!query) return;

    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        // API Route経由で検索APIを呼び出す
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error("検索に失敗しました");
        }

        const data = await response.json();

        // APIレスポンスのフィールド名を変換（必要に応じて）
        // これは、APIのレスポンス形式によって異なる可能性があります
        const mappedData: SearchResults = {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          contents: data.contents.map((item: any) => ({
            id: item.id,
            name: item.title || item.name, // titleまたはnameフィールドを使用
            price: item.price,
            imageURL: {
              url: item.imageUrl || (item.imageURL ? item.imageURL.url : ""),
            },
            description: item.description,
          })),
          totalCount: data.totalCount,
          limit: data.limit,
          offset: data.offset,
        };

        setResults(mappedData);
      } catch (err) {
        console.error("検索エラー:", err);
        setError("検索中にエラーが発生しました。もう一度お試しください。");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  useEffect(() => {
    // データロード完了時にAOSをリフレッシュ
    if (!loading && results) {
      AOS.refresh();
    }
  }, [loading, results]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 pt-12">
        <div className="mb-10 flex justify-center" data-aos="fade-down">
          <SearchBar initialQuery={query} placeholder="商品を検索..." />
        </div>

        <h1 className="text-2xl font-bold text-center mb-8" data-aos="fade-up">
          {query ? `"${query}"の検索結果` : "全ての商品"}
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center" data-aos="fade-up">
            {error}
          </p>
        ) : results ? (
          <>
            {results.totalCount > 0 ? (
              <>
                <p
                  className="text-center text-gray-600 mb-8"
                  data-aos="fade-up"
                >
                  {results.totalCount}件の商品が見つかりました
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10 mb-16">
                  {results.contents.map((product, index) => (
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
                        <Link
                          href={`/products/${product.id}`}
                          className="block"
                        >
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
              </>
            ) : (
              <p className="text-gray-600 text-center" data-aos="fade-up">
                「{query}
                」に一致する商品が見つかりませんでした。別のキーワードをお試しください。
              </p>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
