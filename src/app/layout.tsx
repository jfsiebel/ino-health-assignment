import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TRPCProvider } from "@/app/_trpc/TrpcProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ino Health tRPC",
  description: "tRPC assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
