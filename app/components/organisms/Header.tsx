"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "../atoms/Logo";
import PageList from "../molecules/PageList";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div>
        <Logo id="logo" href="/" />
      </div>

      {/* PC向けメニュー (md以上) */}
      <div className="hidden md:flex items-center gap-8">
        {/* 横並びに PageList と LanguageSwitcher を配置 */}
        <PageList className="flex gap-8 text-sm font-semibold" />
      </div>

      {/* モバイル向けメニューアイコン (md未満) */}
      <div className="flex flex-row items-center justify-center gap-2 md:hidden">
        <span
          className="text-sm font-semibold z-[1000]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <Image src="/images/cross.svg" alt="cross" height={16} width={16} />
          ) : (
            "MENU"
          )}
        </span>
        <button
          className="relative flex items-center justify-center w-10 h-10  transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span
            className={`absolute block w-5 h-0.5 bg-black transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute block w-5 h-0.5 bg-black transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute block w-5 h-0.5 bg-black transition-transform duration-300 ${
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
            className="fixed inset-0 bg-black bg-opacity-80 z-40 "
            onClick={() => setIsMenuOpen(false)}
          />
          {/* メニュー */}
          <div
            className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-6 text-xl font-bold z-40 transition-transform duration-500 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <PageList className="flex flex-col items-center gap-6" />

            <button className="text-lg border border-white px-6 py-3 rounded-lg">
              CONTACT
            </button>
            <p className="text-xs mt-4">© NEOTOKYO</p>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
