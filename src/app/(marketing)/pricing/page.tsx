import { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import { FadeUp } from "@/components/animations/FadeUp";
import Link from "next/link";
import { ArrowRight, DollarSign, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparent Pricing & Packages | SMB Mitra",
  description:
    "Explore transparent pricing for Website Development, Performance Marketing, Local SEO, and Custom Software. No hidden fees or lock-in contracts.",
  alternates: {
    canonical: "https://smbmitra.com/pricing",
  },
  openGraph: {
    title: "Transparent Pricing & Packages | SMB Mitra",
    description:
      "Clear, upfront cost ranges for Indian SMBs. Next.js websites from ₹19,999, Ad Management from ₹14,999/mo, Local SEO from ₹12,000/mo.",
    url: "https://smbmitra.com/pricing",
  },
};

const faqs = [
  {
    q: "Are there any hidden maintenance or hosting fees?",
    a: "None. All web development packages include 1 year of domain and hosting setup. Afterwards, standard cloud hosting costs are billed directly at cost.",
  },
  {
    q: "What is the minimum ad spend required for Performance Marketing?",
    a: "We recommend a minimum ad spend of ₹15,000/month paid directly to Google or Meta to allow sufficient data for campaign optimization.",
  },
  {
    q: "Do you require long-term lock-in contracts?",
    a: "No. Our marketing and SEO services operate on flexible month-to-month agreements. You stay because of results, not legal handcuffs.",
  },
  {
    q: "What if I need a custom package combination?",
    a: "We frequently bundle web development + performance marketing for launching SMBs at discounted bundle rates. Contact us for a tailored proposal.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Hero */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center relative z-10 text-white">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-bold text-orange-400 mb-6">
              <DollarSign size={16} /> Honest, Predictable Growth Investment
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Simple, Upfront Pricing.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Zero Surprises.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Small businesses deserve clear costs. No vague agency retainers or hidden billing clauses—choose a plan or get a custom scope in 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <PricingSection />

      {/* Pricing FAQ */}
      <section className="py-16 sm:py-24 bg-white" aria-label="Pricing FAQs">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Pricing Questions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium">
              Everything you need to know about our billing and investment terms.
            </p>
          </FadeUp>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center">
                    <HelpCircle size={20} className="text-blue-600 mr-2 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
