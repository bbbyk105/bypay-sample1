import React from "react";

type CartCounterProps = {
  count: number;
};

const CartCounter: React.FC<CartCounterProps> = ({ count }) => {
  return (
    <span className="text-sm font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
      {count}点
    </span>
  );
};

export default CartCounter;
