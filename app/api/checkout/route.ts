import { NextResponse } from "next/server";
import Stripe from "stripe";

// HTMLタグを削除する関数
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

// 型定義のエラーを回避するため、型アサーションを使用
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10" as Stripe.StripeConfig["apiVersion"],
});

export async function POST(req: Request) {
  try {
    const { cartItems } = await req.json();

    // 入力バリデーション
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: "Valid cart items are required" },
        { status: 400 }
      );
    }

    // デバッグ用のログ
    console.log("Received Cart Items:", cartItems);

    // カート内の商品をStripeのline_itemsに変換
    interface CartItem {
      name: string;
      price: number;
      currency?: string;
      description?: string;
      image?: string;
      quantity?: number;
    }

    const lineItems = cartItems.map((item: CartItem) => ({
      price_data: {
        currency: item.currency || "jpy",
        product_data: {
          name: item.name,
          description: item.description ? stripHtml(item.description) : "",
          images: item.image ? [item.image] : [],
        },
        unit_amount: item.price,
      },
      quantity: item.quantity || 1,
    }));

    // セッション作成 - WeChat Pay用のオプションを追加
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "alipay", "wechat_pay"],
      payment_method_options: {
        wechat_pay: {
          client: "web",
        },
      },
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      // 領収書の設定
      invoice_creation: {
        enabled: true,
      },
      // 顧客情報収集（領収書を送るため）
      customer_creation: "always",
      // 必要に応じて以下を有効化
      // billing_address_collection: 'required', // 請求先住所を必須にする
      // shipping_address_collection: { allowed_countries: ['JP'] }, // 配送先住所（日本のみ）
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
