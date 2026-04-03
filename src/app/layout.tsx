import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Fontanería Martos | Fontaneros en Sant Vicent del Raspeig, Alicante",
    template: "%s | Fontanería Martos",
  },
  description:
    "Fontaneros profesionales en Sant Vicent del Raspeig y Alicante. Reparación de fugas, desatascos, instalaciones, reformas de baños y servicio de urgencias 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
