"use client";

import { Rocket } from "lucide-react";
import { motion, fadeUp, ease } from "./motion";

const footerLinks = [
  {
    title: "Produto",
    links: [
      { label: "Features", href: "#features" },
      { label: "Screenshots", href: "#screenshots" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download", href: "#downloads" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-surface/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-blue-600 shadow-lg shadow-brand-primary/15 transition-transform duration-300 group-hover:scale-110">
                <Rocket className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Cosmo<span className="text-brand-primary">HQ</span>
              </span>
            </a>
            <p className="text-sm text-dark-muted leading-relaxed max-w-xs">
              Plataforma de marketing intelligence para impulsionar sua
              presenca digital.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-dark-muted hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 sm:flex-row">
          <p className="text-sm text-dark-muted">
            &copy; {new Date().getFullYear()} CosmoHQ. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((name) => (
              <a
                key={name}
                href="#"
                className="text-sm text-dark-muted hover:text-white transition-colors duration-200"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
