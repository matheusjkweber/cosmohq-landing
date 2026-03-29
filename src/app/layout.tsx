import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmohq.app"),
  title: "CosmoHQ | Pre-launch command center for modern marketing teams",
  description:
    "CosmoHQ centraliza campanhas, analytics em tempo real e otimizacao de conteudo em um workspace premium. iOS e Android ainda em breve.",
  keywords: [
    "marketing intelligence",
    "painel de campanhas",
    "analytics em tempo real",
    "social media management",
    "pre-launch SaaS",
    "CosmoHQ",
  ],
  alternates: {
    canonical: "https://cosmohq.app",
  },
  openGraph: {
    title: "CosmoHQ | Pre-launch command center for modern marketing teams",
    description:
      "Centralize campanhas, redes sociais e analytics em tempo real em um unico workspace. Pre-lancamento com planos mensal, anual e vitalicio na mesma secao.",
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
    title: "CosmoHQ | Pre-launch command center for modern marketing teams",
    description:
      "Campanhas, analytics e conteudo em um unico hub. iOS e Android seguem como Coming Soon.",
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
        {children}
      </body>
    </html>
  );
}
