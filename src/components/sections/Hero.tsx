"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "50+", label: "SMBs Served" },
    { value: "3×", label: "Avg Lead Growth" },
    { value: "24h", label: "Response Time" },
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, prefersReducedMotion ? 1 : 0]);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1a2d6b 45%, #0F172A 100%)" }}
        >
            {/* Animated background orbs */}
            <div
                className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse-glow"
                aria-hidden="true"
                style={{
                    background: "radial-gradient(circle, rgba(30,64,175,0.3) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
            />
            <div
                className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none animate-pulse-glow"
                aria-hidden="true"
                style={{
                    background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
                    filter: "blur(50px)",
                    animationDelay: "1.5s",
                }}
            />
            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                aria-hidden="true"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center py-20 sm:py-24 pb-24 will-change-transform"
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs sm:text-sm font-bold text-white/80 mb-8 sm:mb-10"
                >
                    <span className="flex h-2.5 w-2.5 relative shrink-0" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                    </span>
                    Now Launching for SMBs in India
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 sm:mb-8 text-white"
                >
                    Helping Local Businesses Grow with{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #F97316)" }}
                    >
                        Reliable Digital
                    </span>{" "}
                    Solutions.
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    We build websites, run performance marketing, and develop custom
                    software that help businesses generate leads and scale sustainably.
                    No jargon. Just ROI.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20"
                >
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1 transition-all duration-300 text-slate-900"
                        style={{ background: "linear-gradient(135deg, #f97316, #fb923c)", boxShadow: "0 0 30px rgba(249,115,22,0.4)" }}
                    >
                        Get Free Consultation <ArrowRight size={20} aria-hidden="true" />
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-bold text-base sm:text-lg flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore Services
                    </Link>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-row items-center justify-center gap-8 sm:gap-16 pt-6 border-t border-white/10"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
                            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Wave divider at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" />
                </svg>
            </div>
        </section>
    );
}
