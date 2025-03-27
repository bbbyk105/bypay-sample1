import React from "react";
import Header from "../organisms/Header";
import HeroSlider from "../organisms/HeroSlider";
import CategorySection from "../organisms/CategorySection";
import NewArrivalsSection from "../organisms/NewArrivalsSection";
import InstagramSection from "../organisms/InstagramSection";

const HomeTemplate: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <CategorySection />
        <NewArrivalsSection />
        <InstagramSection />
      </main>
    </>
  );
};

export default HomeTemplate;
