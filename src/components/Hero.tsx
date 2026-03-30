"use client";

import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { ArrowRight, Orbit, Sparkles } from "lucide-react";
import { motion, ease, fadeUp, stagger } from "./motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Apps & Sites",
    subtitle: "desenvolvimento completo",
  },
  {
    title: "Redes Sociais",
    subtitle: "gestão estratégica",
  },
  {
    title: "Dados",
    subtitle: "leitura do que importa",
  },
] as const;

const secondaryShowcase = [
  {
    label: "CosmoKit",
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    alt: "CosmoKit — Toolkit criativo desenvolvido pela CosmoHQ",
  },
  {
    label: "Nosso time",
    src: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    alt: "Equipe CosmoHQ em sessão de trabalho",
  },
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="section-shell noise-overlay relative px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="hero-orbit absolute left-[8%] top-16 -z-10 h-[26rem] w-[26rem] rounded-full" />
      <div className="hero-orbit absolute right-[6%] top-36 -z-10 h-[24rem] w-[24rem] rounded-full opacity-60" />
      <div className="grid-fade absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center">
          <motion.div
            className="relative"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="accent" className="mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Agência Digital
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-[4.1rem] lg:text-[5.2rem]"
            >
              <Balancer>
                Sua ideia no digital.{" "}
                <span className="text-gradient">Do jeito certo.</span>
              </Balancer>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
            >
              <Balancer>
                CosmoHQ constrói apps, sites e sistemas, cuida das redes sociais
                e usa dados para deixar cada decisão mais clara.
              </Balancer>
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#contato" className={buttonVariants({ size: "lg" })}>
                Fale com a gente
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                })}
              >
                Ver o que fazemos
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {stats.map((item, index) => (
                <Card
                  key={item.title}
                  className={cn(
                    "hover-lift",
                    index === 0 && "spotlight-border ambient-glow"
                  )}
                >
                  <CardContent className="p-5">
                    <div className="text-lg font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/44">
                      {item.subtitle}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.86, delay: 0.12, ease }}
            className="relative"
          >
            <div className="absolute inset-x-14 top-10 -z-10 h-56 rounded-full bg-brand-primary/18 blur-[96px]" />

            <div className="editorial-panel ring-gradient relative rounded-[36px] p-3">
              <div className="flex items-center justify-between gap-4 rounded-[26px] border border-white/10 bg-black/16 px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8">
                    <Orbit className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-white">
                      CosmoHQ
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                      Apps · Sites · Ads · Dados
                    </div>
                  </div>
                </div>
                <div className="glass-panel hidden shrink-0 rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/58 sm:block">
                  Estúdio digital
                </div>
              </div>

              <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)]">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#1d2224]">
                  <Image
                    src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png"
                    alt="CosmoFinanças — Dashboard financeiro desenvolvido pela CosmoHQ"
                    width={2560}
                    height={1599}
                    priority
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>

                <div className="grid gap-3">
                  {secondaryShowcase.map((item) => (
                    <div
                      key={item.label}
                      className="surface-blend overflow-hidden rounded-[24px] border border-white/10 p-2"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 280px, 100vw"
                          unoptimized
                        />
                      </div>
                      <div className="px-2 pb-2 pt-3">
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/42">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
