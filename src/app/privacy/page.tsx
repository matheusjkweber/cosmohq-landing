import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyEn } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | CosmoHQ",
  description:
    "How CosmoHQ collects, uses, stores and protects personal data on its website, its contact forms and its apps.",
  alternates: {
    canonical: "https://cosmohq.org/privacy",
    languages: { "pt-BR": "https://cosmohq.org/privacidade", en: "https://cosmohq.org/privacy" },
  },
};

export default function Page() {
  return <LegalPage doc={privacyEn} />;
}
