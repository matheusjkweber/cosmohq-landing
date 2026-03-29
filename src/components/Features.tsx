"use client";

import Image from "next/image";
import {
  BellRing,
  ChartColumnIncreasing,
  CircleGauge,
  LockKeyhole,
  Megaphone,
  Send,
  WandSparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Painel de Controle",
    description:
      "Cockpit configuravel para acompanhar desempenho de campanhas, engagement e conversoes sem trocar de contexto.",
    icon: CircleGauge,
    complexity: "Media",
    className: "md:col-span-7 md:row-span-2",
    visual: "dashboard" as const,
  },
  {
    title: "Gerenciamento de Campanhas",
    description:
      "Planeje, publique e otimize campanhas em multiplas plataformas com uma camada visual que parece operacao de estudio.",
    icon: Megaphone,
    complexity: "Alta",
    className: "md:col-span-5",
    visual: "campaigns" as const,
  },
  {
    title: "Analise de Dados em Tempo Real",
    description:
      "Leitura ao vivo para corrigir rota enquanto a performance muda, nao depois que o relatorio chega.",
    icon: ChartColumnIncreasing,
    complexity: "Alta",
    className: "md:col-span-5",
    visual: "analytics" as const,
  },
  {
    title: "Integracao com Redes Sociais",
    description:
      "Conecte as principais redes para publicar, monitorar respostas e manter a narrativa do time em um fluxo unico.",
    icon: Send,
    complexity: "Media",
    className: "md:col-span-3",
    visual: "social" as const,
  },
  {
    title: "Otimizacao de Conteudo",
    description:
      "Refine criativos, formatos e timing com uma camada de orientacao pratica para cada plataforma.",
    icon: WandSparkles,
    complexity: "Baixa",
    className: "md:col-span-4",
    visual: "content" as const,
  },
  {
    title: "Notificacoes e Alertas",
    description:
      "Sinais acionaveis para budget, queda de performance e oportunidades que precisam de resposta rapida.",
    icon: BellRing,
    complexity: "Media",
    className: "md:col-span-4",
    visual: "alerts" as const,
  },
  {
    title: "Seguranca e Autenticacao",
    description:
      "Governanca, protecao de acesso e autenticacao no plano gratuito para o produto nascer confiavel.",
    icon: LockKeyhole,
    complexity: "Alta",
    className: "md:col-span-4",
    visual: "security" as const,
  },
];

function FeatureVisual({ visual }: { visual: (typeof features)[number]["visual"] }) {
  if (visual === "dashboard") {
    return (
      <div className="relative mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#1d2224] p-3">
        <Image
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png"
          alt="Dashboard do CosmoHQ"
          width={2560}
          height={1600}
          className="rounded-[18px]"
          unoptimized
        />
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            "Metricas centrais em um so painel",
            "Leitura de campanhas sem alternar abas",
            "Visao pronta para decisoes do dia",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm leading-6 text-white/66"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "campaigns") {
    return (
      <div className="relative mt-auto overflow-hidden rounded-[24px] border border-white/10 bg-[#1d2224] p-3">
        <Image
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png"
          alt="Fluxo de campanhas do CosmoHQ"
          width={2560}
          height={1600}
          className="rounded-[18px]"
          unoptimized
        />
      </div>
    );
  }

  if (visual === "analytics") {
    return (
      <div className="mt-auto rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(52,152,219,0.16),rgba(255,255,255,0.03))] p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/42">
            Live campaign reading
          </div>
          <Badge variant="success">Realtime</Badge>
        </div>
        <div className="mt-5 flex gap-2">
          {[74, 112, 96, 126, 108, 134].map((height, index) => (
            <div
              key={`${height}-${index}`}
              className={cn(
                "flex-1 rounded-full bg-white/8",
                index > 3 && "bg-brand-secondary/14"
              )}
            >
              <div
                className="w-full rounded-full bg-[linear-gradient(180deg,#86d7ff,#3498db)]"
                style={{ height }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "social") {
    return (
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {["Instagram", "Facebook", "TikTok", "LinkedIn", "X"].map((channel) => (
          <span
            key={channel}
            className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/58"
          >
            {channel}
          </span>
        ))}
      </div>
    );
  }

  if (visual === "content") {
    return (
      <div className="relative mt-auto overflow-hidden rounded-[24px] border border-white/10 pt-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
          <Image
            src="https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg"
            alt="Profissional apresentando dados"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d2224] via-transparent to-transparent" />
        </div>
      </div>
    );
  }

  if (visual === "alerts") {
    return (
      <div className="mt-auto space-y-3 pt-8">
        {[
          "Alertas para quedas de performance e budget fora da rota.",
          "Sinais rapidos para o time agir antes da janela fechar.",
        ].map((item, index) => (
          <div
            key={item}
            className={cn(
              "rounded-[22px] border px-4 py-3 text-sm leading-6 text-white/68",
              index === 0
                ? "border-brand-accent/20 bg-brand-accent/10"
                : "border-brand-success/20 bg-brand-success/10"
            )}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-auto rounded-[24px] border border-white/8 bg-white/5 p-5">
      <div className="text-xs uppercase tracking-[0.18em] text-white/42">
        Trust layer
      </div>
      <div className="mt-4 space-y-3">
        {["Workspace roles", "Protected sessions", "Secure authentication"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-sm text-white/66"
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Feature Stack"
          title="Sete modulos que fazem o CosmoHQ parecer uma operacao premium"
          highlight="desde a primeira dobra."
          description="O plano gratuito cobre a base inteira: painel, campanhas, analise em tempo real, integracao social, conteudo, alertas e seguranca. A secao organiza tudo em um bento mais editorial do que SaaS."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="story-grid mt-14"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.04 }}
              className={feature.className}
            >
              <Card className="hover-lift spotlight-border group h-full overflow-hidden rounded-[30px]">
                <CardContent className="flex h-full flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/7 p-3 text-brand-primary transition group-hover:scale-105 group-hover:border-brand-primary/40">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary">Complexidade {feature.complexity}</Badge>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-white/66">
                      {feature.description}
                    </p>
                  </div>

                  <FeatureVisual visual={feature.visual} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
