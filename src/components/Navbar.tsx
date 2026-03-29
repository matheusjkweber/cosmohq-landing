"use client";

import { useEffect, useState } from "react";
import { Menu, Orbit, X } from "lucide-react";
import { AnimatePresence, motion } from "./motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Galeria" },
  { href: "#pricing", label: "Planos" },
  { href: "#downloads", label: "Downloads" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4"
    >
      <nav
        className={cn(
          "mx-auto max-w-7xl rounded-[30px] border px-4 py-3 transition-all duration-300 md:px-6",
          scrolled
            ? "glass-panel-strong border-white/12 shadow-[0_24px_80px_-40px_rgba(1,8,20,0.95)]"
            : "border-white/8 bg-white/[0.03]"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#3498db,#5abaf5,#f1c40f)] shadow-brand">
              <div className="absolute inset-[1px] rounded-[15px] bg-[#252c2f]" />
              <Orbit className="relative z-10 h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[-0.04em] text-white">
                CosmoHQ
              </div>
              <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                Growth studio OS
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm text-white/68 transition hover:bg-white/7 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Badge variant="secondary">Pre-launch</Badge>
            <a
              href="#pricing"
              className={buttonVariants({ variant: "secondary", size: "sm" })}
            >
              Ver precos
            </a>
            <a href="#downloads" className={buttonVariants({ size: "sm" })}>
              Entrar na waitlist
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm text-white/72 transition hover:bg-white/7 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: "secondary",
                    size: "default",
                    className: "mt-2 flex w-full",
                  })}
                >
                  Ver precos
                </a>
                <a
                  href="#downloads"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    size: "default",
                    className: "flex w-full",
                  })}
                >
                  Entrar na waitlist
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
