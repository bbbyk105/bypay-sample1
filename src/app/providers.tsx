"use client";

import React from "react";
import { CartProvider } from "use-shopping-cart";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/cart`}
      currency="JPY"
      allowedCountries={["JP"]}
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CartProvider>
  );
}
