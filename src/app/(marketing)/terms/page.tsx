import { Metadata } from "next";
import Link from "next/link";
import { FileCheck, ShieldAlert, ArrowLeft, CheckCircle2, Scale } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Terms and Conditions | Service Agreement | SMB Mitra",
  description:
    "Read the terms and conditions governing web development, marketing campaigns, and custom software delivery by SMB Mitra.",
  alternates: {
    canonical: "https://smbmitra.com/terms",
  },
};

export default function TermsPage() {
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-bold text-blue-300 mb-4 ml-3">
              <Scale size={13} /> Legal Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Last updated: {lastUpdated} · Governs all digital consulting, development, and marketing contracts.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl -mt-6 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="text-[#1E40AF]" size={22} /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website <strong className="text-slate-900">smbmitra.com</strong> or entering into a service agreement with SMB Mitra, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions. If you do not agree with any portion of these terms, you should discontinue using our website and services immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Scope of Services
            </h2>
            <p>SMB Mitra provides custom digital agency and IT services including:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Custom Website Development:</strong> Responsive Next.js/React websites, speed optimization, and CMS architectures.</li>
              <li><strong>Performance Marketing &amp; PPC:</strong> Google Search/Display Ads, Meta (Facebook &amp; Instagram) campaigns, and conversion tracking.</li>
              <li><strong>Search Engine Optimization (SEO):</strong> On-page technical SEO, Google Business Profile local rankings, and authority building.</li>
              <li><strong>Custom Software &amp; Automation:</strong> Internal business tools, billing systems, ERP dashboards, and API workflows.</li>
            </ul>
            <p>
              Every client project is governed by a mutually agreed Statement of Work (SOW) or formal project quotation specifying deliverables, milestones, and timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Milestone Billing &amp; Payment Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Development Projects:</strong> Fixed-fee projects follow a standard 3-tier milestone schedule: 30% initial deposit upon contract signing, 40% upon staging beta demonstration, and 30% balance upon final deployment and source code transfer.</li>
              <li><strong>Monthly Retainers (Ads &amp; SEO):</strong> Invoiced in advance on a monthly recurring basis. Ad spend budgets are paid directly to Google or Meta ad platforms by the client unless otherwise contracted.</li>
              <li><strong>Invoices &amp; Taxes:</strong> All quotes are subject to applicable GST and local Indian statutory taxes. Invoices are payable within 7 business days.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Intellectual Property &amp; Code Ownership
            </h2>
            <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200 text-slate-800 space-y-2">
              <p className="font-bold text-[#1E40AF] flex items-center gap-1.5">
                <CheckCircle2 size={18} /> 100% Client Ownership Upon Final Payment
              </p>
              <p className="text-xs sm:text-sm text-slate-700">
                Upon complete settlement of all agreed project invoices, all custom graphics, branding elements, bespoke code, and project files developed explicitly for the client become the sole intellectual property of the client.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="text-amber-600" size={22} /> 5. Client Responsibilities &amp; Content Provision
            </h2>
            <p>
              Timely project delivery requires active client collaboration. Clients agree to provide required assets (text copy, brand assets, product catalogs, third-party credentials) within agreed timeframes. Delays caused by pending client approvals or assets will proportionally adjust project delivery dates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p>
              While SMB Mitra employs best-in-class engineering standards and conversion optimization methods, we cannot guarantee specific third-party commercial outcomes (e.g. precise lead numbers or search rank positions) due to uncontrollable search engine algorithm updates, platform ad policy revisions, or fluctuating competitor bids. In no event shall SMB Mitra be liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              7. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be interpreted and governed in accordance with the laws of the Republic of India. Any legal proceedings arising out of this agreement shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              8. Contacting Us
            </h2>
            <p>
              For legal notifications or questions regarding our terms, reach us at:
            </p>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-1">
              <p className="font-bold text-slate-900">SMB Mitra Legal Operations</p>
              <p>Email: <a href="mailto:contact@smbmitra.com" className="text-[#1E40AF] font-semibold underline">contact@smbmitra.com</a></p>
              <p>Phone: <a href="tel:+919502335120" className="text-slate-700 font-semibold">+91 95023 35120</a></p>
              <p>Address: Jangaon, Telangana, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
