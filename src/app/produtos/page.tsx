import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductsBanner from "@/components/ProductsBanner";

export const metadata: Metadata = {
  title: "Produtos | CosmoHQ",
  description:
    "Conheça os produtos da CosmoHQ — CosmoKit, CosmoFinanças, CosmoRemote, LifeManager e o Cosmo Travel MCP. Cada um com sua landing dedicada.",
  alternates: {
    canonical: "https://cosmohq.org/produtos",
  },
  openGraph: {
    title: "Produtos da CosmoHQ",
    description:
      "CosmoKit, CosmoFinanças, CosmoRemote, LifeManager e o Cosmo Travel MCP — visite as landings dedicadas de cada um.",
    url: "https://cosmohq.org/produtos",
    siteName: "CosmoHQ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Produtos CosmoHQ" }],
    locale: "pt_BR",
    type: "website",
  },
};

export default function ProdutosPage() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,152,219,0.2),transparent_32%),radial-gradient(circle_at_80%_12%,rgba(241,196,15,0.14),transparent_18%),radial-gradient(circle_at_15%_18%,rgba(231,76,60,0.12),transparent_20%)]" />

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#121719]/80 px-5 py-3 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3498db,#5abaf5,#f1c40f)] text-sm font-semibold text-white shadow-[0_14px_40px_-16px_rgba(52,152,219,0.9)]">
              C
            </span>
            <div>
              <div className="text-sm font-semibold tracking-[0.24em] text-white">COSMOHQ</div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/46">
                Agência digital
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="hidden h-9 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 text-sm font-medium text-white/82 transition hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Link>
        </div>
      </header>

      <main>
        <ProductsBanner />

        <section className="section-shell px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <p className="text-sm leading-7 text-white/64">
              Quer construir um produto como esses? A CosmoHQ projeta, desenvolve e mantém apps,
              sites e sistemas do começo ao fim.
            </p>
            <Link
              href="/#contato"
              className="ambient-glow inline-flex h-12 items-center gap-2 rounded-full bg-brand-primary px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-18px_rgba(52,152,219,0.6)] transition hover:brightness-110"
            >
              Fale com a gente
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
