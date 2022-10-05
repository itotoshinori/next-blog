import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "sibublog",
  apiKey: process.env.API_KEY,
});
