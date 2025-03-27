import React from "react";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  slug,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
      <Link href={`/products/${slug}`} className="group block">
        <div className="relative overflow-hidden aspect-square mb-3">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white text-sm tracking-wider px-4 py-2 border border-white">
              View Product
            </span>
          </div>
        </div>
        <h3 className="text-sm font-light mb-1">{name}</h3>
        <p className="text-sm">¥{price.toLocaleString()}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
