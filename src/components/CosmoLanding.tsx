"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { FormEvent } from "react";
import Balancer from "react-wrap-balancer";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  LayoutDashboard,
  Megaphone,
  Network,
  ShieldCheck,
  Sparkles,
  SplitSquareVertical,
  Target,
  Workflow,
} from "lucide-react";
import { motion, ease, fadeUp, stagger, staggerSlow } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Planos", href: "#planos" },
  { label: "IA & MCPs", href: "#ia-mcps" },
  { label: "FAQ", href: "#faq" },
];

const heroPills = [
  "Apps e sites",
  "Instagram e conteúdo",
  "Ads e campanhas",
  "Dados para decidir",
  "MCPs e automações",
];

const steps = [
  {
    id: "01",
    title: "Entender o problema",
    description:
      "Entramos no contexto do negócio, identificamos gargalos e traduzimos a meta comercial em uma rota clara de execução.",
    detail:
      "Menos briefing infinito. Mais foco em público, oferta, contexto e prazo realista.",
    icon: Target,
  },
  {
    id: "02",
    title: "Construir a solução",
    description:
      "Criamos apps, sites, sistemas e a presença social com linguagem de marca, velocidade e um nível alto de acabamento.",
    detail:
      "A execução acontece com o mesmo time cuidando de produto, conteúdo e crescimento.",
    icon: Workflow,
  },
  {
    id: "03",
    title: "Medir e melhorar",
    description:
      "Acompanhamos o que está acontecendo, aprendemos com os dados e ajustamos campanhas, páginas e conteúdo sem achismo.",
    detail:
      "O que performa sobe; o que atrasa a conversão sai de cena.",
    icon: BarChart3,
  },
];

const services = [
  {
    title: "Painel de controle para enxergar o negócio",
    description:
      "Uma visão clara de campanhas, conversões e operação para pequenas empresas tomarem decisões sem depender de planilhas soltas.",
    icon: LayoutDashboard,
    points: [
      "Métricas prioritárias em um lugar só",
      "Leitura rápida para reuniões curtas",
      "Leitura pronta para time enxuto",
    ],
  },
  {
    title: "Gerenciamento de campanhas em múltiplas plataformas",
    description:
      "Planejamento, criação, acompanhamento e otimização de campanhas para negócios que precisam vender sem desperdiçar verba.",
    icon: Megaphone,
    points: [
      "Ads com leitura diária",
      "Ajustes em criativo e verba",
      "Controle de CAC e conversão",
    ],
  },
  {
    title: "Análise de dados em tempo real",
    description:
      "Monitoramento contínuo do desempenho para responder rápido ao que o mercado está dizendo, sem esperar o fim do mês.",
    icon: BarChart3,
    points: [
      "Decisões orientadas por dados",
      "Alertas para desvios e oportunidades",
      "Relatórios claros e sem ruído",
    ],
  },
  {
    title: "Integração com redes sociais",
    description:
      "A presença social vira operação de verdade: publicação, organização de calendário e integração com o resto da jornada de vendas.",
    icon: Network,
    points: [
      "Fluxo mais rápido para postar e ajustar",
      "Conteúdo conectado com campanha",
      "Instagram com intenção comercial",
    ],
  },
  {
    title: "Otimização de conteúdo",
    description:
      "Ajudamos a criar e lapidar conteúdo para diferentes formatos e plataformas, sem perder a consistência da marca.",
    icon: SplitSquareVertical,
    points: [
      "Copy e direção visual alinhadas",
      "Menos improviso, mais consistência",
      "Peças pensadas para conversão",
    ],
  },
  {
    title: "Segurança, alertas e automação",
    description:
      "Para pequenos negócios que precisam de confiabilidade, configuramos alertas, permissões e rotinas que ajudam a operação a continuar fluindo.",
    icon: ShieldCheck,
    points: [
      "Segurança e autenticação",
      "Notificações de eventos importantes",
      "Automação para reduzir atrito",
    ],
  },
];

const cases = [
  {
    name: "CosmoFinanças",
    label: "Case interno",
    problem:
      "Como deixar decisões financeiras e organização de dados visuais sem transformar tudo em planilha complexa?",
    result:
      "Criamos uma experiência clara, visual e objetiva que prova como interface e dados podem trabalhar juntos.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    bullets: ["Dashboard e leitura rápida", "Produto usado como referência", "Acabamento premium"],
  },
  {
    name: "CosmoKit",
    label: "Case de escala",
    problem:
      "Como acelerar a entrega de apps e sites sem cair em layout genérico ou retrabalho constante?",
    result:
      "Estruturamos uma base de componentes e padrões visuais para ganhar velocidade com consistência.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    bullets: ["Sistema reaproveitável", "Menos ruído operacional", "Entrega com padrão"],
  },
  {
    name: "Social + Ads",
    label: "Case de aquisição",
    problem:
      "Como transformar Instagram e mídia paga em um fluxo consistente de vendas para clientes?",
    result:
      "Conectamos conteúdo, campanha e leitura de dados para gerar uma operação que vende com mais previsibilidade.",
    image:
      "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    bullets: ["Conteúdo e mídia no mesmo plano", "Ajustes rápidos por performance", "Comunicação direta"],
  },
];

const gallery = [
  {
    title: "CosmoFinanças em desktop",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
    span: "md:col-span-7",
  },
  {
    title: "CosmoKit como base de aceleração",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png",
    span: "md:col-span-5",
  },
  {
    title: "Time alinhando execução",
    image:
      "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    span: "md:col-span-4",
  },
  {
    title: "Apresentação de dados com foco em decisão",
    image:
      "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
    span: "md:col-span-4",
  },
  {
    title: "Ritmo visual de produto",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/7e/d6/067ed6f7-7b2c-b674-37e7-72ab6598aaf6/screenshot_1.png/2560x1600bb.png",
    span: "md:col-span-4",
  },
  {
    title: "Execução com contexto",
    image:
      "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-12",
  },
];

const pricing = [
  {
    name: "Mensal",
    tagline: "Operação contínua",
    description:
      "Perfeito para marcas que precisam de presença ativa, campanhas em andamento e evolução mensal da operação.",
    badge: "Flexível",
    featured: false,
    points: [
      "Produção e otimização recorrentes",
      "Acompanhamento de dados e campanhas",
      "Prioridades alinhadas com o negócio",
    ],
  },
  {
    name: "Anual",
    tagline: "Melhor valor",
    description:
      "O formato mais inteligente para crescer com profundidade: estratégia, execução e aprendizado durante o ano inteiro.",
    badge: "Save 18%",
    featured: true,
    points: [
      "Tudo do plano mensal com cadência ampliada",
      "Roadmap de produto e marketing",
      "Acesso prioritário para novas entregas",
    ],
  },
  {
    name: "Lifetime",
    tagline: "Ativo próprio",
    description:
      "Indicado para quem quer sair com um asset sólido: site, app ou sistema pronto para ser usado pela operação.",
    badge: "Projeto fechado",
    featured: false,
    points: [
      "Escopo fechado e documentação",
      "Treinamento e handoff",
      "Base para operação independente",
    ],
  },
];

const aiCapabilities = [
  {
    title: "MCPs sob medida",
    description:
      "Conectamos modelos, APIs e dados internos para transformar o chat em uma interface de trabalho útil.",
    icon: Bot,
  },
  {
    title: "Copilots internos",
    description:
      "Assistentes para times operacionais, comerciais e de conteúdo trabalharem com mais contexto e velocidade.",
    icon: Workflow,
  },
  {
    title: "Automações com IA",
    description:
      "Fluxos que resumem, classificam, respondem e acionam tarefas sem depender de etapas repetitivas.",
    icon: Sparkles,
  },
  {
    title: "Produtos com IA",
    description:
      "Dashboards, buscas semânticas e experiências onde a IA entra para resolver um ponto específico do produto.",
    icon: BarChart3,
  },
];

const mcpPromo = {
  name: "CosmoFinanças MCP",
  label: "Produto da casa",
  title: "Um MCP para trazer contexto financeiro para a conversa.",
  description:
    "Projetado a partir do CosmoFinanças, este MCP ajuda a consultar visão geral, indicadores e sinais de negócio sem sair do fluxo de trabalho.",
  image:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png",
  bullets: [
    "Consulta rápida com linguagem natural",
    "Base para copilots e dashboards",
    "Pensado para decisões mais rápidas",
  ],
};

const faqs = [
  {
    question: "A CosmoHQ é uma agência ou uma software house?",
    answer:
      "A CosmoHQ trabalha como uma agência digital que une criação, desenvolvimento e growth. O cliente não precisa juntar vários fornecedores para sair do zero até a operação rodando.",
  },
  {
    question: "Vocês cuidam só de app e site?",
    answer:
      "Não. Além de apps e sites, também gerenciamos Instagram, conteúdo, campanhas de ads e análise de dados para que a presença online realmente venda.",
  },
  {
    question: "Como vocês evitam decisões no achismo?",
    answer:
      "Todo projeto é acompanhado com indicadores claros. Nós medimos o que importa, lemos os dados e fazemos ajustes contínuos na rota de execução.",
  },
  {
    question: "O que a CosmoHQ constrói com AI?",
    answer:
      "Construímos MCPs, copilots internos, automações e produtos com IA para negócios que precisam ganhar velocidade sem perder contexto.",
  },
  {
    question: "Posso contratar só uma parte da operação?",
    answer:
      "Sim. Podemos atuar em um projeto fechado, em uma operação mensal ou em uma parceria anual. O formato depende do objetivo e do momento do negócio.",
  },
  {
    question: "Vocês trabalham com clientes que ainda não têm uma marca forte?",
    answer:
      "Sim. A ideia pode estar no começo. A nossa função é transformar intenção em presença digital, produto e movimento comercial.",
  },
  {
    question: "Vocês fazem MCPs para produtos específicos?",
    answer:
      "Sim. O CosmoFinanças MCP é o exemplo da casa: um produto pensado para levar contexto financeiro para dentro da rotina de trabalho e abrir espaço para copilots mais úteis.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease }}
      className={cn("max-w-3xl", centered ? "mx-auto text-center" : "text-left")}
    >
      <Badge variant="secondary" className={cn("mb-5 w-fit", centered && "mx-auto")}>
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-[2rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[2.8rem] lg:text-[4rem]">
        <Balancer>{title}</Balancer>
      </h2>
      <p className="mt-5 text-pretty text-base leading-7 text-white/68 sm:text-lg">
        <Balancer>{description}</Balancer>
      </p>
    </motion.div>
  );
}

function submitBriefing(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const objective = String(formData.get("objective") ?? "").trim();

  const subject = encodeURIComponent(`Novo briefing CosmoHQ - ${name || "Contato"}`);
  const body = encodeURIComponent(
    [`Nome: ${name || "-"}`, `Tipo de projeto: ${projectType || "-"}`, `Objetivo: ${objective || "-"}`].join(
      "\n",
    ),
  );

  window.location.href = `mailto:contato@cosmohq.org?subject=${subject}&body=${body}`;
}

export default function CosmoLanding() {
  return (
    <div id="top" className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,152,219,0.2),transparent_32%),radial-gradient(circle_at_80%_12%,rgba(241,196,15,0.14),transparent_18%),radial-gradient(circle_at_15%_18%,rgba(231,76,60,0.12),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%)]" />

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#121719]/80 px-5 py-3 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3498db,#5abaf5,#f1c40f)] text-sm font-semibold text-white shadow-[0_14px_40px_-16px_rgba(52,152,219,0.9)]">
              C
            </span>
            <div>
              <div className="text-sm font-semibold tracking-[0.24em] text-white">
                COSMOHQ
              </div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/46">
                Agência digital
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-white/68 transition hover:bg-white/6 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#ia-mcps"
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
                className: "hidden md:inline-flex",
              })}
            >
              Ver IA & MCPs
            </a>
            <a href="#contato" className={buttonVariants({ size: "sm" })}>
              Fale com a gente
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section-shell noise-overlay relative px-4 pb-18 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center">
            <motion.div
              className="relative z-10"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Badge variant="secondary" className="mb-6 bg-white/6">
                  <Sparkles className="size-3.5" />
                  Estratégia, execução e dados no mesmo time
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-[2.95rem] font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-[4.2rem] lg:text-[5.7rem]"
              >
                <Balancer>Sua ideia no digital. Do jeito certo.</Balancer>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/72 sm:text-lg"
              >
                <Balancer>
                  A CosmoHQ é uma agência digital para pequenas empresas.
                  Construímos apps, sites e sistemas, cuidamos do Instagram e
                  operamos campanhas em múltiplas plataformas. Tudo com dados
                  para orientar cada decisão.
                </Balancer>
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#contato"
                  className={buttonVariants({
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

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
                {heroPills.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/76 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {[
                  "Pequenas empresas",
                  "Social com objetivo comercial",
                  "Campanhas guiadas por dados",
                ].map((item) => (
                  <Card key={item} className="hover-lift rounded-[26px] border-white/10">
                    <CardContent className="p-5">
                      <div className="text-base font-semibold tracking-[-0.03em] text-white">
                        {item}
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/42">
                        Operação integrada
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease }}
              className="relative"
            >
              <div className="hero-orbit absolute -left-20 top-8 h-60 w-60 rounded-full" />
              <div className="hero-orbit absolute -right-12 bottom-0 h-64 w-64 rounded-full opacity-70" />

              <div className="editorial-panel ring-gradient relative overflow-hidden rounded-[40px] p-4 sm:p-5">
                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/20">
                    <Image
                      src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/41/2d/da412de0-3b03-b6f8-2bf4-5216ea3b5340/screenshot_1.png/2560x1599bb.png"
                      alt="CosmoFinanças em desktop"
                      width={1600}
                      height={1000}
                      priority
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="grid gap-4">
                    <div className="surface-blend overflow-hidden rounded-[30px] border border-white/10 p-3">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                        <Image
                          src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/26/c7/6226c732-53bc-197e-fae0-59fa01734604/screenshot_2.png/2560x1600bb.png"
                          alt="CosmoKit como case de escala"
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="(min-width: 1024px) 420px, 100vw"
                        />
                      </div>
                    </div>

                    <Card className="rounded-[30px] border-white/10 bg-[#101518]/90">
                      <CardContent className="space-y-5 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.22em] text-white/44">
                              Como trabalhamos
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                              Dados antes de opinião.
                            </h3>
                          </div>
                          <BadgeCheck className="mt-1 size-5 text-brand-success" />
                        </div>

                        <div className="space-y-3">
                          {[
                            "A mesma equipe cuida de estratégia e execução",
                            "Ajustes rápidos com base no que está funcionando",
                            "Transparência para o cliente acompanhar o caminho",
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 text-sm leading-6 text-white/72"
                            >
                              <Check className="mt-1 size-4 text-brand-success" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="glass-panel rounded-[30px] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-white/42">
                          IA aplicada
                        </div>
                        <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                          MCPs, copilots e automações que resolvem trabalho real.
                        </div>
                      </div>
                      <Bot className="size-5 text-brand-primary" />
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        "MCPs com dados e contexto",
                        "Assistentes para operação interna",
                        "Automação de conteúdo e suporte",
                        "Produtos com IA para times enxutos",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[22px] border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/72"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="glass-panel rounded-[30px] p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/42">
                        Foco
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                        Converter atenção em venda.
                      </div>
                    </div>
                    <div className="glass-panel rounded-[30px] p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/42">
                        Atuação
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                        Produto, presença e performance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="como-funciona" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Como funciona"
              title="Um processo simples, com dados em cada etapa."
              description="A operação da CosmoHQ começa entendendo o problema, passa pela construção da solução e termina com análise contínua para melhorar o que importa."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mt-14 grid gap-4 lg:grid-cols-3"
            >
              {steps.map((step, index) => (
                <motion.div key={step.id} variants={fadeUp} transition={{ duration: 0.55, ease, delay: index * 0.05 }}>
                  <Card className="spotlight-border group hover-lift h-full rounded-[30px]">
                    <CardContent className="flex h-full flex-col gap-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/42">
                          {step.id}
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-brand-primary transition duration-300 group-hover:scale-[1.03]">
                          <step.icon className="size-5" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col">
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-white/66">
                          {step.description}
                        </p>
                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white/70">
                          {step.detail}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease, delay: 0.1 }}
              className="mt-8 rounded-[30px] border border-white/10 bg-white/5 p-5 md:p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-white/42">
                    O diferencial
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                    Sem achismo. Sem reuniões intermináveis. Sem equipe dispersa.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Velocidade", "Dados", "Comunicação direta", "Ownership"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/66"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Serviços"
              title="Uma operação de crescimento feita para pequenas empresas."
              description="A CosmoHQ atua como parceira de execução para negócios que precisam vender melhor com apps, sites, social e ads integrados, sem estruturas grandes demais."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={staggerSlow}
              className="mt-14 grid gap-4 lg:grid-cols-2"
            >
              {services.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="h-full"
                >
                  <Card className="spotlight-border hover-lift h-full rounded-[30px]">
                    <CardContent className="flex h-full flex-col gap-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex w-fit rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/54">
                          {item.icon === LayoutDashboard
                            ? "Produto"
                            : item.icon === Megaphone
                              ? "Growth"
                              : item.icon === BarChart3
                                ? "Dados"
                                : item.icon === Network
                                  ? "Social"
                                  : item.icon === SplitSquareVertical
                                    ? "Conteúdo"
                                    : "Operação"}
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-brand-primary">
                          <item.icon className="size-5" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-white/66">
                          {item.description}
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/72"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="cases" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Portfólio"
              title="Casos reais da CosmoHQ, apresentados pelo problema que resolvem."
              description="Os cases abaixo mostram contexto, utilidade e o tipo de resultado que a agência entrega."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={stagger}
              className="mt-14 grid gap-4 lg:grid-cols-3"
            >
              {cases.map((item, index) => (
                <motion.div key={item.name} variants={fadeUp} transition={{ duration: 0.55, ease, delay: index * 0.05 }}>
                  <Card className="spotlight-border hover-lift h-full overflow-hidden rounded-[30px]">
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <CardContent className="space-y-5">
                      <div className="flex items-center justify-between gap-4">
                        <Badge variant="secondary">{item.label}</Badge>
                        <ArrowUpRight className="size-4 text-white/40" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {item.name}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/66">
                          <span className="text-white/82">Problema:</span> {item.problem}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/66">
                          <span className="text-white/82">Resultado:</span> {item.result}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.bullets.map((bullet) => (
                          <span
                            key={bullet}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/68"
                          >
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="galeria" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Imagens"
              title="Peças e interfaces usadas no trabalho da CosmoHQ."
              description="CosmoKit e CosmoFinanças aparecem aqui como referências de produto e operação."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerSlow}
              className="mt-14 grid gap-4 md:grid-cols-12"
            >
              {gallery.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease, delay: index * 0.04 }}
                  className={cn(item.span)}
                >
                  <Card className="spotlight-border group overflow-hidden rounded-[30px]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <CardContent className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-white/82">{item.title}</p>
                      <ArrowUpRight className="size-4 text-white/40 transition group-hover:text-white" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="planos" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Pricing"
              title="Três formas de trabalhar, uma operação só."
              description="Mensal, anual e lifetime aparecem juntos para facilitar a leitura. O anual é o melhor valor para quem quer continuidade com profundidade."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.24 }}
              variants={stagger}
              className="mt-14 grid gap-4 lg:grid-cols-3"
            >
              {pricing.map((tier, index) => (
                <motion.div key={tier.name} variants={fadeUp} transition={{ duration: 0.55, ease, delay: index * 0.04 }}>
                  <Card
                    className={cn(
                      "hover-lift h-full rounded-[32px]",
                      tier.featured
                        ? "ring-gradient border-brand-primary/30 bg-[linear-gradient(180deg,rgba(52,152,219,0.18),rgba(255,255,255,0.04))] shadow-[0_36px_100px_-56px_rgba(52,152,219,0.9)]"
                        : "border-white/10",
                    )}
                  >
                    <CardContent className="flex h-full flex-col gap-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge variant={tier.featured ? "default" : "secondary"} className="mb-4">
                            {tier.badge}
                          </Badge>
                          <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                            {tier.name}
                          </h3>
                          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/42">
                            {tier.tagline}
                          </p>
                        </div>
                        {tier.featured ? (
                          <div className="rounded-full border border-brand-secondary/30 bg-brand-secondary/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                            Best value
                          </div>
                        ) : null}
                      </div>

                      <p className="text-base leading-7 text-white/66">{tier.description}</p>

                      <div className="space-y-3">
                        {tier.points.map((point) => (
                          <div key={point} className="flex items-start gap-3 text-sm leading-6 text-white/72">
                            <Check className="mt-1 size-4 text-brand-success" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-3">
                        <a
                          href="#contato"
                          className={buttonVariants({
                            variant: tier.featured ? "default" : "secondary",
                            size: "lg",
                            className: "w-full",
                          })}
                        >
                          Pedir proposta
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="ia-mcps" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="IA & MCPs"
              title="IA aplicada sem teatro."
              description="Construímos MCPs, copilots, automações e produtos com IA quando isso ajuda o negócio."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-14 grid gap-4 lg:grid-cols-[1.06fr_0.94fr]"
            >
              <motion.div variants={fadeUp}>
                <Card className="editorial-panel h-full rounded-[32px]">
                  <CardContent className="flex h-full flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge variant="accent" className="mb-4">
                          IA aplicada ao produto
                        </Badge>
                        <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                          O que a CosmoHQ faz com IA.
                        </h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-white/66">
                          Usamos IA onde ela reduz trabalho e melhora resposta:
                          no produto, no atendimento, na operação e na leitura de dados.
                        </p>
                      </div>
                      <Bot className="size-6 text-brand-secondary" />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {aiCapabilities.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-brand-primary">
                              <item.icon className="size-5" />
                            </div>
                            <h4 className="text-base font-semibold tracking-[-0.03em] text-white">
                              {item.title}
                            </h4>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-white/66">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-black/12 p-5 text-sm leading-7 text-white/68">
                      Também construímos produtos com IA para operações internas,
                      suporte, vendas, conteúdo e análise. Se a IA reduz atrito ou
                      acelera decisão, ela entra no fluxo.
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="hover-lift h-full overflow-hidden rounded-[32px] border-white/10">
                  <CardContent className="flex h-full flex-col gap-6 p-0">
                    <div className="relative overflow-hidden border-b border-white/10">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(52,152,219,0.24),rgba(13,15,16,0.12))]" />
                      <Image
                        src={mcpPromo.image}
                        alt="CosmoFinanças MCP em uso"
                        width={2560}
                        height={1599}
                        className="h-full w-full object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge variant="secondary" className="mb-4">
                            {mcpPromo.label}
                          </Badge>
                          <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                            {mcpPromo.name}
                          </h3>
                        </div>
                        <Badge variant="accent">Novo</Badge>
                      </div>

                      <div>
                        <p className="text-xl font-semibold tracking-[-0.03em] text-white">
                          {mcpPromo.title}
                        </p>
                        <p className="mt-3 text-base leading-7 text-white/66">
                          {mcpPromo.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {mcpPromo.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 text-sm leading-6 text-white/72">
                            <BadgeCheck className="mt-1 size-4 text-brand-success" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#contato"
                        className={buttonVariants({
                          size: "lg",
                          className: "mt-auto w-full",
                        })}
                      >
                        Quero ver o MCP
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="faq" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Dúvidas comuns antes de começar."
            description="Respostas diretas para quem está avaliando a CosmoHQ."
          />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.24 }}
              variants={fadeUp}
              transition={{ duration: 0.55, ease }}
              className="mt-14"
            >
              <Accordion.Root type="single" collapsible defaultValue="item-0" className="space-y-4">
                {faqs.map((item, index) => (
                  <Accordion.Item
                    key={item.question}
                    value={`item-${index}`}
                    className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7">
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="min-w-12 justify-center">
                            {String(index + 1).padStart(2, "0")}
                          </Badge>
                          <div className="text-base font-medium leading-7 text-white sm:text-lg">
                            {item.question}
                          </div>
                        </div>
                        <ChevronDown className="size-5 shrink-0 text-white/48 transition duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand-primary" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <p className="px-5 pb-5 text-sm leading-7 text-white/66 md:px-7 md:text-base">
                        {item.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          </div>
        </section>

        <section id="contato" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="CTA final"
              title="Tem uma ideia ou um negócio para mover para o digital?"
              description="Converse com a CosmoHQ pelo WhatsApp ou envie um briefing curto com nome, tipo de projeto e objetivo."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-14 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <motion.div variants={fadeUp}>
                <Card className="editorial-panel h-full rounded-[32px]">
                  <CardContent className="flex h-full flex-col gap-6">
                    <div>
                      <Badge variant="success" className="mb-4">
                        Resposta rápida
                      </Badge>
                      <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                        Fale direto com a equipe.
                      </h3>
                      <p className="mt-3 text-base leading-7 text-white/66">
                        Se você já sabe o que precisa, o caminho mais rápido é
                        abrir uma conversa. Se ainda está estruturando a ideia,
                        o formulário abaixo ajuda a organizar a demanda.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/5511999999999?text=Ol%C3%A1%20CosmoHQ!%20Quero%20conversar%20sobre%20um%20projeto."
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        size: "lg",
                        className:
                          "w-full bg-[linear-gradient(135deg,#25d366,#128c7e)] shadow-[0_18px_45px_-18px_rgba(37,211,102,0.55)] hover:brightness-110",
                      })}
                    >
                      Abrir WhatsApp
                      <ArrowRight className="size-4" />
                    </a>

                    <div className="rounded-[28px] border border-white/10 bg-black/12 p-5 text-sm leading-7 text-white/66">
                      A CosmoHQ atua como agência de apps, sites, social e ads.
                      A gente entra para executar, não para enfeitar.
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="hover-lift h-full rounded-[32px]">
                  <CardContent className="p-6 sm:p-7">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      Conte sobre o seu projeto
                    </h3>
                    <p className="mt-2 text-sm text-white/56">Três campos, sem complicação.</p>

                    <form onSubmit={submitBriefing} className="mt-8 space-y-5">
                      <div>
                        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white/78">
                          Seu nome
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Como podemos te chamar?"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-project"
                          className="mb-2 block text-sm font-medium text-white/78"
                        >
                          Tipo de projeto
                        </label>
                        <select
                          id="contact-project"
                          name="projectType"
                          required
                          defaultValue=""
                          className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 [&:invalid]:text-white/32 [&>option]:bg-cosmo-bg [&>option]:text-white"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option value="app">Desenvolvimento de App</option>
                          <option value="site">Criação de Site</option>
                          <option value="social">Gestão de Instagram</option>
                          <option value="ads">Campanhas de Ads</option>
                          <option value="analytics">Análise de Dados</option>
                          <option value="completo">Pacote completo</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-objective" className="mb-2 block text-sm font-medium text-white/78">
                          Objetivo
                        </label>
                        <textarea
                          id="contact-objective"
                          name="objective"
                          required
                          rows={4}
                          placeholder="O que você quer alcançar com esse projeto?"
                          className="w-full resize-none rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                        />
                      </div>

                      <button
                        type="submit"
                        className={buttonVariants({
                          size: "lg",
                          className: "w-full",
                        })}
                      >
                        Enviar briefing
                        <ArrowRight className="size-4" />
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <footer className="section-shell px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Card className="editorial-panel rounded-[34px]">
              <CardContent className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.5fr))] md:gap-8">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3498db,#5abaf5,#f1c40f)] text-white shadow-[0_14px_40px_-16px_rgba(52,152,219,0.8)]">
                      C
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-[-0.04em] text-white">
                        CosmoHQ
                      </div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Agência digital
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 max-w-lg text-base leading-7 text-white/64">
                    Transformamos ideias em produtos e presença online com
                    estratégia, execução e dados. Apps, sites, social e ads no
                    mesmo time.
                  </p>
                </div>

                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/42">
                    Navegação
                  </div>
                  <div className="mt-4 space-y-3">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-white/64 transition hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/42">
                    Contato
                  </div>
                  <div className="mt-4 space-y-3">
                    <a
                      href="mailto:contato@cosmohq.org"
                      className="flex items-center gap-2 text-sm text-white/64 transition hover:text-white"
                    >
                      contato@cosmohq.org
                      <ArrowUpRight className="size-3.5" />
                    </a>
                    <a
                      href="https://wa.me/5511999999999?text=Ol%C3%A1%20CosmoHQ!%20Quero%20conversar%20sobre%20um%20projeto."
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-white/64 transition hover:text-white"
                    >
                      WhatsApp
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </CardContent>

              <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between md:px-7">
                <div>&copy; {new Date().getFullYear()} CosmoHQ. Todos os direitos reservados.</div>
                <div>Feito para vender melhor com apps, sites, social e ads.</div>
              </div>
            </Card>
          </div>
        </footer>
      </main>
    </div>
  );
}
