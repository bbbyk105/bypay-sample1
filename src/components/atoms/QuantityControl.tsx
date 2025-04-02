import React from "react";

type QuantityControlProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const QuantityControl = ({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityControlProps) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
      <button
        onClick={onDecrement}
        disabled={quantity <= 1}
        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="text-lg">-</span>
      </button>
      <span className="w-8 h-8 flex items-center justify-center text-center">
        {quantity}
      </span>
      <button
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors rounded-r-md"
      >
        <span className="text-lg">+</span>
      </button>
    </div>
  );
};

export default QuantityControl;
