"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircleMore } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, ease } from "./motion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "Depende do escopo. Um site institucional pode ficar pronto em 2–3 semanas. Um app completo leva de 2 a 4 meses. Na primeira conversa a gente já consegue estimar um prazo realista — sem promessas irreais.",
  },
  {
    question: "Vocês gerenciam redes sociais de qualquer nicho?",
    answer:
      "Sim. Adaptamos a estratégia de conteúdo, tom de voz e calendário editorial para cada segmento. O que não muda é o processo: pesquisa, planejamento, criação, publicação e análise de resultados.",
  },
  {
    question: "Como funciona a análise de dados de vocês?",
    answer:
      "Acompanhamos métricas em tempo real — tráfego, conversão, engajamento, ROI de campanhas. Cada decisão é baseada em números, não em feeling. Você recebe relatórios claros e recomendações de ajuste contínuo.",
  },
  {
    question: "Posso acompanhar o progresso do meu projeto?",
    answer:
      "Com certeza. Trabalhamos com comunicação direta e updates frequentes. Sem reuniões intermináveis — você sabe o que está acontecendo a cada etapa e tem canal aberto para tirar dúvidas.",
  },
  {
    question: "Vocês trabalham com empresas de qualquer tamanho?",
    answer:
      "Sim. Atendemos desde quem tem uma ideia e quer tirar do papel até empresas que já operam e precisam escalar sua presença digital. O escopo se ajusta ao momento do negócio.",
  },
  {
    question: "O que diferencia a CosmoHQ de outras agências?",
    answer:
      "Três coisas: usamos nossos próprios produtos (CosmoKit, CosmoFinanças) então sabemos o que é construir algo que funciona de verdade; tomamos decisões com dados, não achismo; e mantemos comunicação direta — sem camadas de burocracia.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Dúvidas frequentes"
          highlight="antes de começar."
          description="Reunimos as perguntas que mais ouvimos de quem está pensando em trabalhar com a gente."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease }}
          className="mt-14"
        >
          <Accordion.Root
            type="single"
            defaultValue="item-0"
            collapsible
            className="space-y-4"
          >
            {faqs.map((item, index) => (
              <Accordion.Item
                key={item.question}
                value={`item-${index}`}
                className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/4 backdrop-blur-xl"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7">
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="secondary"
                        className="min-w-12 justify-center"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Badge>
                      <div className="text-base font-medium leading-7 text-white sm:text-lg">
                        {item.question}
                      </div>
                    </div>
                    <ChevronDown className="h-5 w-5 shrink-0 text-white/52 transition duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand-primary" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-6 pb-6 text-sm leading-7 text-white/62 md:px-7 md:text-base">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease, delay: 0.08 }}
          className="mt-10 flex justify-center"
        >
          <div className="glass-panel inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm text-white/70">
            <MessageCircleMore className="h-4 w-4 text-brand-primary" />
            Ainda tem dúvida? hello@cosmohq.app
          </div>
        </motion.div>
      </div>
    </section>
  );
}
