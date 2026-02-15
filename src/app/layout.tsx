import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JetSetGo | Private Jet for Rent Worldwide",
  description: "Experience the ultimate freedom with our premium private jet for rent services. Access over 5,000 aircraft globally for your business or leisure travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          playfair.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
