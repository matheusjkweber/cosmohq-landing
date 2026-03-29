"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Features = dynamic(() => import("@/components/Features"), { ssr: false });
const Screenshots = dynamic(() => import("@/components/Screenshots"), {
  ssr: false,
});
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });
const Downloads = dynamic(() => import("@/components/Downloads"), {
  ssr: false,
});
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Pricing />
        <Downloads />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
