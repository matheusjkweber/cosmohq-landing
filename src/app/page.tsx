import CosmoLanding from "@/components/CosmoLanding";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CosmoHQ",
    description:
      "Agência digital que transforma ideias em produtos e presença online — com estratégia, execução e inteligência de dados para gerar resultado real.",
    url: "https://cosmohq.app",
    serviceType: [
      "Desenvolvimento de Apps",
      "Criação de Sites",
      "Gestão de Redes Sociais",
      "Campanhas de Ads",
      "Análise de Dados",
      "Marketing Digital",
    ],
    knowsAbout: [
      "Landing pages",
      "Gestão de Instagram",
      "Campanhas de performance",
      "Dashboards",
      "Produtos digitais",
    ],
    areaServed: "BR",
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CosmoLanding />
    </>
  );
}
