// hooks/useCart.ts
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "react-hot-toast";

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  currency: string;
  image?: string;
  description?: string;
  quantity?: number;
}

export function useCart() {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const {
    addItem,
    incrementItem,
    decrementItem,
    removeItem,
    cartDetails,
    cartCount,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  // カートに商品を追加する関数
  const addToCart = async (product: CartProduct) => {
    setIsAddingToCart(true);

    try {
      // Stripeに渡すデータ形式に変換
      const item = {
        ...product,
        product_data: {
          name: product.name,
        },
        price_data: {
          currency: product.currency,
          unit_amount: product.price,
          product_data: {
            name: product.name,
            description: product.description || "",
            images: product.image ? [product.image] : [],
          },
        },
        sku: product.id,
        price: product.price,
        quantity: product.quantity || 1,
      };

      addItem(item);
      toast.success(`${product.name}をカートに追加しました`);
    } catch (error) {
      console.error("カートへの追加に失敗しました:", error);
      toast.error("カートへの追加に失敗しました。もう一度お試しください。");
    } finally {
      setIsAddingToCart(false);
    }
  };

  // カート内の商品数を増やす
  const incrementCartItem = (id: string) => {
    incrementItem(id);
  };

  // カート内の商品数を減らす
  const decrementCartItem = (id: string) => {
    decrementItem(id);
  };

  // カートから商品を削除
  const removeCartItem = (id: string) => {
    removeItem(id);
    toast.success("商品をカートから削除しました");
  };

  // チェックアウトページへリダイレクト
  const handleCheckout = async () => {
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        toast.error(result.error.message || "チェックアウトに失敗しました");
      }
    } catch (error) {
      console.error("チェックアウト中にエラーが発生しました:", error);
      toast.error("チェックアウトに失敗しました。もう一度お試しください。");
    }
  };

  return {
    addToCart,
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    handleCheckout,
    isAddingToCart,
    cartDetails,
    cartCount,
    totalPrice,
  };
}
