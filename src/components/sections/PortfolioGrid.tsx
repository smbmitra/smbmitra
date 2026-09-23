"use client";

import { useState } from "react";
import { ExternalLink, CheckCircle2, ArrowRight, Globe } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import Link from "next/link";

interface PortfolioItem {
  id: string;
  title: string;
  category: "Web Development" | "Custom Software" | "Performance Ads" | "Local SEO";
  categoryKey: "web" | "software" | "ads" | "seo";
  clientType: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  deliverables: string[];
  mockupBg: string;
  badgeText: string;
  demoUrl?: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "procorp-projects",
    title: "PROCORP Technologies | Academic & IEEE Projects Portal",
    category: "Web Development",
    categoryKey: "web",
    clientType: "EdTech & Engineering Institute",
    description:
      "A comprehensive academic project directory and training portal engineered for engineering students in Hyderabad, featuring IEEE project tracks, domain-wise course listings, and automated student inquiry management.",
    techStack: ["WordPress", "Custom PHP", "MySQL", "Yoast SEO", "Lead Engine"],
    metrics: [
      { label: "Project Tracks", value: "500+" },
      { label: "Student Inquiries", value: "10,000+" },
      { label: "Search Visibility", value: "Top 3 Rank" },
    ],
    deliverables: [
      "IEEE Academic Project Catalog",
      "Domain-Specific Course & Training Pages",
      "High-Conversion Student Lead Forms",
      "Responsive Multi-Device Layout",
    ],
    mockupBg: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #0369a1 100%)",
    badgeText: "Live Client Build",
    demoUrl: "https://procorpprojects.com/",
  },
  {
    id: "raveen-revathi-wedding",
    title: "Raveen & Revathi | Luxury Interactive Wedding Portal",
    category: "Web Development",
    categoryKey: "web",
    clientType: "Events & Digital Invitations",
    description:
      "An exquisite, bespoke digital wedding invitation platform featuring opulent typography, interactive event timelines, venue navigation integration, photo memory albums, and digital RSVP capture.",
    techStack: ["React", "Vite", "Tailwind CSS", "Cinzel Typography", "Netlify"],
    metrics: [
      { label: "Load Speed", value: "0.6s" },
      { label: "Mobile Experience", value: "100% Fluid" },
      { label: "Design Style", value: "Luxury Gold" },
    ],
    deliverables: [
      "Interactive Multi-Event Schedule & Countdown",
      "Integrated Google Maps Venue Navigation",
      "Photo Memories & Story Showcase",
      "Digital RSVP & Wishes Registry",
    ],
    mockupBg: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)",
    badgeText: "Live Event Build",
    demoUrl: "https://raveenrevathiwedding.netlify.app/",
  },
  {
    id: "sai-stark-bucket-list",
    title: "Sai Stark | 78 Ultimate Life Experiences Tracker",
    category: "Custom Software",
    categoryKey: "software",
    clientType: "Personal Brand & Milestones App",
    description:
      "A high-performance interactive web application and milestone tracking platform managing 78 extreme adventures, high-altitude expeditions, and travel dreams with live SVG progress analytics and dynamic search.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    metrics: [
      { label: "Milestones Tracked", value: "78 Goals" },
      { label: "Analytics", value: "Real-Time SVG" },
      { label: "UI Theme", value: "Glassmorphic Dark" },
    ],
    deliverables: [
      "Real-Time Circular Progress Visualizer",
      "Dynamic Category Filters & Instant Search",
      "Secured Admin Portal Authentication",
      "High-Resolution Moments Photo Gallery",
    ],
    mockupBg: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
    badgeText: "Live Web Application",
    demoUrl: "https://saistark.smbmitra.com/",
  },
  {
    id: "ecommerce-storefront",
    title: "High-Speed Retail E-Commerce Portal",
    category: "Web Development",
    categoryKey: "web",
    clientType: "Fashion & Retail SMB",
    description:
      "A headless Next.js e-commerce application built for maximum mobile speed, instant catalog filter searching, and seamless WhatsApp Checkout integration.",
    techStack: ["Next.js 14", "Tailwind CSS", "TypeScript", "Razorpay", "WhatsApp API"],
    metrics: [
      { label: "PageSpeed Score", value: "98/100" },
      { label: "Load Time", value: "0.8s" },
      { label: "Mobile Checkout", value: "3-Step" },
    ],
    deliverables: [
      "Custom UI/UX Design System",
      "Dynamic Product Search & Filter",
      "Instant WhatsApp Order Receiver",
      "Payment Gateway Integration",
    ],
    mockupBg: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
    badgeText: "Web Dev Prototype",
  },
  {
    id: "smb-erp-inventory",
    title: "SMB Inventory & Billing ERP Dashboard",
    category: "Custom Software",
    categoryKey: "software",
    clientType: "Wholesale & Distribution",
    description:
      "A streamlined cloud-based web application enabling small business owners to track inventory levels, issue GST invoices, and monitor daily revenue in real-time.",
    techStack: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "Chart.js"],
    metrics: [
      { label: "Invoice Time", value: "< 15s" },
      { label: "Offline Sync", value: "Supported" },
      { label: "Multi-User", value: "Role-Based" },
    ],
    deliverables: [
      "Real-Time Stock Counter",
      "One-Click Automated GST Invoicing",
      "Role-Based Employee Access",
      "Daily Profit & Loss Analytics",
    ],
    mockupBg: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    badgeText: "Software Prototype",
  },
  {
    id: "healthcare-clinic-funnel",
    title: "Multi-Specialty Clinic Lead Engine",
    category: "Performance Ads",
    categoryKey: "ads",
    clientType: "Healthcare & Dental Clinic",
    description:
      "High-converting landing page paired with Meta & Google Ads campaign strategy engineered to capture qualified local patient appointments predictably.",
    techStack: ["Google Ads", "Meta Ads", "Next.js", "Form CRM", "Twilio SMS"],
    metrics: [
      { label: "Conv. Rate Target", value: "14.2%" },
      { label: "Lead Response", value: "< 5 Mins" },
      { label: "Tracking", value: "Server-Side API" },
    ],
    deliverables: [
      "High-Trust Mobile Landing Page",
      "Localized Geo-Targeted Meta Ads",
      "Instant Lead SMS & WhatsApp Alert",
      "Automated Appointment Scheduler",
    ],
    mockupBg: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    badgeText: "Lead Gen Engine",
  },
  {
    id: "realestate-lead-portal",
    title: "Property Showcase & Lead Automation Portal",
    category: "Local SEO",
    categoryKey: "seo",
    clientType: "Real Estate & Commercial Builders",
    description:
      "SEO-structured property listing showcase engineered to rank on Google for localized high-intent buyer searches and instantly route lead inquiries.",
    techStack: ["Next.js", "Schema.org Markup", "Tailwind CSS", "Local SEO"],
    metrics: [
      { label: "Schema Validation", value: "100% Passed" },
      { label: "Core Web Vitals", value: "All Green" },
      { label: "Mobile Score", value: "99/100" },
    ],
    deliverables: [
      "Localized Keyword Optimization",
      "Interactive Property Floor Plans",
      "Google Business Profile Sync",
      "Automated Buyer Inquiry CRM",
    ],
    mockupBg: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
    badgeText: "SEO & Web Prototype",
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.categoryKey === activeFilter);

  return (
    <section className="py-16 sm:py-24 bg-white" aria-label="Portfolio and build showcase">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {[
            { label: "All Works", key: "all" },
            { label: "Web Development", key: "web" },
            { label: "Custom Software", key: "software" },
            { label: "Performance Ads", key: "ads" },
            { label: "Local SEO", key: "seo" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.1}>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                {/* Visual Header / Mockup Banner */}
                <div
                  className="p-8 sm:p-10 relative overflow-hidden text-white flex flex-col justify-between min-h-[220px]"
                  style={{ background: item.mockupBg }}
                >
                  <div className="flex items-center justify-between z-10 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/20">
                        {item.badgeText}
                      </span>
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/25 hover:bg-white/40 text-white backdrop-blur-md transition-colors border border-white/30"
                          title="Open Live Website"
                        >
                          <Globe size={12} /> Live Site ↗
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-white/80">
                      {item.clientType}
                    </span>
                  </div>

                  <div className="z-10 mt-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-medium">
                      {item.category}
                    </p>
                  </div>

                  {/* Decorative background element */}
                  <div
                    className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full opacity-20 pointer-events-none"
                    style={{ background: "rgba(255,255,255,0.4)" }}
                  />
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                      {item.description}
                    </p>

                    {/* Benchmark Metrics Bar */}
                    <div className="grid grid-cols-3 gap-2 p-4 rounded-2xl bg-white border border-slate-200 mb-6 text-center">
                      {item.metrics.map((m, i) => (
                        <div key={i}>
                          <p className="text-base sm:text-lg font-extrabold text-slate-900">
                            {m.value}
                          </p>
                          <p className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Key Deliverables */}
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-3">
                      Built Deliverables
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {item.deliverables.map((del, i) => (
                        <li
                          key={i}
                          className="flex items-center text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-blue-600 mr-2 shrink-0"
                          />
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills & CTA */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-200 text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                          Live Site <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-[#1E40AF] hover:text-blue-800 shrink-0 group-hover:translate-x-1 transition-transform"
                      >
                        Request Similar Build <ArrowRight size={14} className="ml-1" />
                      </Link>
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

