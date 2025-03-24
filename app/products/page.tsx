import React from "react";
import Image from "next/image";
import { client } from "@/libs/client";

interface Product {
  id: string;
  name: string;
  price: number;
  imageURL: { url: string };
}

const ProductGrid = async () => {
  // 非同期関数内でデータを取得
  const data = await client.get({ endpoint: "products" });
  const products: Product[] = data.contents;

  return (
    <div className="bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">商品一覧</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 mb-2">
              <div className="relative aspect-square">
                <Image
                  src={product.imageURL.url}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-1">
              <h3 className="text-xs text-gray-800 font-medium line-clamp-2 mb-1 leading-tight">
                {product.name}
              </h3>
              <p className="text-sm font-bold">
                {product.price}
                <span className="text-xs">円</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
