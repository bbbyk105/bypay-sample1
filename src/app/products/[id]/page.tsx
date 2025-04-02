import { client } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "../../../types/Product";
import { CartProduct } from "@/src/hooks/useCart";
import ProductDescription from "@/src/components/molecules/ProductDescription";
import { AddToCartButton } from "@/src/components/molecules/AddToCart";
import CustomButton from "@/src/components/atoms/CustomButton";
import { ShoppingBag, ArrowRight } from "lucide-react"; // アイコンをインポート

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const data = await client.get<{ contents: Product[] }>({
    endpoint: "products",
    queries: { fields: "id" },
  });

  return data.contents.map((product) => ({
    id: product.id,
  }));
}

const Page = async (props: Props) => {
  const { params } = props;

  if (!(await params).id) {
    notFound();
  }

  try {
    const product = await client.get<Product>({
      endpoint: "products",
      contentId: (await params).id,
    });

    if (!product) {
      notFound();
    }

    // カート用の商品データを作成
    const cartProduct: CartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      currency: "JPY",
      image: product.imageURL.url,
      description: product.description,
    };

    return (
      <div className="bg-white text-gray-800 min-h-screen mt-16">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
            {/* 左側: 商品画像セクション - 大きく表示 */}
            <div className="md:col-span-7 relative">
              <div className="aspect-square w-full relative overflow-hidden bg-gray-50">
                <Image
                  src={product.imageURL.url}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 右側: 商品情報セクション */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-8">
              {/* 商品名 */}
              <div>
                <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 tracking-tight mb-4">
                  {product.name}
                </h1>
              </div>

              {/* 価格と在庫表示 */}
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-light tracking-tight text-gray-900">
                  {product.price.toLocaleString()}
                  <span className="text-xl ml-1 text-gray-500">円　(税込)</span>
                </span>
              </div>

              {/* 商品説明 */}
              {product.description && (
                <div className="border-t border-gray-200 pt-6">
                  <ProductDescription description={product.description} />
                </div>
              )}

              {/* ボタングループ */}
              <div className="flex flex-col space-y-4 pt-4">
                {/* カートに追加ボタン */}
                <AddToCartButton
                  product={cartProduct}
                  variant="default"
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 w-full rounded-none transition-colors duration-200"
                />

                {/* カートへ行くボタン - 新規追加 */}
                <Link href="/cart">
                  <CustomButton
                    variant="primary"
                    size="lg"
                    className="w-full rounded-none"
                    icon={<ShoppingBag size={20} />}
                  >
                    カートへ進む
                  </CustomButton>
                </Link>

                {/* お買い物を続けるボタン - カスタムボタンに変更 */}
                <Link href="/products">
                  <CustomButton
                    variant="ghost"
                    size="lg"
                    className="w-full rounded-none hover:text-white"
                    icon={<ArrowRight size={20} />}
                  >
                    お買い物を続ける
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("詳細ページ取得エラー", error);
    notFound();
  }
};

export default Page;
