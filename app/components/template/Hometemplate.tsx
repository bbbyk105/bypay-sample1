import LineUp from "../molecules/LineUp";
import Products from "../molecules/Products";
import Hero from "../organisms/Hero";
import SeasonalProducts from "../molecules/SeosonalProducts";

const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <LineUp />
      <Products />
      <Products reverse />
      <SeasonalProducts />
    </>
  );
};

export default HomeTemplate;
