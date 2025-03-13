type ProductProps = {
  id: number;
  name: string;
  price: number;
  taxIncluded: boolean;
  image: string;
  description: string;
};

type ProductImageProps = {
  src: string;
  alt: string;
  label?: string;
  width: number;
  height: number;
  className: string;
};

export const products: ProductProps[] = [
  {
    id: 1,
    name: "ヘッドホン（5個入）",
    price: 820,
    taxIncluded: true,
    image: "/headphone.jpg",
    description: "コンパクトサイズながら高音質を実現した5個セット",
  },
  {
    id: 2,
    name: "ヘッドホン（8個入）",
    price: 1500,
    taxIncluded: true,
    image: "/headphone.jpg",
    description: "ノイズキャンセリング機能付きの8個セット",
  },
  {
    id: 3,
    name: "ヘッドホン（12個入）",
    price: 2250,
    taxIncluded: true,
    image: "/headphone.jpg",
    description: "ワイヤレス接続可能な高性能12個セット",
  },
  {
    id: 4,
    name: "ヘッドホン（16個入）",
    price: 3000,
    taxIncluded: true,
    image: "/headphone.jpg",
    description: "長時間バッテリー搭載の16個セット",
  },
];

export const productImages: ProductImageProps[] = [
  {
    src: "/headphone.jpg",
    alt: "ヘッドホン",
    width: 900,
    height: 600,
    className: "rounded-xl shadow-2xl",
  },
];
