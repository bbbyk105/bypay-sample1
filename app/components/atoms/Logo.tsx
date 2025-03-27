"use client";
import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="font-serif text-xl tracking-widest text-black">
      byPay
    </Link>
  );
};

export default Logo;
