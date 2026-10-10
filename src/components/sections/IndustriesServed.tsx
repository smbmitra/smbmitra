"use client";

import { Home, Stethoscope, GraduationCap, ShoppingBag, Briefcase, Factory } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";

const industries = [
    { name: "Clinics & Healthcare", icon: <Stethoscope size={26} aria-hidden="true" />, desc: "Patient acquisition pipelines tailored for local doctors and clinics.", accent: "#1E40AF" },
    { name: "Real Estate Developers", icon: <Home size={26} aria-hidden="true" />, desc: "High-ticket lead generation and stunning property showcases.", accent: "#F97316" },
    { name: "Educational Institutes", icon: <GraduationCap size={26} aria-hidden="true" />, desc: "Admission funnels and trust-building digital presences.", accent: "#1E40AF" },
    { name: "Retail & E-commerce", icon: <ShoppingBag size={26} aria-hidden="true" />, desc: "Conversion-optimized storefronts and local footfall campaigns.", accent: "#F97316" },
    { name: "Consultants & Services", icon: <Briefcase size={26} aria-hidden="true" />, desc: "Authority-driven websites and appointment booking systems.", accent: "#1E40AF" },
    { name: "Manufacturing Hubs", icon: <Factory size={26} aria-hidden="true" />, desc: "B2B catalog portals and international organic SEO.", accent: "#F97316" },
];

export default function IndustriesServed() {
    return (
        <section
            className="py-20 sm:py-24 relative overflow-hidden"
            style={{ background: "#ffffff" }}
            aria-label="Industries we serve"
        >
            {/* Top divider */}
            <div
                className="absolute top-0 left-0 w-full h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(30,64,175,0.2), rgba(249,115,22,0.2), transparent)" }}
                aria-hidden="true"
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-blue-50 text-[#1E40AF] border border-blue-200/80">
                            Industry Frameworks
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.15]">
                            Engineered for Your Specific Industry.
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                            Generic marketing fails because it lacks industry context. We deploy proven, sector-specific frameworks designed to capture high-intent customers in your market.
                        </p>
                    </FadeUp>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {industries.map((ind, i) => (
                        <FadeUp key={i} delay={Math.min(i * 0.07, 0.35)}>
                            <div
                                className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 group h-full flex flex-col hover:-translate-y-1"
                                style={{
                                    background: "#ffffff",
                                    borderColor: "rgba(226,232,240,0.8)",
                                    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                                }}
                            >
                                <div
                                    className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 shrink-0"
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        background: `${ind.accent}12`,
                                        color: ind.accent,
                                    }}
                                >
                                    {ind.icon}
                                </div>
                                <h3
                                    className="font-bold text-slate-900 text-lg sm:text-xl mb-2 sm:mb-3 tracking-tight group-hover:text-[#1E40AF] transition-colors duration-200"
                                >
                                    {ind.name}
                                </h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                                    {ind.desc}
                                </p>

                                {/* Bottom accent line */}
                                <div
                                    className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                                    style={{ background: `linear-gradient(90deg, ${ind.accent}, transparent)` }}
                                    aria-hidden="true"
                                />
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
