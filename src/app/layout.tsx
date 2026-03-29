import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmohq.app"),
  title: "CosmoHQ | Apps, sites, social e ads com resultado real",
  description:
    "Agência digital que constrói apps, sites e sistemas, gerencia Instagram e campanhas de ads, e usa dados para melhorar cada decisão.",
  keywords: [
    "CosmoHQ",
    "agência digital",
    "desenvolvimento de apps",
    "criação de sites",
    "gestão de redes sociais",
    "marketing digital",
    "análise de dados",
    "branding",
  ],
  applicationName: "CosmoHQ",
  alternates: {
    canonical: "https://cosmohq.app",
  },
  openGraph: {
    title: "CosmoHQ | Sua ideia no digital. Do jeito certo.",
    description:
      "Apps, sites, redes sociais e campanhas com estratégia, execução e leitura de dados em uma operação só.",
    url: "https://cosmohq.app",
    siteName: "CosmoHQ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CosmoHQ — Agência digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CosmoHQ | Sua ideia no digital. Do jeito certo.",
    description:
      "Agência premium para apps, sites, social e ads com inteligência de dados.",
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
