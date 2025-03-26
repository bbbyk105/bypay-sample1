import { createClient } from "microcms-js-sdk";

// 環境変数を確認する

export const client = createClient({
  serviceDomain: "bypaysample1",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY as string,
});
