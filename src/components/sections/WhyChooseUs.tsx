"use client";

import { CheckCircle, BarChart3, Zap, ShieldCheck, Target } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const benefits = [
    {
        title: "No Tech Jargon",
        desc: "We speak the language of ROI and business growth, not confusing acronyms.",
        icon: <Zap size={22} aria-hidden="true" />,
        accent: "#F97316",
    },
    {
        title: "Transparent Metrics",
        desc: "You see exactly where every rupee goes and the exact leads it produces.",
        icon: <BarChart3 size={22} aria-hidden="true" />,
        accent: "#1E40AF",
    },
    {
        title: "Built to Scale",
        desc: "Our Next.js architectures ensure your site won't break when traffic spikes.",
        icon: <Target size={22} aria-hidden="true" />,
        accent: "#F97316",
    },
    {
        title: "Dedicated Support",
        desc: "Direct access to the founders. No ticketing queues or robotic agencies.",
        icon: <ShieldCheck size={22} aria-hidden="true" />,
        accent: "#1E40AF",
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], prefersReducedMotion ? [1, 1] : [0.88, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.25], prefersReducedMotion ? [1, 1] : [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="py-24 sm:py-32 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #F1F5F9 0%, #e8eef6 100%)" }}
            aria-label="Why choose SMB Mitra"
        >
            {/* Decorative elements */}
            <div
                className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                aria-hidden="true"
                style={{
                    background: "radial-gradient(circle, rgba(30,64,175,0.08) 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
                aria-hidden="true"
                style={{
                    background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
                    transform: "translate(-30%, 30%)",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 text-white"
                            style={{ background: "linear-gradient(135deg, #F97316, #fb923c)" }}>
                            The SMB Mitra Difference
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                            We operate as your{" "}
                            <span className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(135deg, #1E40AF, #F97316)" }}>
                                outsourced growth
                            </span>{" "}
                            department.
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Most agencies simply build and walk away. We engineer long-term technical and marketing solutions designed explicitly to drive local revenue.
                        </p>
                    </FadeUp>
                </div>

                {/* Benefit cards */}
                <motion.div
                    style={{ scale, opacity }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 relative z-10 will-change-transform"
                >
                    {benefits.map((benefit, i) => (
                        <div
                            key={i}
                            className="group relative p-8 sm:p-10 rounded-3xl border border-white/80 hover:border-transparent transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
                            style={{
                                background: "rgba(255,255,255,0.7)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                            }}
                        >
                            {/* Hover gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                                style={{
                                    background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)`,
                                    boxShadow: `inset 0 0 0 1px ${benefit.accent}30`,
                                }}
                                aria-hidden="true"
                            />

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shrink-0"
                                style={{ background: `${benefit.accent}15`, color: benefit.accent }}
                            >
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 relative z-10">
                                {benefit.title}
                            </h3>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium relative z-10">
                                {benefit.desc}
                            </p>

                            <div
                                className="mt-6 flex items-center font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-sm relative z-10"
                                style={{ color: benefit.accent }}
                            >
                                Standard Included <CheckCircle size={16} className="ml-2" aria-hidden="true" />
                            </div>

                            {/* Left accent bar */}
                            <div
                                className="absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: benefit.accent }}
                                aria-hidden="true"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
