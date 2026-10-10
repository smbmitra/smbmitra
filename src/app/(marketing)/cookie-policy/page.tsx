import { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft, ShieldCheck, CheckCircle2, Settings } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Cookie Policy | GDPR & Privacy Standards | SMB Mitra",
  description:
    "Understand how SMB Mitra uses cookies, tracking beacons, and analytics to deliver high-performance digital services.",
  alternates: {
    canonical: "https://smbmitra.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
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
              <Cookie size={13} /> Cookie Standards
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Cookie Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Last updated: {lastUpdated} · GDPR, ePrivacy, and DPDP compliant cookie usage.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl -mt-6 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Cookie className="text-[#1E40AF]" size={22} /> 1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your device (computer, smartphone, tablet) when you visit websites. They help the website remember your preferences, keep your session secure, and allow us to analyze traffic so we can continuously improve page speeds and user experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Categories of Cookies We Use
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Strictly Necessary Cookies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Essential for website security, SSL handshakes, and remembering your cookie consent preferences. These cannot be disabled as the website cannot function properly without them.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Performance &amp; Analytics Cookies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Collect aggregated, anonymized metrics on page load times, bounce rates, and popular content. We use this data strictly to improve our web engineering and UX.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Marketing &amp; Conversion Pixels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Allow us to measure the efficiency of Google and Meta ad campaigns when users request consultations.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Settings className="text-[#1E40AF]" size={22} /> 3. How to Manage or Disable Cookies
            </h2>
            <p>
              You can modify your cookie choices at any time through your web browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>View what cookies are stored and delete them individually.</li>
              <li>Block third-party tracking cookies by default.</li>
              <li>Block all cookies from specific domains.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500">
              Note: Blocking strictly necessary cookies may impact the proper layout or functionality of certain interactive forms.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Contact Us
            </h2>
            <p>
              For further questions regarding our cookie practices, please contact{" "}
              <a href="mailto:contact@smbmitra.com" className="text-[#1E40AF] font-bold underline">
                contact@smbmitra.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
