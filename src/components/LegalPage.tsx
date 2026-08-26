import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import type { LegalDocument } from "@/lib/legal";

const icons = {
  shield: ShieldCheck,
  file: FileText,
} as const;

/**
 * Shared layout for the four legal routes. The Portuguese and English pages used to be the same
 * component, with /privacy and /terms re-exporting the pt-BR page and overriding only the
 * metadata — so an English-speaking reader (App Store review included) got a Portuguese policy
 * under an English title. The document is a prop now, so each route serves its own language.
 */
export default function LegalPage({ doc }: { doc: LegalDocument }) {
  const Icon = icons[doc.icon];

  return (
    <main lang={doc.lang} className="section-shell px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="editorial-panel rounded-[34px] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
                <Icon
                  className={`h-3.5 w-3.5 ${
                    doc.icon === "shield" ? "text-brand-success" : "text-brand-primary"
                  }`}
                />
                {doc.eyebrow}
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                {doc.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
                {doc.intro}
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {doc.backLabel}
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            {doc.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 md:px-6"
              >
                <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/70 sm:text-base">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-brand-primary/20 bg-[linear-gradient(135deg,rgba(52,152,219,0.12),rgba(241,196,15,0.08))] px-5 py-5 text-sm leading-7 text-white/72 md:px-6">
            <strong className="text-white">{doc.contactLabel}</strong> {doc.contactIntro}{" "}
            <a
              href="mailto:contato@cosmohq.org"
              className="font-medium text-brand-primary transition hover:text-white"
            >
              contato@cosmohq.org
            </a>
            .
          </div>
        </div>
      </div>
    </main>
  );
}
