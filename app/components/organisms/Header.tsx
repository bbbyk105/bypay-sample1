"use client";

import React, { useState, useEffect } from "react";
import Logo from "../atoms/Logo";
import NavItem from "../molecules/NavItem";
import { usePathname } from "next/navigation";
import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import Link from "next/link";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Caution", href: "/caution" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                label={item.label}
                href={item.href}
                active={pathname === item.href}
              />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="text-black hover:opacity-75 transition-opacity"
            >
              <HiOutlineShoppingBag size={20} />
            </Link>
            <button
              className="md:hidden text-black"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  active={pathname === item.href}
                />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
