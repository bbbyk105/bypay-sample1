import { NextResponse } from "next/server";
import Stripe from "stripe";

// 最新の安定したAPIバージョンを使用
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10" as Stripe.StripeConfig["apiVersion"], // 最新の安定したバージョンに更新
});

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();

    // 入力バリデーション
    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    }

    // デバッグ用のログ
    console.log("Received Price ID:", priceId);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,

      // 追加の推奨設定
      payment_method_types: ["card"],
      billing_address_collection: "auto",
    });

    // デバッグ用のログ
    console.log("Checkout Session Created:", session.id);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    // エラーの詳細をログに記録
    console.error("Detailed Checkout Error:", err);

    return NextResponse.json(
      {
        error: "Stripe checkout error",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
