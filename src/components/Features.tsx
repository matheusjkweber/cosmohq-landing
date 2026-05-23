"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import {
  ChartColumnIncreasing,
  Globe,
  Megaphone,
  Send,
  Settings,
  Smartphone,
  WandSparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureVisual =
  | "app"
  | "site"
  | "social"
  | "analytics"
  | "none"
  | "content"
  | "systems";

const features: Array<{
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  className: string;
  visual: FeatureVisual;
  points: string[];
}> = [
  {
    title: "Desenvolvimento de Apps",
    description:
      "Criamos aplicativos nativos e multiplataforma que resolvem problemas reais e encantam usuários.",
    icon: Smartphone,
    className: "md:col-span-7",
    visual: "app",
    points: ["iOS, macOS e Android", "Arquitetura pronta para crescer", "Experiência premium do começo ao fim"],
  },
  {
    title: "Criação de Sites",
    description:
      "Sites rápidos, bonitos e otimizados para converter visitantes em clientes.",
    icon: Globe,
    className: "md:col-span-5",
    visual: "site",
    points: ["Landing pages de alta conversão", "SEO e performance", "Copy e design integrados"],
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Planejamos, criamos e publicamos conteúdo nas principais plataformas com estratégia e consistência.",
    icon: Send,
    className: "md:col-span-5",
    visual: "social",
    points: ["Calendário editorial", "Posts e criativos", "Operação contínua"],
  },
  {
    title: "Análise de Dados",
    description:
      "Monitoramos métricas em tempo real para ajustar estratégias e maximizar resultados.",
    icon: ChartColumnIncreasing,
    className: "md:col-span-4",
    visual: "analytics",
    points: ["Dashboards claros", "Leitura diária", "Ajustes guiados por números"],
  },
  {
    title: "Campanhas de Marketing",
    description:
      "Planejamos e executamos campanhas que convertem em múltiplos canais.",
    icon: Megaphone,
    className: "md:col-span-4",
    visual: "none",
    points: ["Estratégia e mídia", "Testes constantes", "Foco em CAC e conversão"],
  },
  {
    title: "Otimização de Conteúdo",
    description:
      "Refinamos criativos, formatos e timing para cada plataforma.",
    icon: WandSparkles,
    className: "md:col-span-4",
    visual: "content",
    points: ["Conteúdo mais consistente", "Ajuste por canal", "Peças com intenção comercial"],
  },
  {
    title: "Sistemas & Automação",
    description:
      "Construímos sistemas internos e automações que eliminam trabalho manual.",
    icon: Settings,
    className: "md:col-span-12",
    visual: "systems",
    points: ["Integrações confiáveis", "Fluxos sob medida", "Menos retrabalho para o time"],
  },
];

const BAR_HEIGHTS_PX = [52, 78, 62, 96, 70, 104];

export default function Features() {
  return (
    <section
      id="servicos"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Tudo o que sua marca precisa"
          highlight="para existir no digital."
          description="Da ideia ao produto final. Do perfil social ao relatório de performance. Cuidamos de ponta a ponta com estratégia e execução integradas."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="story-grid mt-14"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const tall = feature.visual === "app";
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                transition={{ duration: 0.55, ease, delay: index * 0.05 }}
                className={feature.className}
              >
              <Card
                className={cn(
                  "hover-lift spotlight-border group h-full overflow-hidden rounded-[30px]"
                )}
              >
                <CardContent
                  className={cn(
                    "flex h-full flex-col p-6 md:p-7"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/7 p-3 text-brand-primary transition duration-300 group-hover:scale-[1.04] group-hover:border-brand-primary/35">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/52">
                      {feature.visual === "app"
                        ? "Produto"
                        : feature.visual === "site"
                          ? "Conversão"
                          : feature.visual === "social"
                            ? "Social"
                            : feature.visual === "analytics"
                              ? "Dados"
                              : feature.visual === "content"
                                ? "Conteúdo"
                                : feature.visual === "systems"
                                  ? "Operação"
                                  : "Serviço"}
                    </div>
                  </div>

                  <div className="mt-5 md:mt-6">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-prose text-base leading-7 text-white/66">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/76"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
        </motion.div>
      </div>
    </section>
  );
}
