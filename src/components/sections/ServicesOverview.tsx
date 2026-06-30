"use client";

import Link from "next/link";
import { Monitor, TrendingUp, Search, Code, ArrowRight } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { motion, Variants } from "framer-motion";

const services = [
    {
        title: "Website Development",
        description: "Lightning-fast, mobile-first websites optimized for conversions. Built on Next.js or WordPress.",
        icon: <Monitor size={30} aria-hidden="true" />,
        accent: "#1E40AF",
        accentLight: "rgba(30,64,175,0.12)",
        href: "/services/website-development",
    },
    {
        title: "Performance Marketing",
        description: "Data-driven Google Ads and Meta Ads campaigns focused on exact ROI, not just vanity clicks.",
        icon: <TrendingUp size={30} aria-hidden="true" />,
        accent: "#F97316",
        accentLight: "rgba(249,115,22,0.12)",
        href: "/services/performance-marketing",
    },
    {
        title: "SEO Mastery",
        description: "Dominate local search results. We get your business correctly structured for Google.",
        icon: <Search size={30} aria-hidden="true" />,
        accent: "#1E40AF",
        accentLight: "rgba(30,64,175,0.12)",
        href: "/services/seo-services",
    },
    {
        title: "Custom Software",
        description: "Tailor-made CRMs, secure dashboards, and operational tools explicitly for your workflow.",
        icon: <Code size={30} aria-hidden="true" />,
        accent: "#F97316",
        accentLight: "rgba(249,115,22,0.12)",
        href: "/services/custom-software",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } },
};

export default function ServicesOverview() {
    return (
        <section
            className="py-24 sm:py-32 relative overflow-hidden"
            style={{ background: "#ffffff" }}
            aria-label="Core services"
        >
            {/* Section top accent line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full"
                aria-hidden="true"
                style={{ background: "linear-gradient(90deg, #1E40AF, #F97316)" }}
            />

            {/* Background mesh */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "radial-gradient(ellipse 60% 40% at 10% 20%, rgba(30,64,175,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 30% at 90% 80%, rgba(249,115,22,0.05) 0%, transparent 60%)",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between mb-16 sm:mb-20 lg:items-end">
                    <FadeUp className="max-w-2xl">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 text-white"
                            style={{ background: "linear-gradient(135deg, #1E40AF, #2563eb)" }}
                        >
                            Core Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                            End-to-end digital{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(135deg, #1E40AF, #F97316)" }}
                            >
                                mastery.
                            </span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15} className="max-w-md">
                        <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
                            We unify development, marketing, and software into a single powerhouse designed to scale SMBs predictably.
                        </p>
                    </FadeUp>
                </div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants} className="group h-full">
                            <Link
                                href={service.href}
                                className="flex flex-col h-full rounded-2xl p-6 sm:p-8 transition-all duration-500 border hover:-translate-y-3 relative overflow-hidden"
                                style={{
                                    background: "#ffffff",
                                    borderColor: "rgba(226,232,240,0.8)",
                                    boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                                }}
                                aria-label={`Learn more about ${service.title}`}
                            >
                                {/* Hover background */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: `linear-gradient(135deg, ${service.accentLight} 0%, transparent 60%)` }}
                                    aria-hidden="true"
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-1 relative z-10 shrink-0"
                                    style={{
                                        background: service.accentLight,
                                        color: service.accent,
                                    }}
                                >
                                    {service.icon}
                                </div>

                                <div className="relative z-10 flex flex-col flex-grow">
                                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed font-medium text-sm sm:text-base">
                                        {service.description}
                                    </p>
                                    <div
                                        className="flex items-center font-bold text-sm mt-auto transition-colors duration-300"
                                        style={{ color: service.accent }}
                                    >
                                        Learn more
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                                    </div>
                                </div>

                                {/* Bottom accent border on hover */}
                                <div
                                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                    style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
                                    aria-hidden="true"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
