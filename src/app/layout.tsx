import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmohq.app"),
  title: "CosmoHQ | Growth command center for modern marketing teams",
  description:
    "CosmoHQ centraliza campanhas, analytics em tempo real, integracao social e otimizacao de conteudo em um pre-launch premium para times de growth e marketing ops.",
  keywords: [
    "CosmoHQ",
    "growth marketing",
    "marketing ops",
    "campaign management",
    "real-time analytics",
    "social media command center",
    "pre-launch software",
  ],
  applicationName: "CosmoHQ",
  alternates: {
    canonical: "https://cosmohq.app",
  },
  openGraph: {
    title: "CosmoHQ | Growth command center for modern marketing teams",
    description:
      "Uma landing editorial para o pre-launch do CosmoHQ: screenshots oficiais, pricing mensal/anual/lifetime no mesmo lugar e narrativa premium para growth teams.",
    url: "https://cosmohq.app",
    siteName: "CosmoHQ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CosmoHQ landing page preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CosmoHQ | Growth command center for modern marketing teams",
    description:
      "Campanhas, analytics e conteudo em uma experiencia premium. iOS e Android seguem como Coming Soon.",
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
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-cosmo-bg font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
