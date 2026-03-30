import CosmoLanding from "@/components/CosmoLanding";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CosmoHQ",
    description:
      "Agência digital que transforma ideias em produtos e presença online com estratégia, execução e inteligência de dados.",
    url: "https://cosmohq.org",
    serviceType: [
      "Desenvolvimento de Apps",
      "Criação de Sites",
      "Desenvolvimento de Sistemas",
      "Gestão de Redes Sociais",
      "Análise de Dados",
    ],
    knowsAbout: [
      "Landing pages",
      "Redes sociais",
      "Apps",
      "Sites",
      "Sistemas",
    ],
    areaServed: "BR",
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
