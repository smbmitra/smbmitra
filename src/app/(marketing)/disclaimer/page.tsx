import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Website & Results Disclaimer | SMB Mitra",
  description:
    "Review the professional results disclaimer, digital advertising disclosures, and third-party platform limitations for SMB Mitra.",
  alternates: {
    canonical: "https://smbmitra.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  const lastUpdated = "October 10, 2024";

  return (
    <div className="pb-20 sm:pb-28 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div
        className="relative px-4 sm:px-6 py-14 sm:py-20 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)",
        }}
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <FadeUp>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-bold text-amber-300 mb-4 ml-3">
              <AlertCircle size={13} /> Legal Notice
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Disclaimer
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Last updated: {lastUpdated} · Professional notice regarding services and estimates.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl -mt-6 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="text-[#F97316]" size={22} /> 1. General Informational Purpose
            </h2>
            <p>
              The information provided by SMB Mitra on <strong className="text-slate-900">smbmitra.com</strong> and across our consulting audits is for general informational and educational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the completeness, validity, or accuracy of general blog articles or market estimates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Marketing &amp; Business Earnings Disclaimer
            </h2>
            <p>
              Any revenue milestones, ROI multiples, or case study figures mentioned on our website (e.g. 4.2x ROAS, 10x lead volume) represent real results achieved for specific businesses under particular market conditions, ad spend levels, and operational setups.
            </p>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
              <strong>Notice:</strong> We do NOT guarantee that you will achieve identical or equivalent financial results. Every business has unique factors including product quality, sales team close rates, brand reputation, pricing elasticity, and market demand that directly affect campaign outcomes.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Search Engine Rankings (SEO) Disclaimer
            </h2>
            <p>
              Search engine ranking positions on Google, Bing, and other search engines are determined entirely by third-party search algorithms outside our direct control. While SMB Mitra employs white-hat, Google-compliant technical and on-page SEO best practices, no agency can guarantee permanent #1 ranking positions on Google.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Third-Party Links &amp; Platform Dependencies
            </h2>
            <p>
              Our website and custom software applications may contain links or integrations with third-party platforms (including Google Ads, Meta Ads, Vercel, AWS, WhatsApp Cloud API, Razorpay, or external client websites). We do not control or endorse the uptime, privacy policies, or practices of third-party platforms.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Questions or Clarifications
            </h2>
            <p>
              If you require any more information or have questions about our site disclaimer, contact us at:
            </p>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-1">
              <p className="font-bold text-slate-900">SMB Mitra Advisory</p>
              <p>Email: <a href="mailto:contact@smbmitra.com" className="text-[#1E40AF] font-semibold underline">contact@smbmitra.com</a></p>
              <p>Phone: <a href="tel:+919502335120" className="text-slate-700 font-semibold">+91 95023 35120</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
