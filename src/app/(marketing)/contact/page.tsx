import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  HelpCircle,
  Zap,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import ContactFAQ from "@/components/sections/ContactFAQ";
import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Contact Us | Free Strategy Consultation | SMB Mitra",
  description:
    "Ready to scale your business? Speak directly with the technical founders at SMB Mitra for web development, performance marketing, and custom software.",
  alternates: {
    canonical: "https://smbmitra.com/contact",
  },
  openGraph: {
    title: "Contact SMB Mitra | Free Strategic Consultation",
    description:
      "Get your free digital audit and growth playbook. We respond within 24 hours.",
    url: "https://smbmitra.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pb-20 sm:pb-28 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(30,64,175,0.08) 0%, transparent 65%)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Dark Hero Header */}
        <div
          className="relative -mx-4 sm:-mx-6 mb-10 sm:mb-14 px-4 sm:px-6 py-14 sm:py-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)",
          }}
        >
          {/* Animated Glow Orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "#3b82f6" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full pointer-events-none opacity-15 blur-3xl"
            style={{ background: "#F97316" }}
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="text-center max-w-3xl mx-auto relative z-10 text-white">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-bold text-blue-300 mb-5">
                <Zap size={14} className="text-[#F97316]" /> Direct Founder Access · Free Strategy &amp; Growth Audit
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4">
                Let&apos;s Build Something{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #60a5fa, #F97316)",
                  }}
                >
                  Exceptional
                </span>{" "}
                Together.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                No middle managers or scripted pitches. Connect directly with technical builders who understand the nuances of scaling Indian businesses.
              </p>
            </FadeUp>
          </div>

          {/* Wave divider */}
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1440 40"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-8 sm:h-10"
            >
              <path
                d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
                fill="#F8FAFC"
              />
            </svg>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E40AF] flex items-center justify-center shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">24-Hour Founder Response</h3>
              <p className="text-xs text-slate-500 font-medium">Technical founders review every inquiry</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F97316] flex items-center justify-center shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Free Growth &amp; Tech Audit</h3>
              <p className="text-xs text-slate-500 font-medium">Actionable review of your current setup</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Strict Confidentiality</h3>
              <p className="text-xs text-slate-500 font-medium">NDAs available for custom software &amp; IP</p>
            </div>
          </div>
        </div>

        {/* Contact Split Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200 overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto mb-14 sm:mb-20">
          {/* Left Form Side */}
          <div className="p-6 sm:p-10 lg:p-12 xl:p-14 lg:w-[60%] bg-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E40AF] text-xs font-bold mb-3">
                <Calendar size={13} /> Schedule a Strategy Call
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Tell Us About Your Project
              </h2>
              <p className="text-slate-500 font-medium mb-8 text-xs sm:text-sm leading-relaxed">
                Fill out the quick questionnaire below and we&apos;ll prepare a customized assessment and roadmap for your business.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Right Direct Info Side */}
          <div className="bg-[#0F172A] text-white p-6 sm:p-10 lg:p-12 xl:p-14 lg:w-[40%] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 relative overflow-hidden">
            {/* Ambient glow */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle, rgba(30,64,175,0.25) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
                transform: "translate(-30%, 30%)",
              }}
            />

            <div className="relative z-10 space-y-7">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Fast Response Mode
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Prefer Instant Chat?
                </h2>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Connect with our team directly on WhatsApp for instant scope discussions and fast quotes.
                </p>
              </div>

              {/* WhatsApp Quick CTA Button */}
              <a
                href="https://wa.me/919502335120?text=Hello%20SMB%20Mitra%20team,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle size={19} /> Chat on WhatsApp Directly
              </a>

              {/* Contact List */}
              <ul className="space-y-5 pt-3 border-t border-slate-800">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-[#F97316]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-0.5">
                      Direct Phone
                    </h3>
                    <a
                      href="tel:+919502335120"
                      className="text-white hover:text-orange-300 transition-colors text-sm font-semibold flex items-center gap-1.5"
                    >
                      +91 95023 35120 <ArrowUpRight size={13} className="opacity-70" />
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-blue-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-0.5">
                      Email Inquiries
                    </h3>
                    <a
                      href="mailto:contact@smbmitra.com"
                      className="text-white hover:text-blue-300 transition-colors text-sm font-semibold flex items-center gap-1.5"
                    >
                      contact@smbmitra.com <ArrowUpRight size={13} className="opacity-70" />
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-slate-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-0.5">
                      Address
                    </h3>
                    <p className="text-white text-sm font-semibold">
                      Jangaon, Telangana, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Business Hours Strip */}
            <div className="mt-7 pt-5 border-t border-slate-800 relative z-10 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-300 font-bold">
                <Clock size={13} className="text-[#F97316]" /> Business Operating Hours (IST)
              </div>
              <div className="flex justify-between">
                <span>Monday – Friday:</span>
                <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-medium">10:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <ContactFAQ />
      </div>
    </div>
  );
}

