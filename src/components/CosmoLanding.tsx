"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { FormEvent } from "react";
import Balancer from "react-wrap-balancer";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ease, fadeIn, fadeUp, motion, stagger } from "@/components/motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  PanelsTopLeft,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const trustPoints = [
  "Apps, sites e sistemas sob medida",
  "Gestão de Instagram e conteúdo",
  "Campanhas de ads com leitura de dados",
];

const steps = [
  {
    index: "01",
    title: "Entender o problema",
    description:
      "Entramos no contexto do negócio, mapeamos gargalos e definimos onde o digital realmente precisa gerar resultado.",
    detail: "Menos briefing eterno. Mais clareza sobre prioridade, público e oportunidade.",
    icon: Compass,
  },
  {
    index: "02",
    title: "Construir a solução",
    description:
      "Desenhamos, produzimos e colocamos no ar apps, sites, sistemas e a operação de conteúdo com velocidade e critério.",
    detail: "Execução centralizada para o cliente não precisar coordenar cinco fornecedores.",
    icon: Workflow,
  },
  {
    index: "03",
    title: "Analisar e melhorar",
    description:
      "Acompanhamos dados, ajustamos campanhas, refinamos páginas e evoluímos o produto com base no que performa.",
    detail: "Decisão com inteligência contínua, sem achismo e sem vanity metrics.",
    icon: BarChart3,
  },
];

const services = [
  {
    title: "Apps e sistemas que resolvem operação",
    description:
      "Do MVP ao produto interno: construímos fluxos, painéis e ferramentas que tiram o caos do dia a dia.",
    eyebrow: "Produto digital",
    icon: MonitorSmartphone,
    accent: "from-[#3498db]/30 via-[#3498db]/10 to-transparent",
    points: ["Fluxos sob medida", "Integrações úteis", "Entrega pronta para uso"],
    featured: true,
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
  },
  {
    title: "Sites e landing pages que vendem melhor",
    description:
      "Posicionamento, copy, interface e performance pensados para transformar atenção em conversa comercial.",
    eyebrow: "Presença online",
    icon: PanelsTopLeft,
    accent: "from-[#f1c40f]/30 via-[#f1c40f]/10 to-transparent",
    points: ["Copy orientada a conversão", "SEO e estrutura", "Visual premium no detalhe"],
  },
  {
    title: "Gestão de Instagram sem conteúdo vazio",
    description:
      "Planejamento, criação, calendário e leitura de performance para a marca aparecer com constância e intenção.",
    eyebrow: "Social media",
    icon: MessageSquare,
    accent: "from-[#e74c3c]/30 via-[#e74c3c]/10 to-transparent",
    points: ["Linha editorial", "Produção recorrente", "Aprendizado a cada ciclo"],
  },
  {
    title: "Campanhas e ads com controle real",
    description:
      "Estruturamos campanhas, acompanhamos verba e ajustamos criativos e páginas para aumentar eficiência.",
    eyebrow: "Growth",
    icon: Megaphone,
    accent: "from-[#2ecc71]/30 via-[#2ecc71]/10 to-transparent",
    points: ["Meta, Google e canais sociais", "Leitura de CAC e conversão", "Ajuste rápido de rota"],
  },
  {
    title: "Painel de dados em tempo real",
    description:
      "Criamos visões claras de campanhas, funil e operação para o cliente entender o que está funcionando sem depender de planilhas soltas.",
    eyebrow: "Dados",
    icon: LayoutDashboard,
    accent: "from-white/20 via-white/8 to-transparent",
    points: ["Indicadores vivos", "Leitura simples", "Decisão mais rápida"],
  },
];

const cases = [
  {
    name: "CosmoFinanças",
    category: "Case de produto",
    description:
      "Transformamos organização financeira em uma experiência clara e elegante, provando na prática como um produto bem desenhado reduz fricção e aumenta recorrência.",
    outcome:
      "Hoje serve como referência para clientes que precisam de dashboards, experiência desktop e jornadas com dados visuais.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    points: ["Dashboard financeiro", "Fluxo denso, interface leve", "Produto que valida nossa metodologia"],
  },
  {
    name: "CosmoKit",
    category: "Case de operação",
    description:
      "Estruturamos um kit de componentes e fluxos reaproveitáveis para acelerar entregas sem cair em solução genérica.",
    outcome:
      "Virou base para vender sites, apps e painéis para clientes com mais velocidade e padrão visual consistente.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    points: ["Escala com qualidade", "Menos retrabalho", "Base reutilizável para novos projetos"],
  },
  {
    name: "Operação Social + Ads",
    category: "Case de crescimento",
    description:
      "Unimos conteúdo, criativos, campanha e leitura de dados para transformar presença social em pipeline de oportunidades.",
    outcome:
      "É o formato ideal para negócios que precisam vender melhor sem montar time interno completo.",
    image: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
    points: ["Calendário + mídia paga", "Ajuste por performance", "Contato direto com quem executa"],
  },
];

const gallery = [
  {
    title: "Painéis que explicam o negócio",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
  },
  {
    title: "Produto com acabamento de marca forte",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
  },
  {
    title: "Operação próxima do cliente",
    image: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
  },
  {
    title: "Campanhas guiadas por leitura de dados",
    image:
      "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Colaboração que tira projetos do papel",
    image: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
  },
  {
    title: "Leitura estratégica para a próxima decisão",
    image: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
  },
];

const differentiators = [
  "Entregamos rápido sem abrir mão de qualidade.",
  "Usamos dados para tomar decisões melhores.",
  "Comunicação direta, sem reuniões intermináveis.",
  "Somos clientes dos nossos próprios produtos.",
];

const pricing = [
  {
    name: "Mensal",
    label: "Operação contínua",
    description:
      "Ideal para marcas que precisam de evolução constante em site, social, campanhas e leitura de resultado.",
    badge: "Entrada flexível",
    featured: false,
    points: [
      "Ritmo mensal de produção e otimização",
      "Acompanhamento de campanhas e conteúdo",
      "Priorização quinzenal com contato direto",
    ],
  },
  {
    name: "Anual",
    label: "Melhor valor",
    description:
      "Parceria de crescimento para construir, operar e ajustar com profundidade durante o ano inteiro.",
    badge: "Economize 18%",
    featured: true,
    points: [
      "Tudo do plano mensal com cadência ampliada",
      "Roadmap estratégico de produto e marketing",
      "Janelas reservadas para novas entregas",
    ],
  },
  {
    name: "Lifetime",
    label: "Build once",
    description:
      "Para quem quer um ativo próprio e completo: site, app ou sistema entregue com autonomia total da operação.",
    badge: "Projeto proprietário",
    featured: false,
    points: [
      "Escopo fechado com entrega de alto impacto",
      "Base pronta para o time continuar usando",
      "Treinamento e documentação de handoff",
    ],
  },
];

const faqs = [
  {
    question: "A CosmoHQ é uma agência ou uma software house?",
    answer:
      "As duas coisas no ponto certo. A gente une estratégia de marketing, produção criativa e desenvolvimento para o cliente não precisar quebrar o projeto entre vários times.",
  },
  {
    question: "Vocês fazem só app e site ou cuidam do Instagram também?",
    answer:
      "Também cuidamos da presença social. Planejamos conteúdo, organizamos calendário, criamos peças e conectamos isso com campanhas e páginas para gerar resultado comercial.",
  },
  {
    question: "Como vocês evitam decisões no achismo?",
    answer:
      "Todo projeto nasce com hipótese clara, indicadores e rotina de leitura. A partir daí, campanhas, páginas e produto evoluem com base em dado e contexto de negócio.",
  },
  {
    question: "Consigo contratar só uma parte da operação?",
    answer:
      "Sim. Podemos entrar com um projeto fechado, uma parceria mensal ou uma estrutura anual mais completa. O formato depende do objetivo e da velocidade desejada.",
  },
  {
    question: "O app da CosmoHQ já foi lançado?",
    answer:
      "Ainda não. iOS e Android estão marcados como Coming Soon. Enquanto isso, a agência já opera entregas de apps, sites, conteúdo e ads para os clientes.",
  },
];

function SectionIntro({
  badge,
  title,
  description,
  align = "left",
}: {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease }}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <Badge variant="secondary" className="mb-5">
        {badge}
      </Badge>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        <Balancer>{title}</Balancer>
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
        <Balancer>{description}</Balancer>
      </p>
    </motion.div>
  );
}

function handleBriefingSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const goal = String(formData.get("goal") ?? "").trim();
  const subject = encodeURIComponent(`Briefing CosmoHQ - ${name || "Novo lead"}`);
  const body = encodeURIComponent(
    [
      `Nome: ${name || "-"}`,
      `Tipo de projeto: ${projectType || "-"}`,
      `Objetivo: ${goal || "-"}`,
    ].join("\n"),
  );

  window.location.href = `mailto:contato@cosmohq.app?subject=${subject}&body=${body}`;
}

export default function CosmoLanding() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[820px] bg-[radial-gradient(circle_at_top,rgba(52,152,219,0.24),transparent_38%),radial-gradient(circle_at_78%_10%,rgba(241,196,15,0.16),transparent_18%),radial-gradient(circle_at_20%_20%,rgba(231,76,60,0.14),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[-120px] h-[640px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] opacity-30 blur-3xl" />

      <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#121719]/78 px-5 py-3 shadow-[0_16px_54px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3498db,#e74c3c)] text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(52,152,219,0.9)]">
              C
            </span>
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-white">
                COSMOHQ
              </div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Agência digital
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/65 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121719]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "hidden md:inline-flex",
            })}
          >
            Fale com a gente
            <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="section-shell noise-overlay relative px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl pt-8 md:pt-14"
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.7, ease }}>
                <Badge className="mb-6 bg-white/8 text-white" variant="secondary">
                  <Sparkles className="size-3.5" />
                  estratégia, execução e dados no mesmo time
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.8, ease }}
                className="max-w-4xl text-[2.9rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-[4.7rem] lg:text-[5.5rem]"
              >
                <Balancer>Sua ideia no digital. Do jeito certo.</Balancer>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.8, ease }}
                className="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg"
              >
                <Balancer>
                  A CosmoHQ constrói apps, sites e sistemas, cuida das redes
                  sociais e opera campanhas com leitura de dados para cada
                  decisão gerar impacto real no negócio.
                </Balancer>
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8, ease }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#contato"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "ambient-glow",
                  })}
                >
                  Fale com a gente
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#servicos"
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
                transition={{ duration: 0.8, ease }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="surface-blend rounded-full border border-white/10 px-4 py-2 text-sm text-white/74"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative lg:min-h-[720px]"
            >
              <motion.div
                variants={fadeIn}
                transition={{ duration: 1.2, ease }}
                className="hero-orbit absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              />

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.85, ease }}
                className="editorial-panel ring-gradient ambient-glow relative ml-auto max-w-[580px] overflow-hidden rounded-[36px] p-4"
              >
                <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
                    <Image
                      src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png"
                      alt="Painel do produto CosmoHQ em desktop"
                      width={1280}
                      height={900}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
                      <Image
                        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png"
                        alt="Interface de produto construído pela CosmoHQ"
                        width={960}
                        height={700}
                        className="h-[240px] w-full object-cover md:h-[260px]"
                      />
                    </div>
                    <Card className="rounded-[28px] border-white/12 bg-[#111618]/80">
                      <CardContent className="space-y-5 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                              como pensamos
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                              Dados antes de opinião.
                            </h3>
                          </div>
                          <Target className="mt-1 size-5 text-brand-secondary" />
                        </div>
                        <div className="space-y-3">
                          {[
                            "Painéis para leitura de campanhas e conversão",
                            "Ajustes rápidos em criativo, produto e página",
                            "Mesma equipe cuidando de estratégia e execução",
                          ].map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 text-sm leading-6 text-white/70"
                            >
                              <Check className="mt-1 size-4 text-brand-success" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.85, ease, delay: 0.12 }}
                className="glass-panel absolute -bottom-5 left-0 hidden max-w-[280px] rounded-[28px] p-5 lg:block"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                      operação integrada
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Produto + conteúdo + mídia
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 text-brand-primary" />
                </div>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  A mesma lógica que usamos nos nossos produtos orienta o que
                  entregamos para os clientes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="processo" className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              badge="Como funciona"
              title="Três etapas simples. Uma operação inteira por trás."
              description="A CosmoHQ entra para clarear o problema, executar a solução e ajustar continuamente com dados. O cliente ganha velocidade sem perder direção."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-12 grid gap-6 lg:grid-cols-3"
            >
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.index}
                    variants={fadeUp}
                    transition={{ duration: 0.75, ease }}
                  >
                    <Card className="spotlight-border h-full rounded-[32px] border-white/10 bg-[#14191b]/84">
                      <CardContent className="flex h-full flex-col gap-6 p-7">
                        <div className="flex items-center justify-between">
                          <span className="text-5xl font-semibold tracking-[-0.08em] text-white/14">
                            {step.index}
                          </span>
                          <div className="flex size-12 items-center justify-center rounded-2xl bg-white/6">
                            <Icon className="size-5 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                            {step.title}
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-white/68">
                            {step.description}
                          </p>
                        </div>
                        <p className="mt-auto border-t border-white/8 pt-4 text-sm leading-6 text-white/52">
                          {step.detail}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              badge="O que fazemos"
              title="Presença online, produto digital e aquisição trabalhando juntos."
              description="Em vez de vender peças soltas, montamos uma engrenagem. Cada entrega conversa com a próxima: o site melhora a campanha, a campanha alimenta o painel, o painel orienta o próximo ajuste."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isWide = service.featured;

                return (
                  <motion.div
                    key={service.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.22 }}
                    variants={fadeUp}
                    transition={{ duration: 0.78, ease, delay: index * 0.05 }}
                    className={cn(
                      "lg:col-span-4",
                      isWide && "lg:col-span-8 lg:row-span-2",
                    )}
                  >
                    <Card className="group relative h-full overflow-hidden rounded-[34px] border-white/10 bg-[#121719]/88 transition duration-500 hover:-translate-y-1 hover:border-white/18">
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-100 transition duration-500 group-hover:scale-105",
                          service.accent,
                        )}
                      />
                      <CardContent className="relative flex h-full flex-col p-7">
                        <div className="flex items-center justify-between gap-4">
                          <Badge variant="secondary">{service.eyebrow}</Badge>
                          <div className="flex size-11 items-center justify-center rounded-2xl bg-white/7">
                            <Icon className="size-5 text-white" />
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3 className="max-w-lg text-2xl font-semibold tracking-[-0.04em] text-white md:text-[2rem]">
                            {service.title}
                          </h3>
                          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                            {service.description}
                          </p>
                        </div>

                        {service.image ? (
                          <div className="mt-8 overflow-hidden rounded-[26px] border border-white/10 bg-black/20">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={1400}
                              height={900}
                              className="h-[320px] w-full object-cover object-left-top transition duration-700 group-hover:scale-[1.03]"
                            />
                          </div>
                        ) : (
                          <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {service.points.map((point) => (
                              <div
                                key={point}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/70"
                              >
                                {point}
                              </div>
                            ))}
                          </div>
                        )}

                        {service.image ? (
                          <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {service.points.map((point) => (
                              <div
                                key={point}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/70"
                              >
                                {point}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cases" className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              badge="Portfólio"
              title="Nossos próprios produtos viraram prova concreta do que entregamos."
              description="CosmoFinanças e CosmoKit não aparecem aqui como experimento de tecnologia. Eles aparecem como cases que mostram contexto, uso e o padrão de solução que reaplicamos em negócios de clientes."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {cases.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease, delay: index * 0.08 }}
                >
                  <Card className="group h-full overflow-hidden rounded-[34px] border-white/10 bg-[#121719]/88 transition duration-500 hover:-translate-y-1 hover:border-white/18">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1200}
                        height={900}
                        className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1315] via-transparent to-transparent" />
                    </div>
                    <CardContent className="space-y-5 p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                            {item.category}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                            {item.name}
                          </h3>
                        </div>
                        <ArrowUpRight className="size-5 text-white/50" />
                      </div>
                      <p className="text-sm leading-7 text-white/70">
                        {item.description}
                      </p>
                      <p className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm leading-6 text-white/58">
                        {item.outcome}
                      </p>
                      <div className="grid gap-3">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-white/70"
                          >
                            <Check className="mt-1 size-4 text-brand-success" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              badge="Galeria"
              title="Interfaces, operação e contexto de uso na mesma narrativa."
              description="As imagens abaixo reforçam o tipo de presença que a CosmoHQ constrói: produto bem resolvido, execução próxima e leitura visual forte."
              align="center"
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => (
                <motion.figure
                  key={`${item.title}-${index}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.75, ease, delay: index * 0.04 }}
                  className={cn(
                    "group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#121719]/88",
                    index % 3 === 0 && "lg:translate-y-8",
                    index % 3 === 2 && "lg:-translate-y-6",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1400}
                    height={1000}
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1315] via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                      visual da operação
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionIntro
                badge="Diferenciais"
                title="A vantagem está na forma como a CosmoHQ opera."
                description="Não prometemos volume vazio. Prometemos clareza, execução e aprendizado contínuo. É isso que encurta o caminho entre ideia e resultado."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ duration: 0.75, ease, delay: index * 0.05 }}
                  >
                    <Card className="rounded-[30px] border-white/10 bg-[#121719]/88">
                      <CardContent className="flex h-full gap-4 p-6">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/6">
                          {index === 0 ? (
                            <Clock3 className="size-5 text-brand-primary" />
                          ) : index === 1 ? (
                            <BarChart3 className="size-5 text-brand-secondary" />
                          ) : index === 2 ? (
                            <MessageSquare className="size-5 text-brand-accent" />
                          ) : (
                            <Sparkles className="size-5 text-brand-success" />
                          )}
                        </div>
                        <p className="text-base leading-7 text-white/74">{item}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              badge="Modelos de parceria"
              title="Mensal, anual e lifetime na mesma mesa."
              description="Cada formato atende um momento diferente do negócio. O anual é o melhor custo-benefício para quem quer construir, operar e otimizar sem recomeçar a cada trimestre."
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.78, ease, delay: index * 0.06 }}
                >
                  <Card
                    className={cn(
                      "relative h-full rounded-[34px] border-white/10 bg-[#121719]/88",
                      plan.featured &&
                        "ambient-glow border-brand-secondary/40 bg-[linear-gradient(180deg,rgba(241,196,15,0.14),rgba(18,23,25,0.92)_32%)]",
                    )}
                  >
                    <CardContent className="flex h-full flex-col p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                            {plan.name}
                          </p>
                          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                            {plan.label}
                          </h3>
                        </div>
                        <Badge
                          variant={plan.featured ? "default" : "secondary"}
                          className={cn(plan.featured && "bg-brand-secondary/18 text-brand-secondary")}
                        >
                          {plan.badge}
                        </Badge>
                      </div>

                      <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 px-5 py-5">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                          investimento
                        </p>
                        <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white">
                          Sob proposta
                        </p>
                        <p className="mt-2 text-sm text-white/55">
                          Definido pelo escopo, pela cadência e pela profundidade
                          da operação.
                        </p>
                      </div>

                      <p className="mt-6 text-sm leading-7 text-white/70">
                        {plan.description}
                      </p>

                      <div className="mt-6 grid gap-3">
                        {plan.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm leading-6 text-white/70"
                          >
                            <Check className="mt-1 size-4 shrink-0 text-brand-success" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#contato"
                        className={buttonVariants({
                          variant: plan.featured ? "default" : "secondary",
                          size: "lg",
                          className: "mt-8 w-full",
                        })}
                      >
                        Receber proposta
                        <ArrowRight className="size-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <SectionIntro
                badge="Downloads"
                title="Nossos apps ainda estão chegando às lojas."
                description="iOS e Android seguem como Coming Soon, mas a CosmoHQ já entrega a mesma qualidade de produto e presença digital em projetos para clientes agora."
              />

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "iOS",
                    status: "Coming Soon",
                    copy: "App em preparação para lançamento. Entre em contato para acompanhar o acesso antecipado.",
                  },
                  {
                    title: "Android",
                    status: "Coming Soon",
                    copy: "Versão Android prevista para a mesma fase de lançamento do iOS.",
                  },
                  {
                    title: "Web e operação",
                    status: "Disponível agora",
                    copy: "Sites, landing pages, sistemas, gestão social e campanhas já podem entrar em produção.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.75, ease, delay: index * 0.06 }}
                  >
                    <Card className="h-full rounded-[30px] border-white/10 bg-[#121719]/88">
                      <CardContent className="flex h-full flex-col p-6">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                            {item.title}
                          </p>
                          <Badge
                            variant={index === 2 ? "success" : "secondary"}
                            className="text-[10px]"
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-white/66">
                          {item.copy}
                        </p>
                        <a
                          href="#contato"
                          className={buttonVariants({
                            variant: index === 2 ? "default" : "outline",
                            size: "default",
                            className: "mt-6 w-full",
                          })}
                        >
                          {index === 2 ? "Iniciar projeto" : "Quero ser avisado"}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionIntro
              badge="FAQ"
              title="Perguntas frequentes antes de começar."
              description="Se a sua dúvida não estiver aqui, a conversa começa no briefing logo abaixo."
              align="center"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.8, ease }}
              className="mt-10"
            >
              <Accordion.Root type="single" collapsible className="space-y-4">
                {faqs.map((item) => (
                  <Accordion.Item
                    key={item.question}
                    value={item.question}
                    className="overflow-hidden rounded-[28px] border border-white/10 bg-[#121719]/88"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-white outline-none transition hover:bg-white/4 focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-inset">
                        <span>{item.question}</span>
                        <ChevronDown className="size-5 shrink-0 text-white/50 transition duration-300 group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-6 pb-6 text-sm leading-7 text-white/66 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      {item.answer}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          </div>
        </section>

        <section id="contato" className="section-shell px-4 pb-16 pt-8 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <Card className="noise-overlay overflow-hidden rounded-[38px] border-white/10 bg-[linear-gradient(135deg,rgba(52,152,219,0.18),rgba(18,23,25,0.96)_34%,rgba(231,76,60,0.16))]">
              <CardContent className="grid gap-10 p-7 md:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div>
                  <Badge variant="secondary" className="mb-5">
                    CTA final
                  </Badge>
                  <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    <Balancer>
                      Tem uma ideia, um negócio ou uma operação travada?
                    </Balancer>
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/72 md:text-base">
                    <Balancer>
                      Preencha o briefing rápido e abrimos a conversa com foco
                      no que precisa sair do papel primeiro.
                    </Balancer>
                  </p>
                  <div className="mt-8 grid gap-4 text-sm text-white/64">
                    {[
                      "Apps, sites e sistemas com padrão de produto premium",
                      "Instagram, campanhas e conteúdo com leitura de dados",
                      "Contato direto com quem pensa e quem executa",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="mt-1 size-4 text-brand-success" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <form
                  onSubmit={handleBriefingSubmit}
                  className="glass-panel-strong rounded-[32px] p-6 md:p-7"
                >
                  <div className="grid gap-5">
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-white/76">
                        Nome
                      </span>
                      <input
                        name="name"
                        required
                        placeholder="Seu nome"
                        className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-brand-primary/55 focus:bg-white/7"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-white/76">
                        Tipo de projeto
                      </span>
                      <input
                        name="projectType"
                        required
                        placeholder="App, site, gestão social, ads..."
                        className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-brand-primary/55 focus:bg-white/7"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-white/76">
                        Objetivo
                      </span>
                      <textarea
                        name="goal"
                        required
                        rows={5}
                        placeholder="O que precisa melhorar, lançar ou vender?"
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-brand-primary/55 focus:bg-white/7"
                      />
                    </label>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" size="lg" className="sm:flex-1">
                      Enviar briefing
                      <ArrowRight className="size-4" />
                    </Button>
                    <a
                      href="mailto:contato@cosmohq.app"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "lg",
                        className: "sm:flex-1",
                      })}
                    >
                      contato@cosmohq.app
                    </a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[30px] border border-white/10 bg-[#0f1416]/86 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/42">
              CosmoHQ
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
              Agência digital para quem precisa tirar ideia do campo da intenção
              e colocar produto, presença e campanha para rodar.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/56">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
