"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/animations/FadeUp";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How soon will I receive a response after submitting?",
    a: "Our core technical founders review every inquiry directly. You will receive a phone call or WhatsApp message within 24 hours with an actionable assessment and clear next steps.",
  },
  {
    q: "Is the 20-minute strategic consultation really 100% free?",
    a: "Yes, completely free with zero sales pressure. We analyze your website, ad accounts, or workflow bottlenecks and give you honest, actionable recommendations whether you choose to partner with us or not.",
  },
  {
    q: "Can we schedule a Google Meet or Zoom video call?",
    a: "Absolutely. Once we review your initial requirements, we will share a direct calendar scheduling link to book a 1-on-1 video discovery session at your preferred time slot.",
  },
  {
    q: "Do you sign non-disclosure agreements (NDAs)?",
    a: "Yes. For proprietary custom software, SaaS architectures, and specialized business logic, we are happy to sign standard mutual NDAs before reviewing sensitive materials.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We specialize in Indian SMBs, local enterprises, manufacturers, real estate developers, and service businesses looking for scalable websites, predictable lead generation, and custom business automation tools.",
  },
  {
    q: "What are your payment terms and engagement models?",
    a: "We offer transparent milestone-based payments for web and software development (30% upfront, 40% beta demo, 30% handover) and simple monthly retainers for performance marketing and SEO.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <FadeUp>
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#1E40AF]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            Common Questions &amp; Clear Answers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Everything you need to know about working with SMB Mitra.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E40AF] flex items-center justify-center shrink-0">
                      <HelpCircle size={17} />
                    </div>
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-blue-100 text-[#1E40AF]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-14 sm:pl-16 border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </div>
  );
}
