import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import CategoryCard from "../molecules/CategoryCard";

type Category = {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
};

const categories: Category[] = [
  {
    id: "1",
    name: "アクセサリー",
    imageUrl: "/accessory.webp",
    slug: "accessories",
  },
  {
    id: "2",
    name: "バッグ",
    imageUrl: "/bag.webp",
    slug: "bags",
  },
  {
    id: "3",
    name: "アパレル",
    imageUrl: "/3shirts.webp",
    slug: "apparel",
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="カテゴリー"
          centered
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
