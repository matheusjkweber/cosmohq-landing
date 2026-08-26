import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsEn } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service | CosmoHQ",
  description:
    "The terms of service for the CosmoHQ website and apps, covering website use, contact forms, intellectual property, subscriptions and applicable limitations.",
  alternates: {
    canonical: "https://cosmohq.org/terms",
    languages: { "pt-BR": "https://cosmohq.org/termos", en: "https://cosmohq.org/terms" },
  },
};

export default function Page() {
  return <LegalPage doc={termsEn} />;
}
