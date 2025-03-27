import React from "react";
import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  name: string;
  imageUrl: string;
  slug: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imageUrl,
  slug,
}) => {
  return (
    <Link
      href={`/category/${slug}`}
      className="block group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="relative overflow-hidden aspect-square mb-3">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-center text-base font-serif tracking-wide">{name}</h3>
    </Link>
  );
};

export default CategoryCard;
