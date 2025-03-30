"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "@/app/hooks/useCart";
import CustomButton from "../components/atoms/CustomButton"; // 独自のボタンコンポーネントをインポート

const CartPage = () => {
  // カスタムフックを使用してカート機能を取得
  const {
    cartDetails,
    cartCount,
    totalPrice,
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    handleCheckout,
  } = useCart();

  // カートアイテムを配列に変換
  const cartItems = Object.values(cartDetails || {});

  // AOSの初期化
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  // 税抜き価格計算 (税込価格から税抜き価格を計算)
  const calculatePriceWithoutTax = () => {
    return Math.floor((totalPrice || 0) / 1.1);
  };

  // 消費税額計算 (税込み価格から税額を計算)
  const calculateTaxAmount = () => {
    return (totalPrice || 0) - calculatePriceWithoutTax();
  };

  // カートが空の場合
  if (!cartItems.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        {/* カートの空メッセージ */}
        <div className="text-center space-y-6" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-800">
            カートが空です
          </h3>

          <Link href="/">
            <CustomButton
              className="shadow-lg transition-all duration-300"
              size="lg"
              variant="subtle"
            >
              買い物を続ける
            </CustomButton>
          </Link>
        </div>

        {/* 後で購入 */}
        <div
          className="mt-10 w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            保存されたアイテムはまだありません。
            <br />
            このリストには、購入するアイテムを追加できます。
          </p>
        </div>
      </div>
    );
  }

  // カートに商品がある場合
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
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
                          src={item.image || "/images/placeholder.jpg"}
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
                            onClick={() => decrementCartItem(item.id)}
                            disabled={item.quantity <= 1}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 text-center w-12">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => incrementCartItem(item.id)}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-r-md"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeCartItem(item.id)}
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
                <CustomButton
                  className="shadow-md transition-all duration-300"
                  variant="subtle"
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
                </CustomButton>
              </Link>
            </div>
          </div>

          {/* 注文サマリー */}
          <div className="lg:w-1/3" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                注文サマリー
              </h2>

              {/* 小計（税抜） */}
              <div className="flex justify-between mb-2">
                <p className="text-gray-700">
                  小計（税抜）({cartCount || 0}点)
                </p>
                <p className="text-gray-700">
                  ¥{calculatePriceWithoutTax().toLocaleString()}
                </p>
              </div>

              {/* 税金 */}
              <div className="flex justify-between mb-4">
                <p className="text-gray-700">消費税（10%）</p>
                <p className="text-gray-700">
                  ¥{calculateTaxAmount().toLocaleString()}
                </p>
              </div>

              {/* 区切り線 */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* 合計（税込） */}
              <div className="flex justify-between mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  合計（税込）
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  ¥{totalPrice?.toLocaleString() || "0"}
                </p>
              </div>

              {/* 購入ボタン */}
              <CustomButton
                className="w-full transition-all duration-300"
                size="lg"
                variant="subtle"
                onClick={handleCheckout}
              >
                今すぐ購入する
              </CustomButton>

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
                  <CustomButton className="rounded-l-none" variant="subtle">
                    適用
                  </CustomButton>
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
