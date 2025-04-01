import React from "react";
import PaymentIcon from "../atoms/PaymentIcon";

const PaymentMethodsDisplay: React.FC = () => {
  const paymentMethods = [
    { src: "/images/cards/visa.webp", alt: "Visa" },
    { src: "/images/cards/master.webp", alt: "Mastercard" },
    { src: "/images/cards/amex.webp", alt: "American Express" },
    { src: "/images/cards/jcb.webp", alt: "JCB" },
    { src: "/images/cards/applepay.webp", alt: "Apple Pay", isWide: true },
    { src: "/images/cards/googlepay.webp", alt: "Google Pay", isWide: true },
    { src: "/images/cards/wechat.webp", alt: "WeChat Pay", isWide: true },
    { src: "/images/cards/alipay.webp", alt: "Alipay", isWide: true },
  ];

  return (
    <div className="mt-4">
      <div className="flex justify-center flex-wrap gap-3">
        {paymentMethods.map((method) => (
          <div
            key={method.alt}
            className={
              method.isWide ? "w-10 h-8 relative" : "w-10 h-6 relative"
            }
          >
            <PaymentIcon src={method.src} alt={method.alt} />
          </div>
        ))}
      </div>
      <p className="text-xs text-center text-gray-500 mt-2">
        各種クレジットカード・電子決済がご利用いただけます
      </p>
    </div>
  );
};

export default PaymentMethodsDisplay;
