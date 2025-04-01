import React, { JSX } from "react";
import Image from "next/image";

type PaymentIconProps = {
  src: string;
  alt: string;
};

const PaymentIcon = ({ src, alt }: PaymentIconProps): JSX.Element => {
  return (
    <div className="w-10 h-6 relative">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
};

export default PaymentIcon;
