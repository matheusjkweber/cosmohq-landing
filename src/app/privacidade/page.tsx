import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPt } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Privacidade | CosmoHQ",
  description:
    "Entenda como a CosmoHQ coleta, usa, armazena e protege dados pessoais no site, nos formulários de contato e nos nossos aplicativos.",
  alternates: {
    canonical: "https://cosmohq.org/privacidade",
    languages: { "pt-BR": "https://cosmohq.org/privacidade", en: "https://cosmohq.org/privacy" },
  },
};

export default function Page() {
  return <LegalPage doc={privacyPt} />;
}
