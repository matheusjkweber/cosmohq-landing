import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmohq.app"),
  title: "CosmoHQ | Apps, sites, social e ads",
  description:
    "Agência digital para pequenas empresas. Construímos apps, sites e sistemas e cuidamos da presença online e campanhas.",
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
      "Construímos apps, sites e sistemas e cuidamos da presença online e campanhas.",
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
      "Agência para pequenos negócios que precisam de apps, sites, social e ads.",
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
