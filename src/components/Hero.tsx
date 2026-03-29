"use client";

import Image from "next/image";
import Balancer from "react-wrap-balancer";
import {
  ArrowRight,
  CalendarClock,
  CirclePlay,
  Orbit,
  Sparkles,
} from "lucide-react";
import { motion, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const factualChips = [
  "7 modulos no plano Free",
  "Mensal, anual e lifetime lado a lado",
  "iOS e Android em Coming Soon",
];

const editorialCards = [
  {
    title: "Command center",
    text: "Painel, campanhas e analytics amarrados em uma narrativa de produto premium.",
    src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    alt: "Painel principal do CosmoHQ",
  },
  {
    title: "Growth room",
    text: "Uma linguagem de marca pensada para growth teams, marketing ops e agencias.",
    src: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    alt: "Time colaborando em uma sala",
  },
];

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
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <Badge className="mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Premium pre-launch for growth teams
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease }}
              className="display-kicker text-white/42"
            >
              EDITORIAL LANDING FOR A PRODUCT THAT SELLS OUTCOMES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08, ease }}
              className="mt-5 max-w-3xl text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-[4.5rem] lg:text-[5.9rem]"
            >
              <Balancer>
                CosmoHQ deixa sua operacao de growth com cara de{" "}
                <span className="text-gradient">sala de comando.</span>
              </Balancer>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.16, ease }}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
            >
              <Balancer>
                Painel de controle, gerenciamento de campanhas, analise em tempo
                real, integracao social e otimizacao de conteudo reunidos em uma
                landing que posiciona o CosmoHQ como um growth studio OS, nao como
                mais um dashboard generico.
              </Balancer>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.24, ease }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#pricing" className={buttonVariants({ size: "lg" })}>
                Explorar planos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#screenshots"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                })}
              >
                <CirclePlay className="h-4 w-4" />
                Ver a experiencia
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {factualChips.map((chip) => (
                <div
                  key={chip}
                  className="glass-panel rounded-full px-4 py-3 text-sm text-white/74"
                >
                  {chip}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.36, ease }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              <Card className="spotlight-border ambient-glow">
                <CardContent className="p-5">
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    7
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/44">
                    recursos-base no Free
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    3
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/44">
                    modelos de compra juntos
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    2
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/44">
                    lojas marcadas como Coming Soon
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.86, delay: 0.12, ease }}
            className="relative"
          >
            <div className="absolute inset-x-14 top-10 -z-10 h-56 rounded-full bg-brand-primary/18 blur-[96px]" />

            <div className="editorial-panel ring-gradient relative rounded-[36px] p-3">
              <div className="flex items-center justify-between gap-4 rounded-[26px] border border-white/10 bg-black/16 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/8">
                    <Orbit className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">CosmoHQ</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                      Pre-launch workspace
                    </div>
                  </div>
                </div>
                <div className="glass-panel rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/58">
                  app.cosmohq.com
                </div>
              </div>

              <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)]">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#1d2224]">
                  <Image
                    src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png"
                    alt="Tela analitica do CosmoHQ"
                    width={2560}
                    height={1599}
                    priority
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>

                <div className="grid gap-3">
                  {editorialCards.map((card) => (
                    <div
                      key={card.title}
                      className="surface-blend overflow-hidden rounded-[24px] border border-white/10 p-2"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                        <Image
                          src={card.src}
                          alt={card.alt}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="px-2 pb-2 pt-3">
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/42">
                          {card.title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/64">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)]">
                <div className="glass-panel rounded-[24px] p-5">
                  <div className="display-kicker text-white/42">Launch stance</div>
                  <p className="mt-3 text-lg leading-8 text-white/72">
                    A pagina assume um posicionamento honesto: produto ainda nao
                    lancado, links de iOS e Android indisponiveis, mas valor,
                    visual e precificacao ja apresentados com clareza.
                  </p>
                </div>

                <div className="glass-panel rounded-[24px] p-5">
                  <div className="flex items-center gap-2 text-sm text-white/72">
                    <CalendarClock className="h-4 w-4 text-brand-secondary" />
                    Stores ainda fechadas, waitlist aberta
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Monthly", "Yearly", "Lifetime"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/58"
                      >
                        {item}
                      </span>
                    ))}
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
