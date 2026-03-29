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
      "Um cockpit configuravel com metricas de campanhas, engagement, conversoes e prioridades do time no mesmo lugar.",
    icon: CircleGauge,
    complexity: "Media",
    className: "md:col-span-7 md:row-span-2",
    visual: "dashboard" as const,
  },
  {
    title: "Gerenciamento de Campanhas",
    description:
      "Crie, gerencie e otimize campanhas em diferentes plataformas sem perder contexto de criativo, budget ou resultado.",
    icon: Megaphone,
    complexity: "Alta",
    className: "md:col-span-5",
    visual: "metric" as const,
  },
  {
    title: "Analise de Dados em Tempo Real",
    description:
      "Leituras ao vivo para agir enquanto a performance muda, nao quando o relatorio ja chegou tarde.",
    icon: ChartColumnIncreasing,
    complexity: "Alta",
    className: "md:col-span-5",
    visual: "analytics" as const,
  },
  {
    title: "Integracao com Redes Sociais",
    description:
      "Publique, acompanhe respostas e mantenha a operacao multi-canal em um fluxo unico.",
    icon: Send,
    complexity: "Media",
    className: "md:col-span-3",
    visual: "channels" as const,
  },
  {
    title: "Otimizacao de Conteudo",
    description:
      "Sugestoes de copy, formato e timing para ajustar criativos conforme cada plataforma pede.",
    icon: WandSparkles,
    complexity: "Baixa",
    className: "md:col-span-4",
    visual: "photo" as const,
  },
  {
    title: "Notificacoes e Alertas",
    description:
      "Alertas acionaveis sobre oportunidades, quedas de performance e desvios de budget.",
    icon: BellRing,
    complexity: "Media",
    className: "md:col-span-4",
    visual: "alerts" as const,
  },
  {
    title: "Seguranca e Autenticacao",
    description:
      "Protecao de acesso, governanca e seguranca desde o plano gratuito para iniciar do jeito certo.",
    icon: LockKeyhole,
    complexity: "Alta",
    className: "md:col-span-4",
    visual: "security" as const,
  },
];

function FeatureVisual({ visual }: { visual: (typeof features)[number]["visual"] }) {
  if (visual === "dashboard") {
    return (
      <div className="relative mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#09111d] p-3">
        <Image
          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png"
          alt="Dashboard do CosmoHQ"
          width={2560}
          height={1600}
          className="rounded-[18px]"
          unoptimized
        />
        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Engagement", value: "+28%" },
            { label: "Conversoes", value: "4.8x" },
            { label: "Alertas", value: "09" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-white/42">
                {metric.label}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "analytics") {
    return (
      <div className="mt-auto rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(52,152,219,0.14),rgba(255,255,255,0.03))] p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/42">
              Live variance
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white">
              +18.4%
            </div>
          </div>
          <Badge variant="success">Realtime</Badge>
        </div>
        <div className="mt-4 flex gap-2">
          {[56, 84, 72, 94, 78, 112, 128].map((height, index) => (
            <div
              key={height}
              className={cn(
                "w-full rounded-full bg-brand-primary/14",
                index > 4 && "bg-brand-secondary/20"
              )}
            >
              <div
                className="w-full rounded-full bg-[linear-gradient(180deg,#7bd0ff,#3498db)]"
                style={{ height }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "metric") {
    return (
      <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
        {[
          { label: "Canais ativos", value: "08" },
          { label: "Campaign tasks", value: "124" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-white/8 bg-white/5 px-4 py-4"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-white/42">
              {item.label}
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (visual === "channels") {
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

  if (visual === "photo") {
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101c] via-transparent to-transparent" />
        </div>
      </div>
    );
  }

  if (visual === "alerts") {
    return (
      <div className="mt-auto space-y-3 pt-8">
        {[
          "Queda de CTR detectada no conjunto A.",
          "Budget pode ser redistribuido para criativo vencedor.",
        ].map((item, index) => (
          <div
            key={item}
            className={cn(
              "rounded-[22px] border px-4 py-3 text-sm leading-6 text-white/64",
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
        Access layers
      </div>
      <div className="mt-4 space-y-3">
        {["MFA enabled", "Workspace roles", "Protected sessions"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/66">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Feature Stack"
          title="Tudo o que o CosmoHQ precisa mostrar no pre-launch,"
          highlight="ja organizado em um bento de produto."
          description="O plano gratuito entrega a base: painel de controle, campanhas, analytics em tempo real, integracoes sociais, otimizacao de conteudo, alertas e seguranca."
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
              <Card className="spotlight-border group h-full overflow-hidden rounded-[30px] transition duration-300 hover:-translate-y-1">
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
