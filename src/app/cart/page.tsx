"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "@/src/hooks/useCart";
import CartPageTemplate from "@/src/components/template/CartPageTemplate";

const CartPage = () => {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    handleCheckout,
  } = useCart();

  const cartItems = Object.values(cartDetails || {});

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const handleDeleteClick = (id: string) => {
    const item = cartDetails?.[id];
    if (item && window.confirm(`「${item.name}」を削除しますか？`)) {
      removeCartItem(id);
    }
  };

  return (
    <CartPageTemplate
      cartItems={cartItems}
      cartCount={cartCount || 0}
      totalPrice={totalPrice || 0}
      onIncrementCartItem={incrementCartItem}
      onDecrementCartItem={decrementCartItem}
      onRemoveCartItem={handleDeleteClick}
      onCheckout={handleCheckout}
    />
  );
};

export default CartPage;
