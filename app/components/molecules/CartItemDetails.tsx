import React from "react";
import DeleteButton from "../atoms/DeleteButton";
import QuantityControl from "../atoms/QuantityControl";

type CartItemDetailsProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onDelete: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

const CartItemDetails = ({
  id,
  name,
  price,
  quantity,
  onDelete,
  onIncrement,
  onDecrement,
}: CartItemDetailsProps) => {
  return (
    <div className="ml-4 flex-1">
      <div className="flex justify-between">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 line-clamp-2">
          {name}
        </h3>
        <DeleteButton onClick={onDelete} />
      </div>

      <p className="mt-1 text-sm text-gray-500 hidden sm:block">商品ID: {id}</p>

      <div className="mt-2 flex justify-between items-end">
        <p className="text-base sm:text-lg font-semibold text-gray-900">
          ¥{price.toLocaleString()}
        </p>

        <QuantityControl
          quantity={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </div>
  );
};

export default CartItemDetails;
