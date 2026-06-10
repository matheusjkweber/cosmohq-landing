import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CosmoHQ",
  description:
    "How CosmoHQ collects, uses, stores, and protects personal data across its apps and website.",
  alternates: {
    canonical: "https://cosmohq.org/privacy",
  },
};

const sections = [
  {
    title: "1. Who we are",
    content: [
      "CosmoHQ builds and publishes mobile and desktop applications. This Privacy Policy applies to our apps and to this website, and explains how we collect, use, store, and protect personal data.",
      "It applies across all CosmoHQ apps unless a specific app shows its own policy.",
    ],
  },
  {
    title: "2. Information we collect",
    content: [
      "Account & contact data: information you provide, such as name, email, or messages you send us through the app or website.",
      "Content you create: the scripts, recordings, files, notes, or other data you produce inside an app. Where an app stores this only on your device, we do not receive it.",
      "Device & usage data: technical information such as device model, operating system, app version, language, anonymous identifiers, crash logs, and basic usage events used to keep the app working and to fix problems.",
      "Purchase data: when you subscribe or buy, the transaction is processed by Apple or Google and the entitlement is managed by RevenueCat. We receive the purchase status — not your card number.",
    ],
  },
  {
    title: "3. How we use data",
    content: [
      "To provide and operate the apps, deliver features you request, process and restore purchases, and keep your subscription status in sync.",
      "To diagnose crashes, improve performance and reliability, prevent fraud and abuse, and comply with legal obligations.",
      "To respond to your messages and provide support.",
    ],
  },
  {
    title: "4. Subscriptions & payments",
    content: [
      "Purchases and subscriptions are processed by the Apple App Store or Google Play, and entitlements are managed through RevenueCat. We never receive or store your full payment-card details.",
      "We receive the minimum information needed to grant access (for example, the active product and whether a subscription is valid), so the app can unlock the features you paid for.",
    ],
  },
  {
    title: "5. Third-party services",
    content: [
      "We rely on trusted providers to operate the apps, including Apple (App Store, sign-in, push), Google (Play, sign-in, services), and RevenueCat (purchase and entitlement management).",
      "We may use analytics and crash-reporting tools (such as Firebase and Sentry) to understand stability and usage. Each provider processes data under its own terms and appropriate safeguards.",
    ],
  },
  {
    title: "6. Data sharing",
    content: [
      "We do not sell your personal data.",
      "We share data only with the service providers necessary to operate the apps and our website, under contracts and safeguards, or where required by law.",
    ],
  },
  {
    title: "7. Storage & security",
    content: [
      "We keep data only for as long as needed for the purposes described here or as required by law. Much of the content you create may live only on your device or in your own iCloud/Google account.",
      "We apply reasonable technical and organizational measures to protect information against unauthorized access, loss, or disclosure. No method of transmission or storage is 100% secure.",
    ],
  },
  {
    title: "8. Your rights",
    content: [
      "Depending on your location, you may request access, correction, deletion, portability, or restriction of your personal data, and you may withdraw consent where processing is based on it.",
      "To exercise these rights, contact us at contato@cosmohq.org.",
    ],
  },
  {
    title: "9. Children",
    content: [
      "Our apps are not directed to children under 13 (or the minimum age in your country), and we do not knowingly collect their personal data. If you believe a child has provided us data, contact us and we will delete it.",
    ],
  },
  {
    title: "10. Changes",
    content: [
      "We may update this policy to reflect changes to our apps, operations, or the law. The latest version will always be available on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="section-shell px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="editorial-panel rounded-[34px] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-success" />
                Privacy policy
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
                How CosmoHQ handles personal data across its apps and this website.
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
            <strong className="text-white">Contact:</strong> for any question about this
            policy or how we handle personal data, email{" "}
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
