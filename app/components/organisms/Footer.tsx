import React from "react";
import Logo from "../atoms/Logo";
import SocialIcon from "../molecules/SocialIcon";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";

// Remove React.FC and use regular function
function Footer() {
  // Use navItems for reusability like in the Header component
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Collection", href: "/collection" },
    { label: "Contact", href: "/contact" },
  ];

  const socialItems = [
    { Icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { Icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
    { Icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <Logo />
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              シンプルで上質なデザインのアクセサリーとアパレルをお届けします。
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="md:text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h3 className="text-sm font-medium mb-4 tracking-wider">
              ナビゲーション
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div
            className="md:text-right"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="text-sm font-medium mb-4 tracking-wider">
              ソーシャルメディア
            </h3>
            <div className="flex space-x-4 md:justify-end mb-6">
              {socialItems.map((social) => (
                <SocialIcon
                  key={social.label}
                  Icon={social.Icon}
                  url={social.url}
                  label={social.label}
                />
              ))}
            </div>

            {/* <h3 className="text-sm font-medium mb-4 tracking-wider">
              ニュースレター
            </h3>
            <div className="flex border-b border-gray-300">
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full py-2 bg-transparent outline-none text-sm"
              />
              <button className="whitespace-nowrap text-sm font-medium">
                登録
              </button>
            </div> */}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} byPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
