import { cn } from "@/libs/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../components/atoms/Button";

const EmptyCartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* カートの空メッセージ */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">カートが空です</h3>

        <Link href="/">
          <Button
            className={cn(
              "bg-gray-300 hover:bg-amber-600 shadow-lg transition-all duration-300"
            )}
            size="lg"
            variant="default"
          >
            買い物を続ける
          </Button>
        </Link>
      </div>

      {/* 後で購入 */}
      <div className="mt-10 w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border">
        <h4 className="text-lg font-semibold text-gray-900">後で購入</h4>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          保存されたアイテムはまだありません。
          <br />
          このリストには、後で購入するアイテムを追加できます。
        </p>
      </div>
    </div>
  );
};

export default EmptyCartPage;
