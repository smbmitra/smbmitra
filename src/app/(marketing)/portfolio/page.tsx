import { Metadata } from "next";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { FadeUp } from "@/components/animations/FadeUp";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Engineering Showcase | SMB Mitra",
  description:
    "Explore example websites, custom web applications, performance ad frameworks, and local SEO engines engineered for Indian small and medium businesses.",
  alternates: {
    canonical: "https://smbmitra.com/portfolio",
  },
  openGraph: {
    title: "Portfolio & Engineering Showcase | SMB Mitra",
    description:
      "Explore example websites, custom web applications, performance ad frameworks, and local SEO engines engineered for Indian SMBs.",
    url: "https://smbmitra.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center relative z-10 text-white">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-bold text-blue-300 mb-6">
              <Code2 size={16} /> Engineering & Work Showcase
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Real Quality. Modern Architecture.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Built to Scale.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              We don&apos;t build slow, generic WordPress templates. Explore our interactive
              web prototypes, high-converting ad funnels, and enterprise-grade software builds.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid Component */}
      <PortfolioGrid />

      {/* Startup Pilot Assurance CTA */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <FadeUp>
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              Need a Custom Solution Built for Your Business?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Get a customized live prototype overview and architecture proposal for your business before committing a single rupee.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-all text-base sm:text-lg"
            >
              Request Free Prototype Consultation <ArrowRight size={20} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
