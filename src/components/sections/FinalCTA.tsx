"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [80, 0]
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? [1, 1] : [0.93, 1]
    );

    return (
        <section
            ref={sectionRef}
            className="py-20 lg:py-32 relative overflow-hidden bg-[#F8FAFC]"
            aria-label="Call to action"
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <motion.div
                    style={{ y, scale }}
                    className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-[0_30px_80px_-20px_rgba(15,23,42,0.4)] border border-slate-800 will-change-transform"
                >
                    {/* Background glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                        aria-hidden="true"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(30,64,175,0.35) 0%, transparent 70%)",
                            mixBlendMode: "screen",
                        }}
                    />

                    <FadeUp className="relative z-10">
                        {/* Label */}
                        <div className="inline-block px-4 py-2 border border-white/10 bg-white/5 rounded-full text-white font-bold text-xs sm:text-sm tracking-widest uppercase mb-8 sm:mb-10 backdrop-blur-md">
                            Let&apos;s Scale Together
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-white mb-6 sm:mb-8 leading-[1.08] tracking-tight max-w-4xl mx-auto">
                            Stop losing customers to your{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #F97316, #fb923c)",
                                }}
                            >
                                competitors.
                            </span>
                        </h2>

                        {/* Subtext */}
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 sm:mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                            Your business deserves an online presence that works as hard as
                            you do. Connect with SMB Mitra for your free digital audit and
                            growth playbook.
                        </p>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                            <Link
                                href="/contact"
                                className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-slate-900 text-base sm:text-lg font-extrabold flex items-center justify-center gap-3 sm:gap-4 overflow-hidden shadow-[0_0_40px_-5px_rgba(255,255,255,0.25)] hover:shadow-[0_0_60px_-5px_rgba(255,255,255,0.45)] hover:scale-105 transition-all duration-500"
                            >
                                <span className="relative z-10">Start Your Growth Journey</span>
                                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-100 rounded-full flex items-center justify-center relative z-10 group-hover:bg-[#1E40AF] group-hover:text-white transition-colors duration-300 shrink-0">
                                    <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                                </div>
                                {/* Shine sweep — uses CSS animation defined in globals.css */}
                                <span
                                    className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[25deg] opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none z-0"
                                    aria-hidden="true"
                                    style={{ left: "-50%" }}
                                />
                            </Link>
                        </div>
                    </FadeUp>
                </motion.div>
            </div>
        </section>
    );
}
