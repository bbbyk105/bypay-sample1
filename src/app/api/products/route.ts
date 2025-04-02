// app/api/products/route.ts
import { NextResponse } from "next/server";
import { client } from "@/libs/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || "1");
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const data = await client.get({
      endpoint: "products",
      queries: { limit, offset },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "商品データの取得に失敗しました" },
      { status: 500 }
    );
  }
}
