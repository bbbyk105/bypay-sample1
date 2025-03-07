import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <section className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
            <span className="relative z-10">LineUp</span>
            <span className="absolute -bottom-1 left-0 w-12 h-1 bg-amber-400 z-0"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.src || "/api/placeholder/500/500"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/products"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "bg-amber-500 hover:bg-amber-600 shadow-md group transition-all duration-300"
            )}
          >
            <span>商品一覧を見る</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LineUp;
