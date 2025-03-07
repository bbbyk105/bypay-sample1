import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const LineUp = () => {
  const products = [
    {
      id: 1,
      name: "博多通りもん",
      src: "/headphone.jpg",
    },
    { id: 2, name: "博多じまん", src: "/camera.jpg" },
    {
      id: 3,
      name: "博多玉露まんじゅう",
      src: "/headphone.jpg",
    },
    { id: 4, name: "餡摘みもち", src: "/camera.jpg" },
    { id: 5, name: "博多藻あん", src: "/headphone.jpg" },
    {
      id: 6,
      name: "川端ぜんざい",
      src: "/camera.jpg",
    },
    {
      id: 7,
      name: "博多よかばい",
      src: "/camera.jpg",
    },
    {
      id: 8,
      name: "にぎやっか粋",
      src: "/camera.jpg",
    },
  ];

  return (
    <div className="mx-auto py-10 bg-gray-100">
      <h1 className="text-xl md:text-3xl font-semibold mb-8 text-center text-gray-800">
        LineUp
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white rounded-lg overflow-hidden"
          >
            <div className="relative w-full  h-64">
              <Image
                src={product.src || "https://via.placeholder.com/150"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/products" className={cn(buttonVariants({ size: "lg" }))}>
          商品一覧を見る
        </Link>
      </div>
    </div>
  );
};

export default LineUp;
