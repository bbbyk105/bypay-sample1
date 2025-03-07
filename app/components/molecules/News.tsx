"use client";
import React, { useState } from "react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: "2025.3.1",
      category: "お知らせ",
      title: "春の新商品が発売開始しました",
    },
    {
      id: 2,
      date: "2025.2.15",
      category: "イベント",
      title: "byPay合同会社 創業祭のお知らせ",
    },
    {
      id: 3,
      date: "2025.2.1",
      category: "商品情報",
      title: "バレンタイン限定パッケージ販売中",
    },
    {
      id: 4,
      date: "2025.1.15",
      category: "お知らせ",
      title: "新年のご挨拶",
    },
    {
      id: 5,
      date: "2025.1.1",
      category: "イベント",
      title: "新春セール開催中",
    },
  ];

  const [visibleItems, setVisibleItems] = useState(3);

  // カテゴリーに応じた色を返す関数
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "お知らせ":
        return "bg-blue-200";
      case "イベント":
        return "bg-purple-200";
      case "商品情報":
        return "bg-green-200";
      default:
        return "bg-gray-200";
    }
  };

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
          <span className="relative z-10">News</span>
          <span className="absolute -bottom-1 left-0 w-12 h-1 bg-amber-400 z-0"></span>
        </h2>
        <a
          href="/news"
          className="text-sm text-gray-600 hover:text-amber-500 transition-colors flex items-center"
        >
          すべて見る
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="space-y-6 md:space-y-4">
        {newsItems.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="group flex flex-col md:flex-row md:items-center p-4 md:p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center mb-2 md:mb-0">
              <div className="mr-3 md:mr-6 flex-shrink-0">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${getCategoryColor(
                    item.category
                  )}`}
                ></span>
              </div>
              <div className="text-sm text-gray-500 md:w-24 flex-shrink-0 mr-4">
                {item.date}
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 md:mr-6 flex-shrink-0">
                {item.category}
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-200 mx-6"></div>
              <div className="mt-2 md:mt-0 ml-0 md:ml-4 text-sm md:text-base font-medium text-gray-800 group-hover:text-amber-500 transition-colors">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < newsItems.length && (
        <div className="mt-8 text-center md:text-right">
          <button
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-amber-500 transition-colors"
            onClick={handleShowMore}
          >
            もっと見る
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default News;
