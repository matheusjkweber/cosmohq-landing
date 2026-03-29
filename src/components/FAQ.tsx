"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, fadeUp, stagger, ease, AnimatePresence } from "./motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "O CosmoHQ e gratuito?",
    answer:
      "Sim! O plano Free inclui painel de controle, 1 campanha ativa, analytics com 7 dias de dados e 1 rede social conectada. Voce pode fazer upgrade a qualquer momento.",
  },
  {
    question: "Quais redes sociais sao suportadas?",
    answer:
      "O CosmoHQ integra com Instagram, Facebook, Twitter/X, LinkedIn e TikTok. Estamos constantemente adicionando novas plataformas.",
  },
  {
    question: "Posso cancelar a assinatura a qualquer momento?",
    answer:
      "Sim, sem compromisso. Voce pode cancelar, fazer downgrade ou upgrade do seu plano a qualquer momento direto no painel.",
  },
  {
    question: "Meus dados estao seguros?",
    answer:
      "Absolutamente. Usamos criptografia de ponta a ponta, autenticacao multi-fator e seguimos as melhores praticas de seguranca. Seus dados nunca sao compartilhados com terceiros.",
  },
  {
    question: "Quando o app mobile sera lancado?",
    answer:
      "Estamos trabalhando nos apps para iOS e Android. Cadastre seu email na secao de downloads para ser notificado assim que estiverem disponiveis.",
  },
  {
    question: "Existe suporte em portugues?",
    answer:
      "Sim! Todo o CosmoHQ esta disponivel em portugues, incluindo suporte por email e documentacao. Suporte em ingles tambem esta disponivel.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "w-full text-left glass rounded-2xl p-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50",
        open
          ? "ring-1 ring-brand-primary/10 bg-white/[0.02]"
          : "glass-hover"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-dark-muted tabular-nums w-5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-semibold text-white">{faq.question}</h3>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-dark-muted transition-all duration-300",
            open && "rotate-180 text-brand-primary"
          )}
        />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 pl-9 text-sm text-dark-muted leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 lg:py-36">
      <div className="absolute top-0 inset-x-0 section-divider" />

      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-4">
            <span className="h-px w-8 bg-brand-primary/40" />
            FAQ
            <span className="h-px w-8 bg-brand-primary/40" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-dark-muted text-lg leading-relaxed">
            Tire suas duvidas sobre o CosmoHQ.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.4, ease, delay: i * 0.04 }}
            >
              <FAQItem faq={faq} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* Extra CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4">
            <MessageCircleQuestion className="h-5 w-5 text-brand-primary" />
            <p className="text-sm text-dark-muted">
              Ainda tem duvidas?{" "}
              <a href="mailto:contato@cosmohq.app" className="font-semibold text-brand-primary hover:text-white transition-colors">
                Entre em contato
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
