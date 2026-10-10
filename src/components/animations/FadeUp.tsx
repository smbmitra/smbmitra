"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function FadeUp({
    children,
    delay = 0,
    className = "",
    direction = "up"
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
    const prefersReducedMotion = useReducedMotion();

    const getVariants = () => {
        if (prefersReducedMotion) {
            return {
                hidden: { opacity: 1, y: 0, x: 0 },
                visible: { opacity: 1, y: 0, x: 0 }
            };
        }
        switch (direction) {
            case "down": return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
            case "left": return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
            case "right": return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
            case "up":
            default: return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: prefersReducedMotion ? 0 : delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

