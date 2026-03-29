"use client";

import { motion, ease } from "./motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    alt: "CosmoHQ Dashboard",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
    alt: "CosmoHQ Analytics",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    alt: "CosmoHQ Campaigns",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden noise pt-28 pb-24 lg:pt-36 lg:pb-32">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="absolute top-20 left-[15%] h-[500px] w-[500px] rounded-full bg-brand-primary/[0.08] blur-[140px] -z-10" />
      <div className="absolute top-40 right-[10%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[120px] -z-10" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 h-[250px] w-[700px] rounded-full bg-brand-secondary/[0.04] blur-[100px] -z-10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm text-dark-muted">
            <Sparkles className="h-3.5 w-3.5 text-brand-secondary" />
            <span>Marketing Intelligence Platform</span>
            <div className="flex items-center gap-0.5 ml-1 text-brand-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-center text-[2.75rem] font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          Suas campanhas no
          <br />
          <span className="text-gradient">proximo nivel</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-dark-muted leading-relaxed sm:text-xl"
        >
          Gerencie campanhas, analise dados em tempo real e otimize sua
          presenca digital — tudo em uma unica plataforma inteligente.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-brand-primary to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-brand-primary/20 transition-all duration-300 hover:shadow-brand-primary/35 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
          >
            Comece Gratis
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-2xl border border-dark-border px-8 py-4 text-base font-semibold text-dark-text transition-all duration-300 hover:border-white/15 hover:bg-white/[0.03] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
          >
            Explorar Features
          </a>
        </motion.div>

        {/* Screenshot showcase */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="relative mt-20 lg:mt-24"
        >
          {/* Glow behind */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-brand-primary/[0.06] blur-[100px] rounded-full" />

          {/* Main screenshot */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative glass rounded-2xl p-2 shadow-2xl shadow-black/50 ring-1 ring-white/[0.08] glow-primary">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="mx-auto max-w-xs h-6 rounded-lg bg-white/[0.04] flex items-center justify-center">
                    <span className="text-[11px] text-dark-muted">
                      app.cosmohq.com
                    </span>
                  </div>
                </div>
              </div>
              <Image
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                width={2560}
                height={1600}
                className="rounded-xl"
                priority
                unoptimized
              />
            </div>

            {/* Floating left screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -left-16 top-20 hidden lg:block w-64 animate-float"
            >
              <div className="glass rounded-xl p-1.5 shadow-xl shadow-black/40 ring-1 ring-white/[0.06]">
                <Image
                  src={screenshots[1].src}
                  alt={screenshots[1].alt}
                  width={640}
                  height={400}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Floating right screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 4 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="absolute -right-16 top-28 hidden lg:block w-64 animate-float-delayed"
            >
              <div className="glass rounded-xl p-1.5 shadow-xl shadow-black/40 ring-1 ring-white/[0.06]">
                <Image
                  src={screenshots[2].src}
                  alt={screenshots[2].alt}
                  width={640}
                  height={400}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
