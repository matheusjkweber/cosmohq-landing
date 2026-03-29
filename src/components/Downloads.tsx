"use client";

import { Apple, Smartphone, Mail, ArrowRight } from "lucide-react";
import { motion, fadeUp, ease } from "./motion";

export default function Downloads() {
  return (
    <section id="downloads" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-brand-primary/[0.04] blur-[160px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-4">
            <span className="h-px w-8 bg-brand-primary/40" />
            Download
            <span className="h-px w-8 bg-brand-primary/40" />
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Disponivel em breve para{" "}
            <span className="text-gradient">todas as plataformas</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-dark-muted text-lg leading-relaxed">
            Estamos preparando o CosmoHQ para iOS, Android e Web. Cadastre-se
            para ser notificado no lancamento.
          </p>
        </motion.div>

        {/* Store buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <div className="inline-flex items-center gap-3.5 rounded-2xl glass px-8 py-4 text-left opacity-50 cursor-not-allowed select-none gradient-border">
            <Apple className="h-8 w-8 text-white" />
            <div>
              <p className="text-[11px] text-dark-muted uppercase tracking-wider font-medium">
                Em breve na
              </p>
              <p className="text-base font-semibold text-white -mt-0.5">
                App Store
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-3.5 rounded-2xl glass px-8 py-4 text-left opacity-50 cursor-not-allowed select-none gradient-border">
            <Smartphone className="h-8 w-8 text-white" />
            <div>
              <p className="text-[11px] text-dark-muted uppercase tracking-wider font-medium">
                Em breve no
              </p>
              <p className="text-base font-semibold text-white -mt-0.5">
                Google Play
              </p>
            </div>
          </div>
        </motion.div>

        {/* Email signup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mt-16 mx-auto max-w-lg"
        >
          <div className="relative rounded-2xl glass p-1.5 transition-all duration-300 focus-within:ring-1 focus-within:ring-brand-primary/30 focus-within:shadow-lg focus-within:shadow-brand-primary/[0.06] gradient-border">
            <div className="flex items-center">
              <div className="flex items-center pl-4 pr-1">
                <Mail className="h-4 w-4 text-dark-muted" />
              </div>
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 bg-transparent px-3 py-3.5 text-sm text-white placeholder:text-dark-muted outline-none min-w-0"
              />
              <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 shrink-0">
                Notifique-me
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
          <p className="mt-3.5 text-xs text-dark-muted">
            Sem spam — apenas uma notificacao quando o app estiver pronto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
