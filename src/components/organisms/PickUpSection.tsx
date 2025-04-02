import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ProductCard from "../molecules/ProductCard";
import Button from "../atoms/Button2";
import Link from "next/link";

// 仮の商品データ
const products = [
  {
    id: "1",
    name: "シルバーリング",
    price: 12800,
    imageUrl: "/images/silver-ring.webp",
    slug: "silver-ring",
  },
  {
    id: "2",
    name: "ゴールドリング",
    price: 18600,
    imageUrl: "/images/gold-ring.webp",
    slug: "gold-necklace",
  },
  {
    id: "3",
    name: "パールイヤリング",
    price: 14500,
    imageUrl: "/images/pearl.webp",
    slug: "pearl-earrings",
  },
  {
    id: "4",
    name: "レザーバッグ",
    price: 32000,
    imageUrl: "/images/leather-bag.webp",
    slug: "leather-bag",
  },
];

const PickUpSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Pickc up"
          subtitle="おすすめアイテム"
          centered
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              slug={product.slug}
            />
          ))}
        </div>
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Link href="/products">
            <Button variant="outline" size="md">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PickUpSection;
