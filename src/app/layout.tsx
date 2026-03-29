import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmohq.app"),
  title: "CosmoHQ — Marketing Intelligence Platform",
  description:
    "Gerencie campanhas, analise dados em tempo real e otimize sua presenca digital com o CosmoHQ. Plataforma completa de marketing intelligence.",
  keywords: [
    "marketing",
    "campanhas",
    "analytics",
    "redes sociais",
    "CosmoHQ",
  ],
  openGraph: {
    title: "CosmoHQ — Marketing Intelligence Platform",
    description:
      "Gerencie campanhas, analise dados em tempo real e otimize sua presenca digital.",
    url: "https://cosmohq.app",
    siteName: "CosmoHQ",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CosmoHQ — Marketing Intelligence Platform",
    description:
      "Gerencie campanhas, analise dados em tempo real e otimize sua presenca digital.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
