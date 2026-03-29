"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { motion, fadeUp, stagger, ease } from "./motion";
import { cn } from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly" | "lifetime";

const plans = [
  {
    name: "Free",
    description: "Perfeito para comecar",
    prices: { monthly: 0, yearly: 0, lifetime: 0 },
    features: [
      "Painel de Controle basico",
      "1 campanha ativa",
      "Analytics com 7 dias",
      "1 rede social conectada",
      "Suporte por email",
    ],
    cta: "Comece Gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Para profissionais de marketing",
    prices: { monthly: 29, yearly: 290, lifetime: 799 },
    features: [
      "Painel personalizavel",
      "Campanhas ilimitadas",
      "Analytics em tempo real",
      "Todas as redes sociais",
      "IA para otimizacao",
      "Notificacoes inteligentes",
      "Suporte prioritario",
    ],
    cta: "Assinar Pro",
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Enterprise",
    description: "Para equipes e agencias",
    prices: { monthly: 79, yearly: 790, lifetime: 1999 },
    features: [
      "Tudo do Pro",
      "Multi-usuario e permissoes",
      "API de integracao",
      "Relatorios white-label",
      "SSO e seguranca avancada",
      "Gerente de conta dedicado",
      "SLA garantido",
    ],
    cta: "Falar com Vendas",
    highlighted: false,
  },
];

const periods: { key: BillingPeriod; label: string; badge?: string }[] = [
  { key: "monthly", label: "Mensal" },
  { key: "yearly", label: "Anual", badge: "Economize 17%" },
  { key: "lifetime", label: "Vitalicio" },
];

export default function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("yearly");

  return (
    <section
      id="pricing"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-primary/[0.04] blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Planos para cada{" "}
            <span className="text-gradient">momento</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-dark-muted text-lg">
            Comece gratis e escale conforme seu negocio cresce.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex rounded-2xl glass p-1.5 gap-1">
            {periods.map((period) => (
              <button
                key={period.key}
                onClick={() => setBilling(period.key)}
                className={cn(
                  "relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50",
                  billing === period.key
                    ? "bg-gradient-to-r from-brand-primary to-blue-600 text-white shadow-lg shadow-brand-primary/20"
                    : "text-dark-muted hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {period.label}
                {period.badge && (
                  <span className="rounded-full bg-brand-success/20 px-2 py-0.5 text-[10px] font-bold text-brand-success uppercase tracking-wider">
                    {period.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1",
                plan.highlighted
                  ? "glass ring-1 ring-brand-primary/30 shadow-2xl shadow-brand-primary/[0.08] scale-[1.02]"
                  : "glass glass-hover"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-primary to-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-primary/30 uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-dark-muted">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {plan.prices[billing] === 0 ? (
                    <span className="text-4xl font-extrabold text-white">
                      Gratis
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-dark-muted">R$</span>
                      <span className="text-4xl font-extrabold text-white tabular-nums">
                        {plan.prices[billing]}
                      </span>
                      {billing !== "lifetime" && (
                        <span className="text-sm text-dark-muted">
                          /{billing === "monthly" ? "mes" : "ano"}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-success" />
                    <span className="text-dark-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full rounded-xl py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50",
                  plan.highlighted
                    ? "bg-gradient-to-r from-brand-primary to-blue-600 text-white shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30"
                    : "border border-dark-border text-white hover:bg-white/[0.04] hover:border-white/15"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
