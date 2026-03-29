import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmohq.app"),
  title: "CosmoHQ | Agência digital que transforma ideias em presença real",
  description:
    "A CosmoHQ constrói apps, sites e sistemas, cuida das redes sociais e usa inteligência de dados para garantir que cada decisão gere o maior impacto possível.",
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
    title: "CosmoHQ | Agência digital que transforma ideias em presença real",
    description:
      "Construímos apps, sites e sistemas. Cuidamos das redes sociais. Usamos dados para gerar resultado real.",
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
    title: "CosmoHQ | Agência digital que transforma ideias em presença real",
    description:
      "Apps, sites, redes sociais e inteligência de dados. Do jeito certo.",
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
