import Link from "next/link";
import CustomButton from "@/src/components/atoms/CustomButton";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="text-center mt-20 px-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold">ページが見つかりません</h1>
      <p className="mt-4 mb-8 text-gray-600">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
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
  );
}
