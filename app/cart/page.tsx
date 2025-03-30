"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "@/app/hooks/useCart";
import CustomButton from "../components/atoms/CustomButton";

const CartPage = () => {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    handleCheckout,
  } = useCart();

  const cartItems = Object.values(cartDetails || {});

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const calculatePriceWithoutTax = () => {
    return Math.floor((totalPrice || 0) / 1.1);
  };

  const calculateTaxAmount = () => {
    return (totalPrice || 0) - calculatePriceWithoutTax();
  };

  type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  };

  const handleDeleteClick = (item: CartItem) => {
    if (window.confirm(`「${item.name}」を削除しますか？`)) {
      removeCartItem(item.id);
    }
  };

  // カートが空の場合
  if (!cartItems.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
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

  // カートに商品がある場合 - モバイル向け最適化
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* モバイルでのカート表示を最適化 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* カート商品リスト - モバイル向けスタイル改善 */}
          <div className="lg:w-2/3" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* モバイル向けカートヘッダー */}
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  ショッピングカート
                </h2>
                <span className="text-sm font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                  {cartCount}点
                </span>
              </div>

              <ul className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li
                    key={item.id}
                    className="p-4 sm:p-6"
                    data-aos="fade-right"
                    data-aos-delay={150 + index * 50}
                  >
                    <div className="flex items-start">
                      {/* 商品画像 - モバイルでのサイズ最適化 */}
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-md overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image || "/images/placeholder.jpg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* 商品情報 - モバイル表示最適化 */}
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-base sm:text-lg font-medium text-gray-900 line-clamp-2">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => handleDeleteClick(item)}
                            className="ml-2 text-gray-400 hover:text-red-600 transition-colors"
                            aria-label="削除"
                          >
                            削除する
                          </button>
                        </div>

                        <p className="mt-1 text-sm text-gray-500 hidden sm:block">
                          商品ID: {item.id}
                        </p>

                        <div className="mt-2 flex justify-between items-end">
                          <p className="text-base sm:text-lg font-semibold text-gray-900">
                            ¥{item.price.toLocaleString()}
                          </p>

                          {/* 数量調整 - モバイル向けに改善 */}
                          <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                            <button
                              onClick={() => decrementCartItem(item.id)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <span className="text-lg">-</span>
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => incrementCartItem(item.id)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-r-md"
                            >
                              <span className="text-lg">+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 買い物を続ける */}
            <div className="mt-4 sm:mt-6" data-aos="fade-up">
              <Link href="/">
                <CustomButton
                  className="shadow-md transition-all duration-300 w-full sm:w-auto"
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

          {/* 注文サマリー - モバイル向けスタイル改善 */}
          <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 pb-4 border-b border-gray-200">
                注文サマリー
              </h2>

              <div className="space-y-3 py-4">
                {/* 小計（税抜） */}
                <div className="flex justify-between">
                  <p className="text-gray-700">
                    小計（税抜）({cartCount || 0}点)
                  </p>
                  <p className="text-gray-700 font-medium">
                    ¥{calculatePriceWithoutTax().toLocaleString()}
                  </p>
                </div>

                {/* 税金 */}
                <div className="flex justify-between">
                  <p className="text-gray-700">消費税（10%）</p>
                  <p className="text-gray-700 font-medium">
                    ¥{calculateTaxAmount().toLocaleString()}
                  </p>
                </div>
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

              {/* 購入ボタン - モバイルでより目立つように */}
              <CustomButton
                className="w-full transition-all duration-300 shadow-lg"
                size="sm"
                variant="subtle"
                onClick={handleCheckout}
              >
                今すぐ購入する
              </CustomButton>

              {/* 決済方法案内（追加された決済方法を含む） */}
              <div className="mt-4 flex justify-center flex-wrap gap-3">
                <div className="w-10 h-6 relative">
                  <Image
                    src="/images/cards/visa.webp"
                    alt="Visa"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-6 relative">
                  <Image
                    src="/images/cards/master.webp"
                    alt="Mastercard"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-6 relative">
                  <Image
                    src="/images/cards/amex.webp"
                    alt="American Express"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-6 relative">
                  <Image
                    src="/images/cards/jcb.webp"
                    alt="JCB"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-8 relative">
                  <Image
                    src="/images/cards/applepay.webp"
                    alt="Apple Pay"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-8 relative">
                  <Image
                    src="/images/cards/googlepay.webp"
                    alt="Google Pay"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-8 relative">
                  <Image
                    src="/images/cards/wechat.webp"
                    alt="WeChat Pay"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-8 relative">
                  <Image
                    src="/images/cards/alipay.webp"
                    alt="Alipay"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">
                各種クレジットカード・電子決済がご利用いただけます
              </p>
            </div>
          </div>
        </div>

        {/* モバイル向け固定購入ボタン */}
        {/* <div
          className="lg:hidden fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              合計（税込）:
            </span>
            <span className="text-lg font-bold text-gray-900">
              ¥{totalPrice?.toLocaleString() || "0"}
            </span>
          </div>
          <CustomButton
            className="w-full transition-all duration-300"
            size="lg"
            variant="subtle"
            onClick={handleCheckout}
          >
            今すぐ購入する
          </CustomButton>
        </div>

        {/* モバイル向け下部スペース追加（固定ボタン用） */}
        {/* <div className="h-24 lg:hidden"></div>  */}
      </div>
    </div>
  );
};

export default CartPage;
