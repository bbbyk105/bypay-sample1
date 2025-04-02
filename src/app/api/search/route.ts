import { client } from "@/libs/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("q") || "";

  try {
    const response = await client.get({
      endpoint: "products",
      queries: {
        q: keyword,
        fields: "id,name,price,imageURL",
        limit: 10,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Failed to search products" },
      { status: 500 }
    );
  }
}
