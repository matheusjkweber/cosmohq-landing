"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PriceMode = "monthly" | "yearly" | "lifetime";

const priceModes: { key: PriceMode; label: string; suffix: string }[] = [
  { key: "monthly", label: "Monthly", suffix: "/mes" },
  { key: "yearly", label: "Yearly", suffix: "/ano" },
  { key: "lifetime", label: "Lifetime", suffix: "pagamento unico" },
];

const plans = [
  {
    name: "Free",
    description:
      "Para entrar no produto, organizar campanhas e usar os sete recursos-base sem custo.",
    prices: { monthly: 0, yearly: 0, lifetime: 0 },
    note: "Painel, campanhas, realtime analytics, social, content, alerts e security.",
    cta: "Entrar na lista",
    featured: false,
    features: [
      "Painel de Controle",
      "Gerenciamento de Campanhas",
      "Análise de Dados em Tempo Real",
      "Integração com Redes Sociais",
      "Otimização de Conteúdo",
      "Notificações e Alertas",
      "Segurança e Autenticação",
    ],
  },
  {
    name: "Growth",
    description:
      "Para squads que querem capacidade maior, comparacao rapida de valor e entrada forte no pre-launch.",
    prices: { monthly: 39, yearly: 348, lifetime: 899 },
    note: "Melhor equilibrio para equipes pequenas e medias.",
    cta: "Reservar Growth",
    featured: true,
    features: [
      "Tudo do Free com limites expandidos",
      "Mais workspaces e campanhas simultaneas",
      "Dashboards e relatorios avancados",
      "Prioridade em novas integracoes",
      "Suporte prioritario durante a beta",
    ],
  },
  {
    name: "Scale",
    description:
      "Para operacoes multi-canal que exigem governanca, volume e visibilidade executiva desde cedo.",
    prices: { monthly: 99, yearly: 828, lifetime: 2490 },
    note: "Para agencias, marketing ops e times com varios squads.",
    cta: "Falar com o time",
    featured: false,
    features: [
      "Tudo do Growth",
      "Permissoes por equipe",
      "Mais automacoes e alertas",
      "Camada extra de seguranca",
      "Onboarding guiado no pre-launch",
    ],
  },
];

function formatPrice(price: number) {
  if (price === 0) return "Gratis";
  return `R$ ${price}`;
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Mensal, anual e vitalicio"
          highlight="juntos na mesma comparacao."
          description="O bloco abaixo mostra todos os formatos de assinatura no mesmo contexto. O anual fica destacado como melhor valor com economia explicita, sem esconder o lifetime e sem fragmentar a decisao."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {priceModes.map((mode) => (
            <div
              key={mode.key}
              className={cn(
                "rounded-full border px-4 py-2 text-sm text-white/70",
                mode.key === "yearly"
                  ? "border-brand-success/25 bg-brand-success/12"
                  : "border-white/10 bg-white/6"
              )}
            >
              <span className="font-medium text-white">{mode.label}</span>{" "}
              {mode.key === "yearly" ? "• best value" : null}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-5 xl:grid-cols-3"
        >
          {plans.map((plan, index) => {
            const save =
              plan.prices.monthly > 0
                ? Math.round(
                    (1 - plan.prices.yearly / (plan.prices.monthly * 12)) * 100
                  )
                : 0;

            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                transition={{ duration: 0.55, ease, delay: index * 0.05 }}
              >
                <Card
                  className={cn(
                    "h-full rounded-[30px] transition duration-300 hover:-translate-y-1",
                    plan.featured && "spotlight-border aurora-panel shadow-brand"
                  )}
                >
                  <CardContent className="flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {plan.name}
                        </div>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">
                          {plan.description}
                        </p>
                      </div>
                      {plan.featured ? (
                        <Badge variant="default">
                          <Sparkles className="h-3.5 w-3.5" />
                          Best value
                        </Badge>
                      ) : null}
                    </div>

                    <p className="mt-5 text-sm leading-6 text-white/56">
                      {plan.note}
                    </p>

                    <div className="mt-8 grid gap-3">
                      {priceModes.map((mode) => (
                        <div
                          key={mode.key}
                          className={cn(
                            "rounded-[24px] border px-4 py-4",
                            mode.key === "yearly"
                              ? "border-brand-success/26 bg-brand-success/10"
                              : "border-white/8 bg-white/5"
                          )}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="text-xs uppercase tracking-[0.2em] text-white/42">
                              {mode.label}
                            </div>
                            {mode.key === "yearly" && save > 0 ? (
                              <Badge variant="success">Save {save}%</Badge>
                            ) : null}
                          </div>
                          <div className="mt-3 flex flex-wrap items-end gap-2">
                            <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                              {formatPrice(plan.prices[mode.key])}
                            </div>
                            {plan.prices[mode.key] > 0 ? (
                              <div className="pb-1 text-sm text-white/48">
                                {mode.suffix}
                              </div>
                            ) : null}
                          </div>
                          {mode.key === "yearly" && plan.prices.yearly > 0 ? (
                            <p className="mt-2 text-sm text-white/58">
                              Equivale a R$ {Math.round(plan.prices.yearly / 12)}/mes
                              na cobranca anual.
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex gap-3">
                          <div className="mt-0.5 rounded-full border border-brand-success/25 bg-brand-success/12 p-1 text-brand-success">
                            <Check className="h-3 w-3" />
                          </div>
                          <div className="text-sm leading-6 text-white/64">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-4">
                      <a
                        href="#downloads"
                        className={buttonVariants({
                          variant: plan.featured ? "default" : "secondary",
                          size: "lg",
                          className: "flex w-full",
                        })}
                      >
                        {plan.cta}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
