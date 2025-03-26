"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../atoms/Logo";
import PageList from "../molecules/PageList";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  // メニュー項目選択時にメニューを閉じるハンドラー
  const handleMenuItemSelect = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="
        flex items-center 
        py-4 
        px-4 md:px-8 lg:px-[144px] 
        relative
        justify-between
        h-[64px] md:h-auto
      "
    >
      {/* ロゴ */}
      <div data-aos="slide-right">
        <Logo id="logo" href="/" />
      </div>

      {/* PC向けメニュー (md以上) */}
      <div className="hidden md:flex items-center gap-8" data-aos="slide-left">
        <PageList
          className="flex gap-8 text-sm font-semibold"
          onItemSelect={handleMenuItemSelect}
        />
      </div>

      {/* モバイル向けメニューアイコン (md未満) */}
      <div
        className="flex flex-row items-center justify-center gap-2 md:hidden relative z-50"
        data-aos="fade-in"
      >
        <span
          className="text-sm font-semibold z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <Image
              src="/images/cross.svg"
              alt="close"
              height={16}
              width={16}
              className="z-50"
            />
          ) : (
            "MENU"
          )}
        </span>
        <button
          className="relative flex items-center justify-center w-10 h-10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span
            className={`absolute block w-5 h-0.5 bg-slate-300 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute block w-5 h-0.5 bg-slate-300 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute block w-5 h-0.5 bg-slate-300 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* モバイルメニューのドロワー */}
      {isMenuOpen && (
        <>
          {/* 背景オーバーレイ */}
          <div
            className="fixed inset-0 bg-slate-300 bg-opacity-80 z-40"
            onClick={() => setIsMenuOpen(false)}
            data-aos="fade-in"
          />
          {/* メニュー */}
          <div
            className={`fixed inset-0 bg-slate-300 text-white flex flex-col items-center justify-center gap-6 text-xl font-bold z-40 transition-transform duration-500 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            data-aos="slide-up"
          >
            <PageList
              className="flex flex-col items-center gap-6"
              onItemSelect={handleMenuItemSelect}
              data-aos="fade-in"
              data-aos-delay="200"
            />

            <p className="text-xs mt-4" data-aos="fade-in" data-aos-delay="400">
              © bypay
            </p>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
