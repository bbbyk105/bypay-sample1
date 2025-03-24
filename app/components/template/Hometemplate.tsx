import EcommerceHero from "../molecules/FeaturedBanner";
import LineUp from "../molecules/LineUp";
import Products from "../molecules/Products";
import SeasonalProducts from "../molecules/SeosonalProducts";

const HomeTemplate = () => {
  return (
    <>
      <EcommerceHero
        slides={[
          {
            id: 1,
            image: "/headphone.jpg",
            title: "最新トレンド",
            subtitle: "新しいコレクションをチェックしよう",
            buttonText: "今すぐ見る",
            buttonLink: "/shop",
            align: "center",
            textColor: "text-white",
            buttonStyle: "primary",
          },
          {
            id: 2,
            image: "/camera.jpg",
            title: "セール開催中",
            subtitle: "最大50%OFFの特別セール",
            buttonText: "詳細はこちら",
            buttonLink: "/sale",
            align: "right",
            textColor: "text-white",
            buttonStyle: "outline",
          },
        ]}
      />
      <LineUp />
      <Products />
      <Products reverse />
      <SeasonalProducts />
    </>
  );
};

export default HomeTemplate;
