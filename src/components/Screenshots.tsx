"use client";

import Image from "next/image";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Quote } from "lucide-react";

const appScreenshots = [
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    alt: "CosmoHQ - Painel de Controle",
    label: "Dashboard",
    description: "Visao geral completa das suas metricas",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
    alt: "CosmoHQ - Analytics",
    label: "Analytics",
    description: "Dados em tempo real para decisoes rapidas",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    alt: "CosmoHQ - Campanhas",
    label: "Campanhas",
    description: "Gerencie todas as suas campanhas em um lugar",
  },
];

const testimonials = [
  {
    src: "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
    alt: "Profissional usando CosmoHQ",
    quote: "O CosmoHQ transformou como gerenciamos nossas campanhas. Resultados incriveis desde o primeiro mes.",
    name: "Rafael M.",
    role: "Marketing Manager",
  },
  {
    src: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    alt: "Equipe colaborando",
    quote: "A melhor ferramenta de analytics que ja usamos. Interface limpa e insights poderosos.",
    name: "Juliana S.",
    role: "Growth Lead",
  },
  {
    src: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
    alt: "Apresentando dados",
    quote: "Insights em tempo real que realmente fazem diferenca no nosso dia a dia.",
    name: "Pedro L.",
    role: "Data Analyst",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />
      <div className="absolute bottom-0 left-[20%] h-[450px] w-[650px] rounded-full bg-brand-secondary/[0.03] blur-[160px] -z-10" />
      <div className="absolute top-[30%] right-0 h-[300px] w-[300px] rounded-full bg-brand-primary/[0.03] blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-4">
            <span className="h-px w-8 bg-brand-primary/40" />
            Screenshots
            <span className="h-px w-8 bg-brand-primary/40" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Interface pensada para{" "}
            <span className="text-gradient">produtividade</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-dark-muted text-lg leading-relaxed">
            Design limpo e intuitivo que coloca suas metricas e campanhas na
            ponta dos dedos.
          </p>
        </motion.div>

        {/* App screenshots */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {appScreenshots.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/[0.08] gradient-border">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={2560}
                    height={1600}
                    className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    unoptimized
                  />
                </div>
                <div className="mt-3 mb-2 px-2">
                  <p className="text-sm font-semibold text-white">{img.label}</p>
                  <p className="text-xs text-dark-muted mt-0.5">{img.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 gradient-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <Quote className="h-5 w-5 text-brand-primary/40 mb-3" />
                <p className="text-sm text-dark-text leading-relaxed mb-4">
                  {item.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-primary to-blue-600 flex items-center justify-center text-xs font-bold text-white ring-2 ring-dark-card">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-dark-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
