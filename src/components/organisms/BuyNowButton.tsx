"use client";

import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";
import { Button } from "../atoms/Button";

type Props = {
  priceId?: string;
};

export const BuyNowButton = ({ priceId }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      if (!res.ok) throw new Error("Failed to create Checkout session");

      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      console.error(err);
      alert("決済に失敗しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleBuyNow}
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-500 text-white"
      size="lg"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          処理中...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-5 w-5" />
          今すぐ購入
        </>
      )}
    </Button>
  );
};
