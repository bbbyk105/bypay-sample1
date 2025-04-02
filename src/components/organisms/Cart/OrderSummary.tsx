import React from "react";
import OrderSummaryItem from "../../molecules/OrderSummaryItem";
import PaymentMethodsDisplay from "../../molecules/PaymentMethodsDisplay";
import CustomButton from "../../atoms/CustomButton";

type OrderSummaryProps = {
  itemCount: number;
  totalPrice: number;
  onCheckout: () => void;
  taxRate?: number; // オプションで税率を指定可能に
};

const OrderSummary = ({
  itemCount,
  totalPrice,
  onCheckout,
  taxRate = 0.1, // デフォルトは10%
}: OrderSummaryProps) => {
  /**
   * 消費税込みの金額から税抜き価格を計算する関数
   * @param priceWithTax 税込み価格
   * @returns 税抜き価格（小数点以下四捨五入）
   */
  const calculatePriceWithoutTax = (): number => {
    return Math.round(totalPrice / (1 + taxRate));
  };

  /**
   * 消費税額を計算する関数
   * @returns 消費税額（小数点以下四捨五入）
   */
  const calculateTaxAmount = (): number => {
    // 税抜き価格に税率をかけて四捨五入
    return Math.round(calculatePriceWithoutTax() * taxRate);
  };

  // 税率を百分率で表示（例: 10%）
  const taxRatePercent = (taxRate * 100).toFixed(0);

  return (
    <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="200">
      <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 sticky top-6">
        <h2 className="text-lg font-semibold text-gray-900 pb-4 border-b border-gray-200">
          注文サマリー
        </h2>

        <div className="space-y-3 py-4">
          <OrderSummaryItem
            label={`小計（税抜）(${itemCount}点)`}
            amount={calculatePriceWithoutTax()}
          />
          <OrderSummaryItem
            label={`消費税（${taxRatePercent}%）`}
            amount={calculateTaxAmount()}
          />
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <OrderSummaryItem
          label="合計（税込）"
          amount={totalPrice}
          isBold={true}
        />

        <div className="mb-6"></div>

        <CustomButton
          className="w-full transition-all duration-300 shadow-lg"
          size="sm"
          variant="subtle"
          onClick={onCheckout}
        >
          今すぐ購入する
        </CustomButton>

        <PaymentMethodsDisplay />
      </div>
    </div>
  );
};

export default OrderSummary;
