"use client";

import { motion, ease } from "./motion";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
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

const stats = [
  { value: "10x", label: "Mais rapido" },
  { value: "5k+", label: "Usuarios beta" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Suporte" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden noise pt-28 pb-24 lg:pt-36 lg:pb-32">
      {/* Ambient glows */}
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="absolute top-16 left-[12%] h-[550px] w-[550px] rounded-full bg-brand-primary/[0.07] blur-[160px] -z-10 animate-pulse-glow" />
      <div className="absolute top-32 right-[8%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[140px] -z-10" />
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 h-[280px] w-[800px] rounded-full bg-brand-secondary/[0.03] blur-[120px] -z-10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Orbiting ring (decorative) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full border border-white/[0.02] -z-10 animate-rotate-slow" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease }}
          className="flex justify-center mb-8"
        >
          <div className="group inline-flex items-center gap-2.5 rounded-full glass gradient-border px-5 py-2.5 text-sm text-dark-muted transition-all duration-300 hover:bg-white/[0.03] cursor-default">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary/20">
              <Zap className="h-3 w-3 text-brand-primary" />
            </span>
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
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="text-center text-[2.75rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          Suas campanhas no
          <br />
          <span className="text-gradient">proximo nivel</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-dark-muted leading-relaxed sm:text-xl"
        >
          Gerencie campanhas, analise dados em tempo real e otimize sua
          presenca digital — tudo em uma unica plataforma inteligente.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-brand-primary to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-brand-primary/20 transition-all duration-300 hover:shadow-brand-primary/35 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Comece Gratis
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-brand-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-2xl border border-dark-border px-8 py-4 text-base font-semibold text-dark-text transition-all duration-300 hover:border-white/15 hover:bg-white/[0.03] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
          >
            <Sparkles className="h-4 w-4 text-brand-secondary" />
            Explorar Features
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-dark-muted uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Screenshot showcase */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease }}
          className="relative mt-20 lg:mt-24"
        >
          {/* Glow behind */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-brand-primary/[0.05] blur-[120px] rounded-full" />

          {/* Main screenshot */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative glass rounded-2xl p-2 shadow-2xl shadow-black/60 ring-1 ring-white/[0.08] glow-primary gradient-border">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="mx-auto max-w-xs h-7 rounded-lg bg-white/[0.04] flex items-center justify-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-brand-success/30 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-success" />
                    </div>
                    <span className="text-[11px] text-dark-muted font-medium">
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
              initial={{ opacity: 0, x: -80, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="absolute -left-20 top-20 hidden lg:block w-72 animate-float"
            >
              <div className="glass rounded-xl p-1.5 shadow-2xl shadow-black/50 ring-1 ring-white/[0.06] gradient-border">
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
              initial={{ opacity: 0, x: 80, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 5 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="absolute -right-20 top-28 hidden lg:block w-72 animate-float-delayed"
            >
              <div className="glass rounded-xl p-1.5 shadow-2xl shadow-black/50 ring-1 ring-white/[0.06] gradient-border">
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
