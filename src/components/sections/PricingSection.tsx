"use client";

import { useState } from "react";
import { Check, HelpCircle, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  badge?: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const websitePricing: PricingTier[] = [
  {
    name: "Starter Business Site",
    price: "₹19,999",
    period: "one-time",
    description: "Ideal for small local businesses needing a fast, high-converting digital presence.",
    features: [
      "Up to 5 Mobile-Optimized Pages",
      "Next.js High-Speed Tech Architecture",
      "WhatsApp & Direct Call Buttons",
      "Basic On-Page SEO Setup",
      "Google Maps & Local Contact Sync",
      "1 Year Free Domain & Hosting Support",
    ],
    ctaText: "Get Started",
    ctaLink: "/contact?service=web-starter",
  },
  {
    name: "Growth Business Portal",
    price: "₹39,999",
    period: "one-time",
    badge: "Most Popular",
    popular: true,
    description: "Comprehensive multi-page custom site for businesses ready to dominate online leads.",
    features: [
      "Up to 12 Custom Designed Pages",
      "Advanced Lead Capture Forms & CRM Sync",
      "Speed Score 95+ (Core Web Vitals)",
      "Full Schema.org & Local SEO Optimization",
      "CMS for Easy Content Updates",
      "Google Analytics & Conversion Tracking",
      "3 Months Maintenance & Priority Support",
    ],
    ctaText: "Choose Growth Tier",
    ctaLink: "/contact?service=web-growth",
  },
  {
    name: "Custom Enterprise Portal",
    price: "₹79,999+",
    period: "one-time",
    description: "Custom web platform with advanced database integrations, API connectors, or E-commerce.",
    features: [
      "Unlimited Custom Pages & Sub-routes",
      "Custom E-Commerce / Payment Gateway Integration",
      "WhatsApp Automated Lead Notification System",
      "Headless CMS / Database Integration",
      "Dedicated Speed & Security Hardening",
      "6 Months Dedicated Technical Support",
    ],
    ctaText: "Request Custom Quote",
    ctaLink: "/contact?service=web-enterprise",
  },
];

const marketingPricing: PricingTier[] = [
  {
    name: "Lead Launchpad",
    price: "₹14,999",
    period: "/month + ad spend",
    description: "Targeted Meta or Google Ads management for consistent qualified inquiries.",
    features: [
      "1 Ad Channel (Google Ads OR Meta Ads)",
      "High-Converting Landing Page Setup",
      "Ad Creative & Copy Design",
      "Pixel & Conversion API Setup",
      "Bi-Weekly Performance Reports",
      "Minimum recommended ad spend: ₹15,000/mo",
    ],
    ctaText: "Start Campaign",
    ctaLink: "/contact?service=ads-starter",
  },
  {
    name: "Scale Engine",
    price: "₹29,999",
    period: "/month + ad spend",
    badge: "Maximum ROI",
    popular: true,
    description: "Omnichannel performance marketing (Google + Meta) for fast scaling.",
    features: [
      "Dual Ads Management (Google + Meta Ads)",
      "Dynamic A/B Tested Landing Pages",
      "Custom Creative Testing & Video Ads",
      "CRM & Lead Notification Automation",
      "Weekly Optimization & ROI Reporting",
      "Direct Founder Strategy Calls",
    ],
    ctaText: "Scale Your Business",
    ctaLink: "/contact?service=ads-scale",
  },
];

const seoPricing: PricingTier[] = [
  {
    name: "Local SEO Dominance",
    price: "₹12,000",
    period: "/month",
    description: "Dominate Google Maps and local search queries in your target city/region.",
    features: [
      "Google Business Profile (GMB) Optimization",
      "Local Map Pack Ranking Strategy",
      "Targeted City/Area Keyword Optimization",
      "Technical Site Speed Cleanup",
      "Local Citation & Directory Submissions",
      "Monthly Ranking & Traffic Audit",
    ],
    ctaText: "Rank Locally",
    ctaLink: "/contact?service=seo-local",
  },
  {
    name: "Organic Growth Authority",
    price: "₹24,000",
    period: "/month",
    popular: true,
    badge: "Statewide Rank",
    description: "National or statewide search engine authority to drive consistent organic leads.",
    features: [
      "Statewide & National High-Intent Keywords",
      "Comprehensive On-Page & Technical SEO",
      "Content Strategy & Monthly Blog Articles",
      "High-Authority Backlink Acquisition Strategy",
      "Competitor Keyword Theft Strategy",
      "Dedicated Analytics & Rank Dashboard",
    ],
    ctaText: "Claim Authority",
    ctaLink: "/contact?service=seo-growth",
  },
];

const softwarePricing: PricingTier[] = [
  {
    name: "Business Automation App",
    price: "₹49,999",
    period: "one-time",
    description: "Custom internal web app for billing, inventory, or lead management.",
    features: [
      "Custom Database & User Authentication",
      "GST Invoicing & Billing Workflow",
      "WhatsApp & SMS Notification Triggers",
      "Role-Based Access (Admin/Staff)",
      "Mobile-Responsive Admin Dashboard",
      "3 Months Free Support",
    ],
    ctaText: "Build Automation",
    ctaLink: "/contact?service=software-basic",
  },
  {
    name: "Scalable SaaS Platform",
    price: "₹99,999+",
    period: "one-time",
    badge: "Full Enterprise",
    popular: true,
    description: "End-to-end custom SaaS software architecture built for complex workflows.",
    features: [
      "Full Stack Next.js / Node.js Architecture",
      "Complex Database Schema & API Integrations",
      "Payment Gateway & Subscription Engine",
      "Cloud Infrastructure (AWS/Vercel) Setup",
      "Dedicated Technical Documentation",
      "6 Months Dedicated SLA Support",
    ],
    ctaText: "Consult Technical Lead",
    ctaLink: "/contact?service=software-enterprise",
  },
];

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState<"web" | "ads" | "seo" | "software">("web");

  const categoryTiers = {
    web: websitePricing,
    ads: marketingPricing,
    seo: seoPricing,
    software: softwarePricing,
  }[activeCategory];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200" aria-label="Transparent pricing">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {[
            { label: "Website Development", key: "web" },
            { label: "Performance Marketing", key: "ads" },
            { label: "SEO Services", key: "seo" },
            { label: "Custom Software", key: "software" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-[#1E40AF] text-white shadow-lg shadow-blue-500/20"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {categoryTiers.map((tier, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between h-full relative transition-all duration-300 hover:shadow-xl ${
                  tier.popular
                    ? "border-blue-600 ring-2 ring-blue-600/20 shadow-lg"
                    : "border-slate-200"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6 min-h-[40px]">
                    {tier.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs sm:text-sm font-semibold text-slate-500">
                        {tier.period}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 font-medium">
                        <Check size={16} className="text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tier.ctaLink}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    tier.popular
                      ? "bg-[#1E40AF] hover:bg-blue-800 text-white shadow-md"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {tier.ctaText} <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Pricing Guarantee Box */}
        <div className="mt-12 sm:mt-16 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                100% Transparent Price Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                No setup surcharges, no hidden cloud maintenance fees. What you see is what you pay.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs sm:text-sm shrink-0"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}
