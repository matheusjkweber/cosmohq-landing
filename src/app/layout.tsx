import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmohq.app"),
  title: "CosmoHQ | Sua ideia no digital. Do jeito certo.",
  description:
    "Agência digital que transforma ideias em produtos e presença online com estratégia, execução e inteligência de dados.",
  keywords: [
    "CosmoHQ",
    "agência digital",
    "desenvolvimento de apps",
    "criação de sites",
    "gestão de redes sociais",
    "análise de dados",
    "desenvolvimento de sistemas",
  ],
  applicationName: "CosmoHQ",
  alternates: {
    canonical: "https://cosmohq.app",
  },
  openGraph: {
    title: "CosmoHQ | Sua ideia no digital. Do jeito certo.",
    description:
      "Transformamos ideias em produtos e presença online com estratégia, execução e inteligência de dados.",
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
      "Agência digital para transformar ideias em produtos e presença online.",
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
