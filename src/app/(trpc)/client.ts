import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "@/server";

export function getBaseUrl() {
  if (typeof window !== "undefined") {
    // In the browser, we return a relative URL
    return "";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return `http://localhost:3000`;
}

export const trpc = createTRPCReact<AppRouter>({});
