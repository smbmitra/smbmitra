"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, prefersReducedMotion ? 1 : 0]);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-[95vh] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1a2d6b 45%, #0F172A 100%)" }}
        >
            {/* Animated background orbs */}
            <div
                className="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full pointer-events-none animate-pulse-glow"
                aria-hidden="true"
                style={{
                    background: "radial-gradient(circle, rgba(30,64,175,0.3) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
            />
            <div
                className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full pointer-events-none animate-pulse-glow"
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
                className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center py-6 sm:py-10 pb-14 sm:pb-16 my-auto flex flex-col items-center justify-center will-change-transform"
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-bold text-white/90 mb-4 sm:mb-5"
                >
                    <span className="flex h-2 w-2 relative shrink-0" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    Now Launching for SMBs in India
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.14] mb-4 sm:mb-5 text-white max-w-3xl"
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    We build websites, run performance marketing, and develop custom
                    software that help businesses generate leads and scale sustainably.
                    No jargon. Just ROI.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
                >
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-slate-900"
                        style={{ background: "linear-gradient(135deg, #f97316, #fb923c)", boxShadow: "0 0 24px rgba(249,115,22,0.35)" }}
                    >
                        Get Free Consultation <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-bold text-sm sm:text-base flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Explore Services
                    </Link>
                </motion.div>
            </motion.div>

            {/* Wave divider at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12">
                    <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
                </svg>
            </div>
        </section>
    );
}
