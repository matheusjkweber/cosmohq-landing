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
      "Entrada sem friccao para usar os sete recursos-base e experimentar o command center do CosmoHQ.",
    prices: { monthly: 0, yearly: 0, lifetime: 0 },
    note: "Ideal para testar o fluxo inteiro do produto antes do lancamento publico.",
    cta: "Entrar na waitlist",
    featured: false,
    features: [
      "Painel de Controle",
      "Gerenciamento de Campanhas",
      "Analise de Dados em Tempo Real",
      "Integracao com Redes Sociais",
      "Otimizacao de Conteudo",
      "Notificacoes e Alertas",
      "Seguranca e Autenticacao",
    ],
  },
  {
    name: "Growth",
    description:
      "Para times que querem entrar no pre-launch com mais capacidade e a melhor relacao custo ritmo.",
    prices: { monthly: 39, yearly: 348, lifetime: 899 },
    note: "Yearly vira a ancora principal porque entrega o melhor valor sem esconder as outras opcoes.",
    cta: "Reservar Growth",
    featured: true,
    features: [
      "Tudo do Free com limites expandidos",
      "Mais workspaces e campanhas simultaneas",
      "Relatorios avancados e visoes extras",
      "Prioridade em novas integracoes",
      "Acesso prioritario durante a beta",
    ],
  },
  {
    name: "Scale",
    description:
      "Para operacoes multi-canal, agencias e squads que precisam de governanca e volume desde o dia zero.",
    prices: { monthly: 99, yearly: 828, lifetime: 2490 },
    note: "Estrutura para quem quer operar varios fluxos sem simplificar demais a narrativa comercial.",
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
    <section
      id="pricing"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Mensal, anual e lifetime aparecem juntos"
          highlight="na mesma decisao."
          description="Nao existe pagina separada para cada opcao. O usuario compara tudo em um unico bloco e o yearly recebe destaque como best value com badge real de economia."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="glass-panel rounded-full px-4 py-3 text-sm text-white/72">
            Compare Monthly, Yearly e Lifetime no mesmo olhar
          </div>
          <Badge variant="success">Yearly = Best value</Badge>
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
                    "hover-lift h-full rounded-[30px]",
                    plan.featured && "editorial-panel spotlight-border shadow-brand"
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
