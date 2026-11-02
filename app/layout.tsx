import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vesta Outlet | Moda masculina multimarcas com preço de outlet",
    template: "%s | Vesta Outlet",
  },
  description:
    "Moletons, camisetas, jaquetas, calças e tênis das melhores marcas com preço de outlet. Frete grátis acima de R$ 299, troca em até 30 dias e pagamento por Pix, cartão ou boleto.",
  applicationName: "Vesta Outlet",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Vesta Outlet",
    title: "Vesta Outlet | Moda masculina com preço de outlet",
    description:
      "Estilo de sobra, sem pesar no bolso. Moda masculina multimarcas com preço de outlet.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}