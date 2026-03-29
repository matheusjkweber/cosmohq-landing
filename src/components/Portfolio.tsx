"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const cases = [
  {
    name: "CosmoKit",
    tagline: "Toolkit criativo para equipes digitais",
    problem:
      "Profissionais criativos perdiam horas gerenciando assets espalhados em pastas, drives e ferramentas diferentes.",
    solution:
      "Construímos um app nativo para macOS que centraliza assets, paletas, componentes e referências visuais em um workspace inteligente.",
    result: "Workflow 3x mais rápido e zero asset perdido.",
    badge: "App nativo",
    screenshots: [
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
        alt: "CosmoKit — Dashboard principal",
      },
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
        alt: "CosmoKit — Workspace de assets",
      },
    ],
    className: "md:col-span-7",
    accent: "brand-primary",
  },
  {
    name: "CosmoFinanças",
    tagline: "Gestão financeira clara para quem precisa decidir rápido",
    problem:
      "Pequenas empresas tomavam decisões financeiras no escuro — sem visibilidade de fluxo de caixa ou margem real.",
    solution:
      "Desenvolvemos uma plataforma com dashboard em tempo real, categorização automática e relatórios que qualquer pessoa entende.",
    result: "Visibilidade financeira total em menos de 5 minutos por dia.",
    badge: "Plataforma web",
    screenshots: [
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
        alt: "CosmoFinanças — Dashboard financeiro",
      },
    ],
    className: "md:col-span-5",
    accent: "brand-secondary",
  },
] as const;

const teamPhotos = [
  {
    src: "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
    alt: "Equipe focada em resultado",
    caption: "Foco no resultado",
  },
  {
    src: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    alt: "Colaboração em equipe",
    caption: "Trabalho em equipe",
  },
  {
    src: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
    alt: "Apresentação de dados ao cliente",
    caption: "Decisões com dados",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfólio"
          title="Produtos que construímos"
          highlight="e usamos no dia a dia."
          description="CosmoKit e CosmoFinanças são produtos nossos — nasceram de problemas reais que identificamos e agora ajudam outros negócios a operar melhor."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="story-grid mt-14"
        >
          {cases.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.58, ease, delay: index * 0.08 }}
              className={item.className}
            >
              <Card className="hover-lift spotlight-border group flex h-full flex-col overflow-hidden rounded-[30px]">
                <div className="relative overflow-hidden border-b border-white/10">
                  <div
                    className={cn(
                      "grid gap-2 p-3",
                      item.screenshots.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    )}
                  >
                    {item.screenshots.map((shot) => (
                      <div
                        key={shot.alt}
                        className="overflow-hidden rounded-[22px] border border-white/8 bg-[#1a1f21]"
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={2560}
                          height={1600}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <CardContent className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/58">
                        {item.tagline}
                      </p>
                    </div>
                    <Badge variant="accent" className="shrink-0">
                      {item.badge}
                    </Badge>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <p className="display-kicker mb-2 font-semibold text-brand-accent">
                        Problema
                      </p>
                      <p className="text-sm leading-6 text-white/62">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <p className="display-kicker mb-2 font-semibold text-brand-primary">
                        Solução
                      </p>
                      <p className="text-sm leading-6 text-white/62">
                        {item.solution}
                      </p>
                    </div>
                    <div className="glass-panel rounded-2xl px-4 py-3">
                      <p className="display-kicker mb-1 font-semibold text-brand-success">
                        Resultado
                      </p>
                      <p className="text-base font-medium text-white">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {teamPhotos.map((photo, index) => (
            <motion.div
              key={photo.caption}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.06 }}
            >
              <Card className="hover-lift group overflow-hidden rounded-[28px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f10] via-[#0d0f10]/35 to-transparent" />
                </div>
                <CardContent className="p-5">
                  <p className="display-kicker text-white/88">
                    {photo.caption}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
