"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/animations/FadeUp";

export default function AboutHeroParallax() {
    const heroRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [1, 0]);

    return (
        <section
            ref={heroRef}
            className="relative py-24 sm:py-28 lg:py-36 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)" }}
            aria-label="About SMB Mitra"
        >
            {/* Orbs */}
            <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full pointer-events-none animate-pulse-glow"
                aria-hidden="true"
                style={{ background: "radial-gradient(circle, rgba(30,64,175,0.25) 0%, transparent 70%)", filter: "blur(40px)" }}
            />
            <div className="absolute bottom-1/3 -right-24 w-64 h-64 rounded-full pointer-events-none animate-pulse-glow"
                aria-hidden="true"
                style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)", filter: "blur(40px)", animationDelay: "1.5s" }}
            />
            {/* Grid pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center will-change-transform"
            >
                <FadeUp>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 font-bold text-xs sm:text-sm uppercase tracking-widest mb-7 sm:mb-8">
                        The SMB Mitra Story
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-8 leading-[1.08] tracking-tight">
                        We champion the businesses that{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #F97316)" }}
                        >
                            drive the economy.
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
                        We launched SMB Mitra after watching startups and local businesses
                        get burned by expensive, slow-moving agencies that over-promised and
                        under-delivered.
                    </p>
                </FadeUp>
            </motion.div>

            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#F8FAFC" />
                </svg>
            </div>
        </section>
    );
}
