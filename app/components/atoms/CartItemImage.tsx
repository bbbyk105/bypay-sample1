import React from "react";
import Image from "next/image";

type CartItemImageProps = {
  image: string;
  name: string;
};

const CartItemImage = ({ image, name }: CartItemImageProps) => {
  return (
    <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-md overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={image || "/images/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CartItemImage;
