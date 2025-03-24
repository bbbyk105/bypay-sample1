import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "bypaysample1",
  apiKey: process.env.API_KEY as string,
});
