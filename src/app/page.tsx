import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Differentials from "@/components/Differentials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
    areaServed: "BR",
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <HowItWorks />
        <Features />
        <Portfolio />
        <Differentials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
