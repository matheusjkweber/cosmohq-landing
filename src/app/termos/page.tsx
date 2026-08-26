import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsPt } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Termos de Uso | CosmoHQ",
  description:
    "Leia os termos de uso do site da CosmoHQ, incluindo regras de navegação, propriedade intelectual, contato, assinaturas dos aplicativos e limitações aplicáveis.",
  alternates: {
    canonical: "https://cosmohq.org/termos",
    languages: { "pt-BR": "https://cosmohq.org/termos", en: "https://cosmohq.org/terms" },
  },
};

export default function Page() {
  return <LegalPage doc={termsPt} />;
}
