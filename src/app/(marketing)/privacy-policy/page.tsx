import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Privacy Policy | GDPR & DPDP Compliant | SMB Mitra",
  description:
    "Learn how SMB Mitra collects, uses, and safeguards your personal and business data in compliance with GDPR and the Indian DPDP Act.",
  alternates: {
    canonical: "https://smbmitra.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-bold text-emerald-300 mb-4 ml-3">
              <ShieldCheck size={13} /> GDPR &amp; DPDP Compliant
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Last updated: {lastUpdated} · Effective immediately for all visitors and clients.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl -mt-6 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="text-[#1E40AF]" size={22} /> 1. Introduction
            </h2>
            <p>
              SMB Mitra (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to safeguarding the privacy and personal data of our website visitors, clients, and partners. This Privacy Policy details how we collect, process, store, and protect your information when you visit <strong className="text-slate-900">smbmitra.com</strong> or engage our digital marketing, web development, and software engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="text-[#1E40AF]" size={22} /> 2. Information We Collect
            </h2>
            <p>We may collect information directly provided by you through our contact forms, audit requests, email correspondence, or phone/WhatsApp communications:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Contact Identifiers:</strong> Name, work email address, phone/WhatsApp number, company name.</li>
              <li><strong>Project Data:</strong> Business objectives, estimated budgets, website URLs, and workflow requirements.</li>
              <li><strong>Automated Analytics:</strong> IP addresses, browser type, device information, operating system, and anonymous interaction metrics via standard web cookies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="text-[#1E40AF]" size={22} /> 3. How We Use Your Data
            </h2>
            <p>We process your data strictly for legitimate business operations:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>To evaluate and deliver free strategic growth audits and customized proposals.</li>
              <li>To execute contractual digital marketing, SEO, and custom software development projects.</li>
              <li>To communicate project milestones, support updates, and critical system alerts.</li>
              <li>To comply with statutory legal obligations and prevent fraudulent activity.</li>
            </ul>
            <p className="font-semibold text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
              🛡️ We never sell, rent, or trade your personal or business data to third-party data brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. GDPR &amp; DPDP Rights (Your Data Rights)
            </h2>
            <p>Under the European General Data Protection Regulation (GDPR) and the Digital Personal Data Protection Act (DPDP) of India, you possess the following rights:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal records where no statutory retention law applies.</li>
              <li><strong>Right to Restrict or Object:</strong> Opt-out of non-essential communications and cookies at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, email our Data Protection Officer at{" "}
              <a href="mailto:contact@smbmitra.com" className="text-[#1E40AF] font-bold underline">
                contact@smbmitra.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We use essential cookies to maintain website stability and privacy-conscious analytics cookies to measure site interactions. You can adjust your cookie settings at any time or refuse cookies via our on-site banner or browser preferences. Learn more on our{" "}
              <Link href="/cookie-policy" className="text-[#1E40AF] font-bold underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Data Security &amp; Confidentiality
            </h2>
            <p>
              All submitted data is transmitted using modern TLS 1.3 encryption. For proprietary software logic and client databases, we enforce strict access control hierarchies and sign non-disclosure agreements (NDAs) prior to onboarding.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              7. Contact Our Privacy Office
            </h2>
            <p>For questions or formal inquiries concerning this policy, reach us directly:</p>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-1">
              <p className="font-bold text-slate-900">SMB Mitra Privacy &amp; Legal Compliance</p>
              <p>Email: <a href="mailto:contact@smbmitra.com" className="text-[#1E40AF] font-semibold underline">contact@smbmitra.com</a></p>
              <p>Phone: <a href="tel:+919502335120" className="text-slate-700 font-semibold">+91 95023 35120</a></p>
              <p>Address: Jangaon, Telangana, 506167, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
