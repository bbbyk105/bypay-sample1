import LineUp from "../molecules/LineUp";
import Products from "../molecules/Products";
import Hero from "../organisms/Hero";

const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <LineUp />
      <Products />
      <Products reverse />
    </>
  );
};

export default HomeTemplate;
