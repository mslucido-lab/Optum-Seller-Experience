import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";

export const metadata: Metadata = {
  title: "Optum AI Marketplace — Operations",
  description: "Optum AI Marketplace Seller Experience Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-navy text-text-body">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
