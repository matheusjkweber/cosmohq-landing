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
}> = [
  {
    title: "Desenvolvimento de Apps",
    description:
      "Criamos aplicativos nativos e multiplataforma que resolvem problemas reais e encantam usuários.",
    icon: Smartphone,
    className: "md:col-span-7 md:row-span-2",
    visual: "app",
  },
  {
    title: "Criação de Sites",
    description:
      "Sites rápidos, bonitos e otimizados para converter visitantes em clientes.",
    icon: Globe,
    className: "md:col-span-5",
    visual: "site",
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Planejamos, criamos e publicamos conteúdo nas principais plataformas com estratégia e consistência.",
    icon: Send,
    className: "md:col-span-5",
    visual: "social",
  },
  {
    title: "Análise de Dados",
    description:
      "Monitoramos métricas em tempo real para ajustar estratégias e maximizar resultados.",
    icon: ChartColumnIncreasing,
    className: "md:col-span-4",
    visual: "analytics",
  },
  {
    title: "Campanhas de Marketing",
    description:
      "Planejamos e executamos campanhas que convertem em múltiplos canais.",
    icon: Megaphone,
    className: "md:col-span-4",
    visual: "none",
  },
  {
    title: "Otimização de Conteúdo",
    description:
      "Refinamos criativos, formatos e timing para cada plataforma.",
    icon: WandSparkles,
    className: "md:col-span-4",
    visual: "content",
  },
  {
    title: "Sistemas & Automação",
    description:
      "Construímos sistemas internos e automações que eliminam trabalho manual.",
    icon: Settings,
    className: "md:col-span-12",
    visual: "systems",
  },
];

const BAR_HEIGHTS_PX = [52, 78, 62, 96, 70, 104];

function FeatureVisualBlock({ visual }: { visual: FeatureVisual }) {
  if (visual === "app") {
    return (
      <div className="relative mt-6 min-h-0 flex-1 overflow-hidden rounded-[22px] border border-white/12 bg-[#1a1f21] p-2.5 md:mt-8">
        <Image
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png"
          alt="Interface de aplicativo desenvolvido pela CosmoHQ"
          width={2560}
          height={1600}
          className="h-auto w-full rounded-[16px] border border-white/8"
          unoptimized
        />
      </div>
    );
  }

  if (visual === "site") {
    return (
      <div className="relative mt-auto overflow-hidden rounded-[22px] border border-white/12 bg-[#1a1f21] p-2.5 md:mt-6">
        <Image
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png"
          alt="Exemplo de site criado pela CosmoHQ"
          width={2560}
          height={1600}
          className="h-auto w-full rounded-[16px] border border-white/8"
          unoptimized
        />
      </div>
    );
  }

  if (visual === "social") {
    return (
      <div className="mt-auto flex flex-wrap gap-2 pt-6 md:pt-8">
        {["Instagram", "Facebook", "TikTok", "LinkedIn", "X"].map((channel) => (
          <span
            key={channel}
            className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/58"
          >
            {channel}
          </span>
        ))}
      </div>
    );
  }

  if (visual === "analytics") {
    return (
      <div className="surface-blend mt-auto rounded-[22px] border border-white/10 p-4 pt-6 md:pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
          Métricas ao vivo
        </p>
        <div className="mt-4 flex h-[7.5rem] items-end gap-1.5 sm:gap-2">
          {BAR_HEIGHTS_PX.map((h, index) => (
            <div
              key={`bar-${index}`}
              className="flex min-h-0 flex-1 flex-col justify-end"
            >
              <motion.div
                className="w-full rounded-full bg-gradient-to-t from-[#1e6fd9] via-[#3498db] to-[#86d7ff] shadow-[0_0_24px_-4px_rgba(52,152,219,0.45)]"
                initial={false}
                animate={{
                  height: [
                    `${Math.round(h * 0.58)}px`,
                    `${h}px`,
                    `${Math.round(h * 0.78)}px`,
                    `${Math.round(h * 0.92)}px`,
                    `${Math.round(h * 0.66)}px`,
                  ],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.14,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "none") {
    return <div className="mt-auto flex-1 md:min-h-[2rem]" aria-hidden />;
  }

  if (visual === "content") {
    return (
      <div className="relative mt-auto overflow-hidden rounded-[22px] border border-white/12 pt-6 md:pt-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
          <Image
            src="https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg"
            alt="Otimização de conteúdo e apresentação de resultados"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141819] via-[#141819]/25 to-transparent" />
        </div>
      </div>
    );
  }

  if (visual === "systems") {
    const caps = [
      {
        title: "Fluxos sob medida",
        body: "Automações que conectam ferramentas e removem etapas repetitivas do dia a dia.",
      },
      {
        title: "Integrações estáveis",
        body: "APIs, webhooks e sincronização entre CRMs, ads e bases internas.",
      },
      {
        title: "Painéis internos",
        body: "Interfaces claras para o time acompanhar operações sem depender de planilhas soltas.",
      },
    ];
    return (
      <div className="glass-panel ambient-glow mt-6 grid gap-4 rounded-[24px] border border-white/12 p-5 sm:grid-cols-3 md:mt-8">
        {caps.map((item) => (
          <div
            key={item.title}
            className="editorial-panel rounded-[20px] border border-white/10 bg-white/[0.04] p-4"
          >
            <h4 className="text-sm font-semibold tracking-[-0.02em] text-white">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-6 text-white/62">{item.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

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
                    "hover-lift spotlight-border group h-full overflow-hidden rounded-[30px]",
                    tall && "md:min-h-[520px]"
                  )}
                >
                  <CardContent
                    className={cn(
                      "flex h-full flex-col p-6 md:p-7",
                      tall && "md:min-h-[inherit]"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/7 p-3 text-brand-primary transition duration-300 group-hover:scale-[1.04] group-hover:border-brand-primary/35">
                        <Icon className="h-5 w-5" />
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

                    <FeatureVisualBlock visual={feature.visual} />
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
