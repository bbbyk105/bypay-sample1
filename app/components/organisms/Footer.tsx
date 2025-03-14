"use client";
import Image from "next/image";
import PageList from "../molecules/PageList";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 px-6 md:px-12 lg:px-[160px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* ページリンク */}
        <PageList className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200" />

        {/* SNSリンク */}
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:opacity-80 transform hover:scale-110 transition-transform duration-200"
            aria-label="Twitter"
          >
            <Image
              src="/images/twitter.svg"
              alt="Twitter"
              width={28}
              height={28}
            />
          </a>
          <a
            href="#"
            className="hover:opacity-80 transform hover:scale-110 transition-transform duration-200"
            aria-label="Instagram"
          >
            <Image
              src="/images/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>

      {/* 著作権表記 */}
      <p className="text-center text-xs mt-8 text-gray-400">
        © 2025 byPay. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
