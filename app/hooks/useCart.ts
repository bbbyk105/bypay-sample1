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
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const {
    addItem,
    incrementItem,
    decrementItem,
    removeItem,
    cartDetails,
    cartCount,
    totalPrice,
    clearCart,
  } = useShoppingCart();

  // カートに商品を追加する関数
  const addToCart = async (product: CartProduct) => {
    setIsAddingToCart(true);

    try {
      // 数量の設定
      const quantity = product.quantity || 1;

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
        currency: product.currency || "jpy",
      };

      // 明示的に数量を指定
      addItem(item, { count: quantity });

      toast.success(`${product.name}を${quantity}点カートに追加しました`);
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

  // カスタムAPIエンドポイントを使用してチェックアウト
  const handleCheckout = async () => {
    setIsCheckingOut(true);

    try {
      // カート内の商品情報を取得
      const cartItems = Object.values(cartDetails || {}).map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        currency: item.currency || "jpy",
        quantity: item.quantity,
        image: item.image,
        description: item.description,
      }));

      // カスタムAPIエンドポイントを呼び出してチェックアウトセッションを作成
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.details || "チェックアウトセッションの作成に失敗しました"
        );
      }

      const { url } = await response.json();

      // ユーザーをStripeのチェックアウトページにリダイレクト
      if (url) {
        window.location.href = url;
      } else {
        throw new Error("チェックアウトURLが見つかりません");
      }
    } catch (error) {
      console.error("チェックアウト中にエラーが発生しました:", error);
      toast.error("チェックアウトに失敗しました。もう一度お試しください。");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return {
    addToCart,
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    handleCheckout,
    isAddingToCart,
    isCheckingOut,
    cartDetails,
    cartCount,
    totalPrice,
    clearCart,
  };
}
