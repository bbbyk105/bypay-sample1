import React from "react";
import Image from "next/image";

// 商品情報の型を定義
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

// サンプルデータ（画像のカレー商品をモデルにしています）
const products: Product[] = [
  {
    id: 1,
    name: "素材を生かしたカレー 6代目バターチキン",
    price: 350,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+1", // ダミー画像
  },
  {
    id: 2,
    name: "素材を生かした 牛ばら肉の大盛りカレー",
    price: 350,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+2", // ダミー画像
  },
  {
    id: 3,
    name: "素材を生かした 牛すじカレー",
    price: 290,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+3", // ダミー画像
  },
  {
    id: 4,
    name: "素材を生かしたカレー グリーン",
    price: 350,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+4", // ダミー画像
  },
  {
    id: 5,
    name: "[長期保存可能] 備蓄ごはん 白米 80g",
    price: 390,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+5", // ダミー画像
  },
  {
    id: 6,
    name: "焙煎スパイスのこころ 牛肉カレー",
    price: 490,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+6", // ダミー画像
  },
  // 追加商品（4列になるよう合計24個用意）
  {
    id: 7,
    name: "辛口ビーフカレー",
    price: 380,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+7", // ダミー画像
  },
  {
    id: 8,
    name: "野菜たっぷりカレー",
    price: 320,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+8", // ダミー画像
  },
  {
    id: 9,
    name: "チキンと豆のカレー",
    price: 360,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+9", // ダミー画像
  },
  {
    id: 10,
    name: "マイルドなキーマカレー",
    price: 330,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+10", // ダミー画像
  },
  {
    id: 11,
    name: "スパイシーラムカレー",
    price: 420,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+11", // ダミー画像
  },
  {
    id: 12,
    name: "海老のココナッツカレー",
    price: 450,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+12", // ダミー画像
  },
  // 3列目
  {
    id: 13,
    name: "一日分の野菜カレー",
    price: 380,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+13", // ダミー画像
  },
  {
    id: 14,
    name: "お子様向けマイルドカレー",
    price: 320,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+14", // ダミー画像
  },
  {
    id: 15,
    name: "黒豚カレー",
    price: 480,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+15", // ダミー画像
  },
  {
    id: 16,
    name: "濃厚ポークカレー",
    price: 390,
    imageUrl: "https://via.placeholder.com/400x320?text=Image+16", // ダミー画像
  },
];

const ProductGrid = () => {
  return (
    <div className="bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">商品一覧</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 mb-2">
              <div className="relative aspect-square">
                <Image
                  src={product.imageUrl}
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
