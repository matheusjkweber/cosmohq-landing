import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | CosmoHQ",
  description:
    "The terms that govern use of CosmoHQ apps and website, including subscriptions, free trials, auto-renewal, acceptable use, and limitations.",
  alternates: {
    canonical: "https://cosmohq.org/terms",
  },
};

const sections = [
  {
    title: "1. Acceptance",
    content: [
      "By downloading, accessing, or using any CosmoHQ app or this website, you agree to these Terms of Service. If you do not agree, do not use them.",
      "These Terms apply across all CosmoHQ apps unless a specific app shows its own terms.",
    ],
  },
  {
    title: "2. The apps & your license",
    content: [
      "We grant you a personal, non-exclusive, non-transferable, revocable license to use our apps for their intended purpose, subject to these Terms and the rules of the app store you installed from.",
      "You may not copy, reverse-engineer, resell, or misuse the apps, or use them to break the law or infringe others' rights.",
    ],
  },
  {
    title: "3. Subscriptions, free trials & auto-renewal",
    content: [
      "Some features require a paid subscription or a one-time purchase, billed through the Apple App Store or Google Play. Prices and available plans are shown in the app at the time of purchase.",
      "Subscriptions renew automatically at the end of each period unless you cancel at least 24 hours before the period ends. Manage or cancel anytime in your App Store or Google Play account settings.",
      "If a plan includes a free trial, any unused portion is forfeited when you buy a subscription. Lifetime purchases are one-time and do not renew.",
      "Refunds are handled by Apple or Google under their policies; we generally cannot issue store refunds directly.",
    ],
  },
  {
    title: "4. Acceptable use",
    content: [
      "You are responsible for the content you create with the apps and for using them lawfully. Do not use the apps to create or distribute illegal, harmful, or infringing material, or to harass others.",
      "We may suspend or limit access if you violate these Terms or misuse the service.",
    ],
  },
  {
    title: "5. Intellectual property",
    content: [
      "The apps, the website, and their branding, design, and software are owned by CosmoHQ and protected by law. These Terms do not transfer any ownership to you.",
      "You retain ownership of the content you create with the apps.",
    ],
  },
  {
    title: "6. Disclaimers",
    content: [
      "The apps and website are provided \"as is\" and \"as available,\" without warranties of any kind to the extent permitted by law. We do not guarantee that they will be uninterrupted, error-free, or fit for a particular purpose.",
      "You are responsible for keeping your own backups of important content.",
    ],
  },
  {
    title: "7. Limitation of liability",
    content: [
      "To the maximum extent permitted by law, CosmoHQ is not liable for indirect, incidental, or consequential damages, or for loss of data or profits, arising from your use of the apps or website.",
    ],
  },
  {
    title: "8. Termination",
    content: [
      "You may stop using the apps at any time. We may suspend or end access if you breach these Terms or where required by law. Sections that by their nature should survive termination will continue to apply.",
    ],
  },
  {
    title: "9. Changes",
    content: [
      "We may update these Terms to reflect changes to the apps, our operations, or the law. The latest version will always be available on this page; continued use means you accept the updated Terms.",
    ],
  },
  {
    title: "10. Contact",
    content: [
      "Questions about these Terms? Email contato@cosmohq.org.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="section-shell px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="editorial-panel rounded-[34px] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
                <FileText className="h-3.5 w-3.5 text-brand-success" />
                Terms of service
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
                The terms that govern use of CosmoHQ apps and this website.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
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
            <strong className="text-white">Contact:</strong> questions about these terms?
            Email{" "}
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
