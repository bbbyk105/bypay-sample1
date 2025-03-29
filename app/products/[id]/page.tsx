import { client } from "@/libs/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/app/components/atoms/Button";
import { Product } from "../../types/Product";
import { BuyNowButton } from "@/app/components/organisms/BuyNowButton";

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

    return (
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full aspect-square relative">
            <Image
              src={product.imageURL.url}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price.toLocaleString()}
                <span className="text-xl ml-1">円</span>
              </span>
              <span className="text-green-600 font-medium">在庫あり</span>
            </div>

            {product.description && (
              <div
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            <div className="flex flex-col space-y-4">
              <Button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                カートに追加
              </Button>
              <BuyNowButton priceId={product.priceId} />
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
