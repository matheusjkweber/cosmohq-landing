"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const productGallery = [
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    alt: "Dashboard principal do CosmoHQ",
    title: "Mission control",
    description: "Cockpit central para campanhas, sinais e prioridades de execucao.",
    className: "md:col-span-7",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
    alt: "Tela analitica do CosmoHQ",
    title: "Live analytics",
    description: "A tela que ajuda o time a reagir antes da performance escapar.",
    className: "md:col-span-5",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    alt: "Fluxo de campanhas no CosmoHQ",
    title: "Campaign canvas",
    description: "Execucao e otimizacao com uma linguagem visual clara e premium.",
    className: "md:col-span-12",
  },
];

const proofCards = [
  {
    src: "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
    alt: "Profissional sorrindo em frente ao computador",
    quote:
      "A interface transmite imediatamente que o produto e serio, veloz e pronto para operacao.",
    name: "Rafael Moraes",
    role: "Growth Lead",
  },
  {
    src: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    alt: "Duas pessoas colaborando positivamente",
    quote:
      "A narrativa da landing deixou claro o valor do freemium sem parecer pagina generica de SaaS.",
    name: "Julia Torres",
    role: "Head of Performance",
  },
  {
    src: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
    alt: "Profissional apresentando dados",
    quote:
      "O bloco de pricing com mensal, anual e vitalicio no mesmo lugar ajuda a comparar muito mais rapido.",
    name: "Caio Nunes",
    role: "Marketing Ops",
  },
];

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Screenshots Gallery"
          title="A prova visual vem de dois lados:"
          highlight="produto polido e narrativa de marca."
          description="Os screenshots oficiais entram como protagonista da pagina e as imagens editoriais ajudam a sustentar a sensacao de time, confianca e ambicao antes do lancamento."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="story-grid mt-14"
        >
          {productGallery.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.58, ease, delay: index * 0.05 }}
              className={item.className}
            >
              <Card className="spotlight-border group h-full overflow-hidden rounded-[30px]">
                <div className="overflow-hidden border-b border-white/10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={2560}
                    height={1600}
                    className="animate-pan h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    unoptimized
                  />
                </div>
                <CardContent className="flex items-center justify-between gap-6 p-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {item.description}
                    </p>
                  </div>
                  <Badge variant="secondary">Product view</Badge>
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
          className="mt-16 grid gap-5 lg:grid-cols-3"
        >
          {proofCards.map((card, index) => (
            <motion.div
              key={card.name}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden rounded-[28px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061120] via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-xl">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="h-3.5 w-3.5 fill-brand-secondary text-brand-secondary"
                      />
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <Quote className="h-5 w-5 text-brand-primary" />
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {card.quote}
                  </p>
                  <div className="mt-6">
                    <div className="font-medium text-white">{card.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/44">
                      {card.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
