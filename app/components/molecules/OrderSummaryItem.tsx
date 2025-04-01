import React from "react";

type OrderSummaryItemProps = {
  label: string;
  amount: number;
  isBold?: boolean;
};

const OrderSummaryItem = ({
  label,
  amount,
  isBold = false,
}: OrderSummaryItemProps) => {
  const textClasses = isBold
    ? "text-lg font-semibold text-gray-900"
    : "text-gray-700 font-medium";

  return (
    <div className="flex justify-between">
      <p
        className={
          isBold ? "text-lg font-semibold text-gray-900" : "text-gray-700"
        }
      >
        {label}
      </p>
      <p className={textClasses}>¥{amount.toLocaleString()}</p>
    </div>
  );
};

export default OrderSummaryItem;
