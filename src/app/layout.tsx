import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import StoreProvider from "../lib/Provider/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Guide Community",
  description: "Generated by Travel Guide Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-questrial">
        <StoreProvider>
          <Toaster position="top-center" />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
