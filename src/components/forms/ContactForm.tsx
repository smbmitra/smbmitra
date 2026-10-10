"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Website Development",
  "Performance Marketing",
  "SEO & Local Growth",
  "Custom Software / ERP",
  "Full Digital Overhaul",
];

const budgetOptions = [
  "< ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Let's Discuss",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Website Development");
  const [selectedBudget, setSelectedBudget] = useState<string>("₹25,000 – ₹75,000");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: selectedService,
      budget: selectedBudget,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-5 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-2xl flex items-start gap-3 shadow-sm"
        >
          <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">Consultation Request Received!</p>
            <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
              Our technical team will review your inquiry and reach out via phone or WhatsApp within 24 hours with an actionable assessment.
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-5 bg-rose-50 text-rose-900 border border-rose-200 rounded-2xl flex items-start gap-3 shadow-sm"
        >
          <div className="text-rose-600 font-bold">✕</div>
          <div>
            <p className="font-bold text-sm">Submission Error</p>
            <p className="text-xs text-rose-700 mt-1">
              Could not submit form right now. Please reach us directly on WhatsApp/Phone at{" "}
              <a href="tel:+919502335120" className="underline font-bold">+91 95023 35120</a> or email{" "}
              <a href="mailto:contact@smbmitra.com" className="underline font-bold">contact@smbmitra.com</a>.
            </p>
          </div>
        </motion.div>
      )}

      {/* Service Selection Dropdown */}
      <div>
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          What do you need help with? *
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/25 focus:border-[#1E40AF] focus:bg-white transition-all shadow-sm font-medium appearance-none cursor-pointer text-slate-800"
          >
            {serviceOptions.map((srv) => (
              <option key={srv} value={srv} className="text-slate-800 py-1">
                {srv}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/25 focus:border-[#1E40AF] focus:bg-white transition-all shadow-sm font-medium"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/25 focus:border-[#1E40AF] focus:bg-white transition-all shadow-sm font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Work Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="rahul@company.com"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/25 focus:border-[#1E40AF] focus:bg-white transition-all shadow-sm font-medium"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Business / Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. Sharma Textiles / Real Estate"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/25 focus:border-[#1E40AF] focus:bg-white transition-all shadow-sm font-medium"
          />
        </div>
      </div>

      {/* Approximate Budget Range Dropdown */}
      <div>
        <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Estimated Project Budget (Optional)
        </label>
        <div className="relative">
          <select
            id="budget"
            name="budget"
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/25 focus:border-[#1E40AF] focus:bg-white transition-all shadow-sm font-medium appearance-none cursor-pointer text-slate-800"
          >
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget} className="text-slate-800 py-1">
                {budget}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Tell us about your project &amp; current challenges *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="e.g. We need a high-converting website like thesrkestates.com, or help running Google Ads for local high-intent leads..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/25 focus:border-[#1E40AF] focus:bg-white transition-all shadow-sm resize-none font-medium"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1E40AF] hover:bg-[#152c7a] disabled:bg-slate-400 text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg shadow-blue-900/15 flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Submitting Inquiry...
            </>
          ) : (
            <>
              <Send size={16} /> Request Free Strategic Consultation
            </>
          )}
        </button>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-3.5 text-slate-500 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-600" /> 100% Confidential (NDA Friendly)
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#1E40AF]" /> Guaranteed response in &lt; 24h
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles size={13} className="text-[#F97316]" /> Free Growth Audit
          </span>
        </div>
      </div>
    </form>
  );
}

