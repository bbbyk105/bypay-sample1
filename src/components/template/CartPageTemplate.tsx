import React from "react";
import CartItemList from "../organisms/Cart/CartItemList";
import OrderSummary from "../organisms/Cart/OrderSummary";
import EmptyCartMessage from "../organisms/Cart/EmptyCartMessage";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartPageTemplateProps = {
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;
  onIncrementCartItem: (id: string) => void;
  onDecrementCartItem: (id: string) => void;
  onRemoveCartItem: (id: string) => void;
  onCheckout: () => void;
};

const CartPageTemplate = ({
  cartItems,
  cartCount,
  totalPrice,
  onIncrementCartItem,
  onDecrementCartItem,
  onRemoveCartItem,
  onCheckout,
}: CartPageTemplateProps) => {
  // カートが空の場合
  if (!cartItems.length) {
    return <EmptyCartMessage />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <CartItemList
            items={cartItems}
            itemCount={cartCount}
            onIncrement={onIncrementCartItem}
            onDecrement={onDecrementCartItem}
            onDelete={onRemoveCartItem}
          />
          <OrderSummary
            itemCount={cartCount}
            totalPrice={totalPrice}
            onCheckout={onCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPageTemplate;
