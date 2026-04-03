import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    "Fontaneros profesionales en Sant Vicent del Raspeig y Alicante. Reparación de fugas, desatascos, instalaciones, reformas de baños y servicio de urgencias 24h. Presupuesto sin compromiso.",
  keywords: [
    "fontanero Alicante",
    "fontanería Sant Vicent del Raspeig",
    "reparación fugas Alicante",
    "desatascos Alicante",
    "reformas baños Alicante",
    "fontanero urgencias 24h",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Fontanería Martos",
    title: "Fontanería Martos | Fontaneros Profesionales en Alicante",
    description:
      "Más de 20 años de experiencia en fontanería. Servicio rápido, profesional y con garantía en Sant Vicent del Raspeig y toda la provincia de Alicante.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
