import React from "react";
import Link from "next/link";
import CartCounter from "../atoms/CartCounter";
import CartItemImage from "../atoms/CartItemImage";
import CartItemDetails from "../molecules/CartItemDetails";
import CustomButton from "../atoms/CustomButton";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartItemListProps = {
  items: CartItem[];
  itemCount: number;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onDelete: (id: string) => void;
};

const CartItemList = ({
  items,
  itemCount,
  onIncrement,
  onDecrement,
  onDelete,
}: CartItemListProps) => {
  return (
    <div className="lg:w-2/3" data-aos="fade-up" data-aos-delay="100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            ショッピングカート
          </h2>
          <CartCounter count={itemCount} />
        </div>

        <ul className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <li
              key={item.id}
              className="p-4 sm:p-6"
              data-aos="fade-right"
              data-aos-delay={150 + index * 50}
            >
              <div className="flex items-start">
                <CartItemImage image={item.image || ""} name={item.name} />
                <CartItemDetails
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onDelete={() => onDelete(item.id)}
                  onIncrement={() => onIncrement(item.id)}
                  onDecrement={() => onDecrement(item.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 sm:mt-6" data-aos="fade-up">
        <Link href="/">
          <CustomButton
            className="shadow-md transition-all duration-300 w-full sm:w-auto"
            variant="subtle"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            買い物を続ける
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default CartItemList;
