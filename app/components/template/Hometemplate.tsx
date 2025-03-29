import React from "react";
import Header from "../organisms/Header";
import HeroSlider from "../organisms/HeroSlider";
import CategorySection from "../organisms/CategorySection";
import InstagramSection from "../organisms/InstagramSection";
import PickUpSection from "../organisms/PickUpSection";

const HomeTemplate: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <CategorySection />
        <PickUpSection />
        <InstagramSection />
      </main>
    </>
  );
};

export default HomeTemplate;
