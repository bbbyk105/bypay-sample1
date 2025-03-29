// components/AddToCartButton.tsx
"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "../atoms/Button";
import { CartProduct, useCart } from "@/app/hooks/useCart";
import CustomButton from "../atoms/CustomButton";

interface AddToCartButtonProps {
  product: CartProduct;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToCart, isAddingToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <CustomButton
          type="button"
          variant={"subtle"}
          onClick={handleAddToCart}
          disabled={isAddingToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          {isAddingToCart ? "カートに追加中..." : "カートに追加"}
        </CustomButton>

        <div className="flex items-center border rounded-md">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
