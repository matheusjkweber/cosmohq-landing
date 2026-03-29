"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const productShots = [
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    alt: "Dashboard principal do CosmoHQ",
    label: "Dashboard control",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
    alt: "Painel analitico do CosmoHQ",
    label: "Live analytics",
  },
  {
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    alt: "Fluxo de campanhas no CosmoHQ",
    label: "Campaign flow",
  },
];

const trustFaces = [
  "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
  "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
];

const metrics = [
  { value: "7", label: "features in free" },
  { value: "26%", label: "yearly savings" },
  { value: "24/7", label: "live monitoring" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="section-shell noise-overlay relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="hero-orbit absolute left-[12%] top-24 -z-10 h-[28rem] w-[28rem] rounded-full" />
      <div className="hero-orbit absolute right-[8%] top-20 -z-10 h-[26rem] w-[26rem] rounded-full opacity-50" />
      <div className="grid-mask absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <Badge className="mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Marketing OS para equipes que operam em alta velocidade
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.04, ease }}
              className="max-w-3xl text-balance text-[3rem] font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-[4.6rem] lg:text-[5.7rem]"
            >
              O centro de comando para campanhas, sinais e decisao em{" "}
              <span className="text-gradient">tempo real.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
            >
              CosmoHQ reune painel de controle, gerenciamento de campanhas,
              analytics em tempo real, integracao social e otimizacao de
              conteudo em uma experiencia premium desenhada para o pre-launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#downloads" className={buttonVariants({ size: "lg" })}>
                Entrar na waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#screenshots"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                })}
              >
                <Play className="h-4 w-4" />
                Explorar interface
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]"
            >
              <div className="glass-panel flex items-center gap-4 rounded-[26px] p-4">
                <div className="flex -space-x-3">
                  {trustFaces.map((src) => (
                    <div
                      key={src}
                      className="relative h-12 w-12 overflow-hidden rounded-full border border-white/14"
                    >
                      <Image
                        src={src}
                        alt="Equipe de marketing usando CosmoHQ"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Equipes de growth e marketing ops ja validando o beta
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/44">
                    App ainda nao lancado
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-[26px] border border-brand-success/18 bg-brand-success/10 px-4 py-4 text-sm text-white/74">
                <BadgeCheck className="h-4 w-4 text-brand-success" />
                Free tier com seguranca e autenticacao
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <Card key={metric.label} className="spotlight-border ambient-glow">
                  <CardContent className="p-5">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/46">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="relative"
          >
            <div className="absolute inset-x-12 top-10 -z-10 h-64 rounded-full bg-brand-primary/18 blur-[110px]" />

            <div className="aurora-panel spotlight-border relative overflow-hidden rounded-[34px] p-3 shadow-brand">
              <div className="flex items-center justify-between gap-4 rounded-[26px] border border-white/10 bg-black/20 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/44">
                  app.cosmohq.com
                </div>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)]">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#09111d]">
                  <Image
                    src={productShots[0].src}
                    alt={productShots[0].alt}
                    width={2560}
                    height={1600}
                    priority
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>

                <div className="grid gap-3">
                  {productShots.slice(1).map((shot) => (
                    <div
                      key={shot.label}
                      className="surface-blend overflow-hidden rounded-[24px] border border-white/10 p-2"
                    >
                      <div className="overflow-hidden rounded-[18px]">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={2560}
                          height={1600}
                          className="h-full w-full object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="px-2 pb-2 pt-3">
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/42">
                          {shot.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
                <div className="glass-panel rounded-[24px] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/42">
                        Campaign pulse
                      </div>
                      <div className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white">
                        +18.4%
                      </div>
                    </div>
                    <div className="rounded-2xl border border-brand-secondary/30 bg-brand-secondary/12 p-3 text-brand-secondary">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/64">
                    Melhor janela de otimizacao detectada agora para criativos,
                    distribuicao e budget.
                  </p>
                </div>

                <div className="glass-panel rounded-[24px] p-4">
                  <div className="flex items-center gap-3 text-sm text-white/72">
                    <CalendarClock className="h-4 w-4 text-brand-secondary" />
                    iOS e Android seguem como Coming Soon
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Instagram", "Facebook", "LinkedIn", "X", "TikTok"].map(
                      (channel) => (
                        <span
                          key={channel}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/56"
                        >
                          {channel}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
