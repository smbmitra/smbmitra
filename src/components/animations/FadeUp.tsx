"use client";

import { motion, useInView } from "framer-motion";
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
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getVariants = () => {
        switch (direction) {
            case "down": return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
            case "left": return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
            case "right": return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
            case "up":
            default: return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
