"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircleMore } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, ease } from "./motion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "O CosmoHQ ja esta lancado?",
    answer:
      "Nao. A landing comunica um pre-launch. iOS e Android continuam marcados como Coming Soon e a CTA principal e waitlist ou pedido de acesso ao workspace web.",
  },
  {
    question: "O que entra no plano Free?",
    answer:
      "Painel de Controle, Gerenciamento de Campanhas, Analise de Dados em Tempo Real, Integracao com Redes Sociais, Otimizacao de Conteudo, Notificacoes e Alertas, Seguranca e Autenticacao.",
  },
  {
    question: "Como os precos estao organizados?",
    answer:
      "Monthly, Yearly e Lifetime aparecem juntos no mesmo bloco. O yearly fica destacado como best value com badge de economia calculada, sem esconder as outras opcoes.",
  },
  {
    question: "As imagens da landing sao oficiais?",
    answer:
      "Sim. Os screenshots promocionais fornecidos entram como imagens de produto. As fotos editoriais apoiam a narrativa visual, mas nao fingem ser clientes, reviews ou depoimentos.",
  },
  {
    question: "Quem deve entrar na waitlist agora?",
    answer:
      "Times de growth, marketing ops, agencias e liderancas que querem organizar campanhas, analytics e conteudo em uma unica camada operacional assim que o acesso abrir.",
  },
  {
    question: "Existe opcao lifetime mesmo antes do lancamento?",
    answer:
      "Sim. Ela aparece junto com mensal e anual na mesma secao para facilitar a comparacao entre recorrencia e compra unica durante o pre-launch.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas que precisam estar respondidas"
          highlight="antes do clique."
          description="O FAQ fecha as objecoes centrais do pre-launch: estado do produto, estrutura do freemium, clareza de pricing e como agir enquanto o app ainda nao esta nas lojas."
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
                      <Badge variant="secondary" className="min-w-12 justify-center">
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
            hello@cosmohq.app
          </div>
        </motion.div>
      </div>
    </section>
  );
}
