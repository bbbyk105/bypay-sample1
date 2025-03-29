import { client } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "../../types/Product";
import { BuyNowButton } from "@/app/components/organisms/BuyNowButton";
import { AddToCartButton } from "@/app/components/molecules/AddToCart";
import { CartProduct } from "@/app/hooks/useCart";

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
      currency: "JPY", // 日本円を想定
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
                  <span className="text-xl ml-1 text-gray-500">円</span>
                </span>
                <span className="text-sm font-medium py-1 px-3 bg-gray-100 text-emerald-600 inline-block w-fit rounded-full">
                  在庫あり
                </span>
              </div>

              {/* 商品説明 */}
              {product.description && (
                <div className="border-t border-gray-200 pt-6">
                  <div
                    className="prose prose-sm max-w-none text-gray-600 font-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              )}

              {/* 購入ボタン */}
              <div className="flex flex-col space-y-4 pt-4">
                <AddToCartButton
                  product={cartProduct}
                  variant="default"
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 w-full rounded-none transition-colors duration-200"
                />
                <BuyNowButton priceId={product.priceId} />

                {/* お買い物を続けるボタン */}
                <Link
                  href="/products"
                  className="text-center py-3 border border-gray-400 hover:border-gray-600 text-gray-700 hover:text-gray-900 font-medium w-full transition-all duration-300 bg-transparent tracking-wide"
                >
                  お買い物を続ける
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
