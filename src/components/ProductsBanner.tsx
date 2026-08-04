"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, fadeUp, stagger, ease } from "./motion";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Product = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  iconSrc: string;
  badge: string;
  accent: string; // brand color token used for the icon halo
};

const products: Product[] = [
  {
    name: "Cosmo Travel MCP",
    tagline: "Cotação de viagem inteira, com a fonte de cada número.",
    description:
      "Onze ferramentas MCP para voos, hospedagem, eventos e trajetos. Todo preço volta com a fonte, a data e a faixa de referência — nada é chamado de barato sem dizer barato comparado a quê.",
    url: "https://github.com/maththedev42/cosmo-travel-mcp",
    iconSrc: "/products/cosmotravelmcp.png",
    badge: "Open source",
    accent: "#14b8a6",
  },
  {
    name: "CosmoKit",
    tagline: "Toolkit nativo para acelerar testes em simuladores iOS.",
    description:
      "Centraliza controles, screenshots e capturas — para ship demos e testes em minutos, não horas.",
    url: "https://usecosmoskittool.com",
    iconSrc: "/products/cosmokit.png",
    badge: "macOS",
    accent: "#3498db",
  },
  {
    name: "CosmoFinanças",
    tagline: "Gestão financeira clara para decidir rápido.",
    description:
      "Dashboard em tempo real, categorização automática e relatórios que qualquer pessoa entende.",
    url: "https://cosmofinancas.org/",
    iconSrc: "/products/cosmofinancas.png",
    badge: "Web · Mobile",
    accent: "#2ecc71",
  },
  {
    name: "CosmoRemote",
    tagline: "Trabalho remoto e controle do seu Mac, onde estiver.",
    description:
      "Acesse, controle e automatize seu Mac de qualquer lugar com uma experiência fluida e segura.",
    url: "https://cosmoremote.com",
    iconSrc: "/products/cosmoremote.png",
    badge: "macOS · iOS",
    accent: "#b04fff",
  },
  {
    name: "LifeManager",
    tagline: "Organize a vida em um único painel.",
    description:
      "Hábitos, finanças, projetos e bem-estar em um lugar só — para focar no que importa.",
    url: "https://managerme.org",
    iconSrc: "/products/lifemanager.png",
    badge: "iOS · Android",
    accent: "#ff8c4f",
  },
];

export default function ProductsBanner() {
  return (
    <section
      id="produtos"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Produtos CosmoHQ"
          title="Os apps que construímos"
          highlight="e mantemos no ar."
          description="Cada produto nasceu de um problema real — e segue evoluindo com quem usa. Conheça cada um e visite a landing dedicada."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {products.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.07 }}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 rounded-[28px]"
            >
              <Card className="hover-lift spotlight-border flex h-full flex-col overflow-hidden rounded-[28px]">
                <div className="relative flex items-center gap-5 p-6 md:p-7">
                  <div
                    className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-[22px] border border-white/10 bg-[#1a1f21]"
                    style={{
                      boxShadow: `0 18px 60px -28px ${product.accent}99`,
                    }}
                  >
                    <Image
                      src={product.iconSrc}
                      alt={`${product.name} — logo`}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                        {product.name}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full border border-white/12 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/72",
                        )}
                      >
                        {product.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {product.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-white/40 transition group-hover:text-white sm:block" />
                </div>

                <CardContent className="flex flex-1 flex-col justify-between gap-5 px-6 pb-6 pt-0 md:px-7 md:pb-7">
                  <p className="text-sm leading-6 text-white/62">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between gap-3 border-t border-white/8 pt-5">
                    <span className="truncate text-xs text-white/40">
                      {product.url.replace(/^https?:\/\//, "")}
                    </span>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        size: "sm",
                      })}
                    >
                      Visitar landing
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
