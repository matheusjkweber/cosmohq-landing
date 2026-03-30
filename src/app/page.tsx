import CosmoLanding from "@/components/CosmoLanding";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CosmoHQ",
    description:
      "Agência digital para pequenas empresas. Construímos apps, sites e sistemas e cuidamos da presença online e campanhas.",
    url: "https://cosmohq.app",
    serviceType: [
      "Desenvolvimento de Apps",
      "Criação de Sites",
      "Gestão de Redes Sociais",
      "Campanhas de Ads",
      "Análise de Dados",
      "Marketing de Performance",
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
