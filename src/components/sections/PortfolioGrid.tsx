"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight, Globe, Sparkles } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import Link from "next/link";

interface PortfolioItem {
  id: string;
  name: string;
  subtitle: string;
  category: "Web Development" | "Custom Software" | "Performance Ads" | "Local SEO";
  categoryKey: "web" | "software" | "ads" | "seo";
  clientType: string;
  description: string;
  techStack: string[];
  mockupBg: string;
  badgeText: string;
  demoUrl?: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "srk-estates",
    name: "SRK Estates",
    subtitle: "Real Estate Channel Partner Portal",
    category: "Web Development",
    categoryKey: "web",
    clientType: "Real Estate (Hyderabad)",
    description:
      "RERA-verified property discovery portal with interactive project showcases, mobile-optimized floor plans, and instant WhatsApp lead capture.",
    techStack: ["WordPress", "Custom PHP", "RankMath SEO", "WhatsApp Engine"],
    mockupBg: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)",
    badgeText: "Live Client Build",
    demoUrl: "https://thesrkestates.com/",
  },
  {
    id: "procorp-projects",
    name: "PROCORP Technologies",
    subtitle: "Academic & IEEE Training Portal",
    category: "Web Development",
    categoryKey: "web",
    clientType: "EdTech & Training (Hyderabad)",
    description:
      "Academic project catalog and training directory featuring 500+ IEEE project tracks and automated student inquiry routing.",
    techStack: ["WordPress", "Custom PHP", "MySQL", "Lead Engine"],
    mockupBg: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #0369a1 100%)",
    badgeText: "Live Client Build",
    demoUrl: "https://procorpprojects.com/",
  },
  {
    id: "sai-stark-bucket-list",
    name: "Sai Stark",
    subtitle: "78 Adventures & Milestone Web App",
    category: "Custom Software",
    categoryKey: "software",
    clientType: "Personal Brand & Web App",
    description:
      "High-performance interactive web application tracking 78 extreme life adventures with real-time SVG progress analytics and dynamic search.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    mockupBg: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
    badgeText: "Live Web App",
    demoUrl: "https://saistark.smbmitra.com/",
  },
  {
    id: "raveen-revathi-wedding",
    name: "Raveen & Revathi",
    subtitle: "Luxury Interactive Event Portal",
    category: "Web Development",
    categoryKey: "web",
    clientType: "Events & Digital Invitations",
    description:
      "Bespoke digital wedding portal with interactive event schedules, Google Maps venue navigation, photo galleries, and digital RSVP.",
    techStack: ["React", "Vite", "Tailwind CSS", "Netlify"],
    mockupBg: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)",
    badgeText: "Live Event Build",
    demoUrl: "https://raveenrevathiwedding.netlify.app/",
  },
  {
    id: "ecommerce-storefront",
    name: "Retail E-Commerce Engine",
    subtitle: "Mobile-First Storefront & WhatsApp Checkout",
    category: "Web Development",
    categoryKey: "web",
    clientType: "Fashion & Retail",
    description:
      "Sub-second Next.js storefront engineered for rapid mobile product discovery, instant filter searching, and 3-step WhatsApp checkout.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    mockupBg: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
    badgeText: "Web Dev Prototype",
  },
  {
    id: "smb-erp-inventory",
    name: "SMB Operations & Billing ERP",
    subtitle: "Cloud Invoicing & Stock Dashboard",
    category: "Custom Software",
    categoryKey: "software",
    clientType: "Wholesale & Distribution",
    description:
      "Custom web dashboard enabling businesses to manage inventory, generate automated GST invoices in <15s, and track real-time profit & loss.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    mockupBg: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    badgeText: "Software Prototype",
  },
  {
    id: "healthcare-clinic-funnel",
    name: "Healthcare Lead Engine",
    subtitle: "Google & Meta Patient Acquisition Funnel",
    category: "Performance Ads",
    categoryKey: "ads",
    clientType: "Clinics & Healthcare",
    description:
      "High-converting landing page architecture paired with geo-targeted Google Search & Meta ad funnels for predictable patient bookings.",
    techStack: ["Google Ads", "Meta Ads", "Next.js", "CRM Sync"],
    mockupBg: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    badgeText: "Lead Gen Engine",
  },
  {
    id: "realestate-lead-portal",
    name: "Local Search & SEO Portal",
    subtitle: "Google Maps & Local Search Rank Engine",
    category: "Local SEO",
    categoryKey: "seo",
    clientType: "Local Businesses",
    description:
      "Structured property and service catalog with Schema.org markup, Google Maps 3-Pack optimization, and automated lead capture.",
    techStack: ["Next.js", "Schema.org", "Local SEO", "GMB Sync"],
    mockupBg: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
    badgeText: "SEO Prototype",
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.categoryKey === activeFilter);

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200" aria-label="Portfolio showcase">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-14">
          {[
            { label: "All Projects", key: "all" },
            { label: "Web Development", key: "web" },
            { label: "Custom Software", key: "software" },
            { label: "Performance Marketing", key: "ads" },
            { label: "Local SEO", key: "seo" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === filter.key
                  ? "bg-[#1E40AF] text-white shadow-md shadow-blue-900/15"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Streamlined Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.06}>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-full">
                {/* Visual Card Banner */}
                <div
                  className="p-6 sm:p-7 relative overflow-hidden text-white flex flex-col justify-between min-h-[160px]"
                  style={{ background: item.mockupBg }}
                >
                  <div className="flex items-center justify-between z-10 flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/20">
                      {item.badgeText}
                    </span>
                    <span className="text-xs font-semibold text-white/80">
                      {item.clientType}
                    </span>
                  </div>

                  <div className="z-10 mt-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-0.5">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Decorative background glow */}
                  <div
                    className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full opacity-25 pointer-events-none"
                    style={{ background: "rgba(255,255,255,0.4)" }}
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                      {item.demoUrl ? (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-colors"
                        >
                          <Globe size={13} /> Live Site <ExternalLink size={11} />
                        </a>
                      ) : (
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#1E40AF] hover:text-blue-800"
                        >
                          Request Scope <ArrowRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}


