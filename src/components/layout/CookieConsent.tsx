"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const consent = localStorage.getItem("smb_cookie_consent");
    if (!consent) {
      // Delay showing for smooth initial page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("smb_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("smb_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
        >
          <div className="bg-[#0F172A] text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-20 blur-2xl"
              style={{ background: "#3b82f6" }}
            />

            <button
              onClick={handleDecline}
              aria-label="Close cookie banner"
              className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={20} />
              </div>
              <div className="space-y-1.5 pr-4">
                <h3 id="cookie-consent-title" className="font-bold text-sm text-white flex items-center gap-1.5">
                  We Value Your Privacy <ShieldCheck size={14} className="text-emerald-400" />
                </h3>
                <p id="cookie-consent-desc" className="text-xs text-slate-300 leading-relaxed">
                  We use cookies and analytics to improve your experience, measure performance, and adhere to GDPR data standards.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="text-[11px] text-slate-400 flex items-center gap-2">
                <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/cookie-policy" className="underline hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDecline}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 border border-slate-700 transition-colors cursor-pointer"
                >
                  Essential Only
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[#1E40AF] hover:bg-blue-600 text-white shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
