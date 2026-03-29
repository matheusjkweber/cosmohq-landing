"use client";

import { ArrowUpRight, Rocket } from "lucide-react";
import { motion, fadeUp, ease } from "./motion";
import { Badge } from "@/components/ui/badge";

const footerGroups = [
  {
    title: "Produto",
    links: [
      { href: "#features", label: "Features" },
      { href: "#screenshots", label: "Galeria" },
      { href: "#pricing", label: "Planos" },
      { href: "#downloads", label: "Acesso" },
    ],
  },
  {
    title: "Launch",
    links: [
      { href: "#downloads", label: "Waitlist" },
      { href: "#faq", label: "FAQ" },
      { href: "mailto:hello@cosmohq.app", label: "Contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="section-shell px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-7xl"
      >
        <div className="glass-panel-strong rounded-[34px] px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.5fr))]">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3498db,#1c6df8,#f1c40f)] text-white shadow-brand">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-[-0.04em] text-white">
                    CosmoHQ
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Pre-launch command center
                  </div>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-white/62">
                Landing page reconstruida para um pre-launch premium: dark mode
                forte, screenshots oficiais, pricing completo e CTAs coerentes
                com o produto ainda em fase anterior ao lancamento publico.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Badge variant="secondary">iOS: Coming Soon</Badge>
                <Badge variant="secondary">Android: Coming Soon</Badge>
              </div>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                  {group.title}
                </div>
                <div className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/62 transition hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
            <div>(c) 2026 CosmoHQ. All rights reserved.</div>
            <div>Marketing landing page for the upcoming public launch.</div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
