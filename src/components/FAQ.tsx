"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleMore } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { AnimatePresence, motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "O CosmoHQ ja esta lancado?",
    answer:
      "Nao. Esta landing comunica um pre-launch. Os links de iOS e Android continuam como Coming Soon e o acesso ao workspace web segue por solicitacao.",
  },
  {
    question: "O que esta incluso no plano Free?",
    answer:
      "Painel de Controle, Gerenciamento de Campanhas, Analise de Dados em Tempo Real, Integracao com Redes Sociais, Otimizacao de Conteudo, Notificacoes e Alertas, Seguranca e Autenticacao.",
  },
  {
    question: "Como funciona a comparacao de precos?",
    answer:
      "Mensal, anual e vitalicio aparecem juntos na mesma secao para facilitar a leitura. O anual fica destacado como melhor valor com badge real de economia.",
  },
  {
    question: "Existe mesmo opcao vitalicia?",
    answer:
      "Sim. Ela aparece ao lado do mensal e do anual no mesmo card, o que ajuda a comparar investimento recorrente contra compra unica.",
  },
  {
    question: "As imagens usadas na landing sao oficiais?",
    answer:
      "Sim. A pagina usa os screenshots promocionais fornecidos para o produto e as imagens editoriais selecionadas para reforcar contexto de time e prova visual.",
  },
  {
    question: "Como entrar na waitlist ou beta privada?",
    answer:
      "Use os CTAs da secao Access para mandar email e pedir entrada antecipada no workspace web ou receber notificacao quando o produto abrir.",
  },
];

function FAQItem({
  item,
  index,
}: {
  item: (typeof faqs)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-[26px] transition duration-300",
        open ? "spotlight-border border-brand-primary/20" : ""
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
      >
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="min-w-12 justify-center">
            {String(index + 1).padStart(2, "0")}
          </Badge>
          <div className="text-base font-medium leading-7 text-white sm:text-lg">
            {item.question}
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-white/52 transition duration-300",
            open && "rotate-180 text-brand-primary"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-7 text-white/62 md:px-7 md:text-base">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Card>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Transparencia para uma pagina"
          highlight="que vende antes de abrir."
          description="O FAQ resolve as objecoes centrais do pre-launch: estado do produto, o que entra no freemium, como os precos estao organizados e qual CTA deve ser seguida agora."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 space-y-4"
        >
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              variants={fadeUp}
              transition={{ duration: 0.45, ease, delay: index * 0.03 }}
            >
              <FAQItem item={item} index={index} />
            </motion.div>
          ))}
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
