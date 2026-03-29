"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const productGallery = [
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    alt: "Dashboard principal do CosmoHQ",
    title: "Mission control",
    description: "Painel principal com uma leitura visual forte para performance e campanhas.",
    className: "md:col-span-7",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
    alt: "Tela analitica do CosmoHQ",
    title: "Live reading",
    description: "Tela pensada para reagir a sinais antes que a janela de otimizacao passe.",
    className: "md:col-span-5",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    alt: "Fluxo de campanhas no CosmoHQ",
    title: "Campaign canvas",
    description: "Execucao multi-canal com uma linguagem visual mais proxima de estudio do que de planilha.",
    className: "md:col-span-12",
  },
];

const studioScenes = [
  {
    src: "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
    alt: "Profissional em frente ao computador",
    title: "Focus sessions",
    description: "Contexto editorial para posicionar o produto como ambiente de trabalho serio e ambicioso.",
  },
  {
    src: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    alt: "Duas pessoas colaborando em reuniao",
    title: "Campaign reviews",
    description: "A marca precisa parecer pronta para conversas de time, nao apenas para demos isoladas.",
  },
  {
    src: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
    alt: "Profissional apresentando relatorios",
    title: "Performance stand-up",
    description: "Imagens humanas entram para sustentar narrativa e pacing, sem inventar depoimentos.",
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
          title="A pagina vende o produto em duas camadas:"
          highlight="interface oficial e atmosfera de estudio."
          description="Os screenshots fornecidos viram protagonista. As imagens editoriais entram para dar ritmo e contexto humano, sem cair em depoimentos falsos ou logos inventados."
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
              <Card className="hover-lift spotlight-border group h-full overflow-hidden rounded-[30px]">
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
          {studioScenes.map((scene, index) => (
            <motion.div
              key={scene.title}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.05 }}
            >
              <Card className="hover-lift group h-full overflow-hidden rounded-[28px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2224] via-transparent to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="display-kicker text-white/42">{scene.title}</div>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {scene.description}
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
