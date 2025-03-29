"use client";

import { cn } from "@/libs/utils";
import Link from "next/link";
import React, { useState, useEffect, JSX } from "react";
import { Button } from "../components/atoms/Button";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BuyNowButton } from "../components/organisms/BuyNowButton";

// 商品アイテムの型定義
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = (): JSX.Element => {
  // カート内の商品を管理するステート
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // サンプルデータ - 実際の実装ではAPI等からデータを取得
    {
      id: 1,
      name: "サンプル商品1",
      price: 2980,
      quantity: 1,
      image: "/images/product1.jpg",
    },
  ]);

  // AOSの初期化
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  // 数量変更ハンドラー
  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return; // 1未満の数量は許可しない

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // 商品削除ハンドラー
  const removeItem = (id: number): void => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // 合計金額の計算
  const calculateTotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // カートが空の場合
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        {/* カートの空メッセージ */}
        <div className="text-center space-y-6" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-800">
            カートが空です
          </h3>

          <Link href="/">
            <Button
              className={cn(
                "bg-gray-300 hover:bg-amber-600 shadow-lg transition-all duration-300"
              )}
              size="lg"
              variant="default"
            >
              買い物を続ける
            </Button>
          </Link>
        </div>

        {/* 後で購入 */}
        <div
          className="mt-10 w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h4 className="text-lg font-semibold text-gray-900">後で購入</h4>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            保存されたアイテムはまだありません。
            <br />
            このリストには、後で購入するアイテムを追加できます。
          </p>
        </div>
      </div>
    );
  }

  // カートに商品がある場合
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
          data-aos="fade-down"
        >
          ショッピングカート
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* カート商品リスト */}
          <div className="lg:w-2/3" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li
                    key={item.id}
                    className="p-6 flex flex-col sm:flex-row"
                    data-aos="fade-right"
                    data-aos-delay={150 + index * 50}
                  >
                    <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-200 rounded-md overflow-hidden mb-4 sm:mb-0">
                      {/* 商品画像 */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col sm:flex-row sm:ml-6 justify-between">
                      {/* 商品情報 */}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          商品ID: {item.id}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          ¥{item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* 数量調整と削除 */}
                      <div className="mt-4 sm:mt-0 flex flex-col sm:items-end">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-l-md"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 text-center w-12">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-r-md"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-4 text-sm text-red-600 hover:text-red-800 transition-colors"
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 買い物を続ける */}
            <div className="mt-6" data-aos="fade-up">
              <Link href="/">
                <Button
                  className={cn(
                    "bg-gray-300 hover:bg-gray-400 text-gray-800 shadow-md transition-all duration-300"
                  )}
                  size="default"
                  variant="outline"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  買い物を続ける
                </Button>
              </Link>
            </div>
          </div>

          {/* 注文サマリー */}
          <div className="lg:w-1/3" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                注文サマリー
              </h2>

              {/* 小計 */}
              <div className="flex justify-between mb-2">
                <p className="text-gray-700">小計</p>
                <p className="text-gray-700">
                  ¥{calculateTotal().toLocaleString()}
                </p>
              </div>

              {/* 税金 */}
              <div className="flex justify-between mb-4">
                <p className="text-gray-700">消費税</p>
                <p className="text-gray-700">
                  ¥{Math.floor(calculateTotal() * 0.1).toLocaleString()}
                </p>
              </div>

              {/* 区切り線 */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* 合計 */}
              <div className="flex justify-between mb-6">
                <p className="text-lg font-semibold text-gray-900">合計</p>
                <p className="text-lg font-semibold text-gray-900">
                  ¥
                  {(
                    calculateTotal() + Math.floor(calculateTotal() * 0.1)
                  ).toLocaleString()}
                </p>
              </div>

              {/* 購入ボタン */}
              <BuyNowButton />

              {/* クーポンコード */}
              <div className="mt-6">
                <label
                  htmlFor="coupon"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  クーポンコード
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="coupon"
                    className="flex-1 min-w-0 border border-gray-300 rounded-l-md px-3 py-2 text-gray-900 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="COUPON"
                  />
                  <Button
                    className={cn(
                      "bg-gray-800 hover:bg-gray-900 text-white rounded-l-none"
                    )}
                    size="default"
                    variant="default"
                  >
                    適用
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
