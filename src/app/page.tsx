import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import Downloads from "@/components/Downloads";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CosmoHQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "CosmoHQ centraliza campanhas, analytics em tempo real, integracao social e otimizacao de conteudo em um command center premium para times de growth e marketing ops.",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Growth Yearly",
        price: "348",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Scale Lifetime",
        price: "2490",
        priceCurrency: "BRL",
      },
    ],
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
        <Features />
        <Screenshots />
        <Pricing />
        <Downloads />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
