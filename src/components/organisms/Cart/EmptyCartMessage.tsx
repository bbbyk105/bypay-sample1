import React from "react";
import Link from "next/link";
import CustomButton from "../../atoms/CustomButton";

const EmptyCartMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center space-y-6" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-gray-800">カートが空です</h3>

        <Link href="/">
          <CustomButton
            className="shadow-lg transition-all duration-300"
            size="lg"
            variant="subtle"
          >
            買い物を続ける
          </CustomButton>
        </Link>
      </div>

      <div
        className="mt-10 w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          保存されたアイテムはまだありません。
          <br />
          このリストには、購入するアイテムを追加できます。
        </p>
      </div>
    </div>
  );
};

export default EmptyCartMessage;
