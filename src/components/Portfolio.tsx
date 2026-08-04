"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const cases = [
  {
    name: "CosmoKit",
    tagline: "Toolkit nativo para acelerar testes em simuladores iOS",
    problem:
      "Testar um app em simulador é abrir o Xcode, achar a janela certa, capturar cada tela à mão e repetir tudo para cada idioma e cada device.",
    solution:
      "Um app nativo de macOS que reúne controle do simulador, captura de tela e de vídeo, gravação e inspeção de rede numa janela só.",
    result: "Na App Store como CosmoKit Tools, hoje na versão 4.5.0.",
    badge: "macOS",
    screenshots: [
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cc/6d/9b/cc6d9b44-5035-0cba-74de-fac58981db3a/screenshot_1.png/800x500bb.jpg",
        alt: "CosmoKit — painel de controle do simulador",
        w: 800,
        h: 500,
      },
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/f7/85/7cf78523-e85b-e061-5fa6-27988f8e86bc/screenshot_2.png/800x500bb.jpg",
        alt: "CosmoKit — captura e gravação",
        w: 800,
        h: 500,
      },
    ],
    className: "md:col-span-7",
    accent: "brand-primary",
  },
  {
    name: "CosmoFinanças",
    tagline: "Gestão financeira clara para quem precisa decidir rápido",
    problem:
      "Extrato do banco e fatura do cartão contam a mesma despesa duas vezes, e a conta do mês nunca fecha sozinha.",
    solution:
      "Importação de extrato com categorização automática, reconciliação de fatura e relatórios que qualquer pessoa entende.",
    result: "iOS e Android, hoje na versão 2.0.1.",
    badge: "iOS · Android",
    screenshots: [
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f5/44/e8/f544e8a5-7be4-1f6c-f1ad-d9f50972ceda/screenshot_1.png/576x768bb.png",
        alt: "CosmoFinanças — visão geral do mês",
        w: 576,
        h: 768,
      },
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/50/19/c5/5019c5e6-a5e5-0948-6134-f20c12d8af79/screenshot_2.png/576x768bb.png",
        alt: "CosmoFinanças — lançamentos e categorias",
        w: 576,
        h: 768,
      },
    ],
    className: "md:col-span-5",
    accent: "brand-secondary",
  },
  {
    name: "CosmoRemote",
    tagline: "Seu Mac na palma da mão, de onde você estiver",
    problem:
      "Sair de casa não devia significar perder acesso à máquina onde o trabalho realmente acontece.",
    solution:
      "Acesso remoto ao Mac pelo iPhone ou iPad, com controle real da tela, dos arquivos e dos processos — sem depender de terceiros no meio.",
    result: "iOS e macOS, hoje na versão 2.0.",
    badge: "iOS · macOS",
    screenshots: [
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9a/5a/16/9a5a1632-6882-e6be-461c-7fd138e23909/screenshot_1.png/576x768bb.png",
        alt: "CosmoRemote — tela do Mac no iPhone",
        w: 576,
        h: 768,
      },
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d8/a1/ff/d8a1ff89-0b7c-0121-6002-e218193bc378/screenshot_2.png/576x768bb.png",
        alt: "CosmoRemote — controle de sessão",
        w: 576,
        h: 768,
      },
    ],
    className: "md:col-span-5",
    accent: "brand-primary",
  },
  {
    name: "LifeManager",
    tagline: "A vida inteira em um painel só",
    problem:
      "Hábitos num app, contas em outro, projetos numa lista solta — e nenhuma visão do conjunto.",
    solution:
      "Um painel único para hábitos, finanças, projetos e bem-estar, com sincronização entre iPhone e Android.",
    result: "iOS e Android, hoje na versão 1.0.3.",
    badge: "iOS · Android",
    screenshots: [
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/04/6e/03/046e0331-11ce-c285-6d0a-1d088c9a195a/screenshot_1.png/576x768bb.png",
        alt: "LifeManager — painel do dia",
        w: 576,
        h: 768,
      },
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1f/94/47/1f94470f-f37c-3931-377d-b131cd0017b8/screenshot_2.png/576x768bb.png",
        alt: "LifeManager — hábitos e progresso",
        w: 576,
        h: 768,
      },
    ],
    className: "md:col-span-7",
    accent: "brand-secondary",
  },
  {
    name: "Cosmo Travel MCP",
    tagline: "Cotação de viagem inteira, com a fonte de cada número",
    problem:
      "Comparar quatro roteiros possíveis de uma viagem exige umas quarenta cotações — e uma planilha em que os números do topo já estão mais velhos que os de baixo.",
    solution:
      "Onze ferramentas MCP para voos, hospedagem, eventos e trajetos, que cotam tudo numa rodada só e devolvem cada preço com a fonte, a data e a faixa de referência da rota.",
    result: "Open source, no PyPI sob licença MIT.",
    badge: "Open source",
    screenshots: [
      {
        src: "/products/mcp-dossier-1.png",
        alt: "Cosmo Travel MCP — o dossiê gerado a partir de uma pesquisa",
        w: 1600,
        h: 1031,
      },
    ],
    className: "md:col-span-12",
    accent: "brand-accent",
  },
] as const;

const teamPhotos = [
  {
    src: "https://images.unsplash.com/photo-1601933974703-d25155828f40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDk4MzF8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGNvbXB1dGVyfGVufDB8MHx8fDE3NzQ4MDU5MzV8MA&ixlib=rb-4.1.0&q=85",
    alt: "Equipe focada em resultado",
    caption: "Foco no resultado",
  },
  {
    src: "https://images.pexels.com/photos/1647904/pexels-photo-1647904.jpeg",
    alt: "Colaboração em equipe",
    caption: "Trabalho em equipe",
  },
  {
    src: "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg",
    alt: "Apresentação de dados ao cliente",
    caption: "Decisões com dados",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfólio"
          title="Produtos que construímos"
          highlight="e usamos no dia a dia."
          description="Quatro apps publicados nas lojas e uma ferramenta open source. As telas abaixo são as que estão nas fichas hoje."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="story-grid mt-14"
        >
          {cases.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.58, ease, delay: index * 0.08 }}
              className={item.className}
            >
              <Card className="hover-lift spotlight-border group flex h-full flex-col overflow-hidden rounded-[30px]">
                <div className="relative overflow-hidden border-b border-white/10">
                  <div
                    className={cn(
                      "grid gap-2 p-3",
                      item.screenshots.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    )}
                  >
                    {item.screenshots.map((shot) => (
                      <div
                        key={shot.alt}
                        className="overflow-hidden rounded-[22px] border border-white/8 bg-[#1a1f21]"
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={shot.w}
                          height={shot.h}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <CardContent className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/58">
                        {item.tagline}
                      </p>
                    </div>
                    <Badge variant="accent" className="shrink-0">
                      {item.badge}
                    </Badge>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <p className="display-kicker mb-2 font-semibold text-brand-accent">
                        Problema
                      </p>
                      <p className="text-sm leading-6 text-white/62">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <p className="display-kicker mb-2 font-semibold text-brand-primary">
                        Solução
                      </p>
                      <p className="text-sm leading-6 text-white/62">
                        {item.solution}
                      </p>
                    </div>
                    <div className="glass-panel rounded-2xl px-4 py-3">
                      <p className="display-kicker mb-1 font-semibold text-brand-success">
                        Resultado
                      </p>
                      <p className="text-base font-medium text-white">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {teamPhotos.map((photo, index) => (
            <motion.div
              key={photo.caption}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.06 }}
            >
              <Card className="hover-lift group overflow-hidden rounded-[28px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f10] via-[#0d0f10]/35 to-transparent" />
                </div>
                <CardContent className="p-5">
                  <p className="display-kicker text-white/88">
                    {photo.caption}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
