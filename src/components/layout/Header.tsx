"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const subServices = [
    { name: "Website Development", href: "/services/website-development" },
    { name: "Performance Marketing", href: "/services/performance-marketing" },
    { name: "SEO Mastery", href: "/services/seo-services" },
    { name: "Custom Software", href: "/services/custom-software" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesHovered, setServicesHovered] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMobileMenu();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [closeMobileMenu]);

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/98 backdrop-blur-xl py-3 shadow-sm border-b border-slate-200/80"
                    : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0" aria-label="SMB Mitra Home">
                        <Image
                            src="/logo.png"
                            alt="SMB Mitra — Digital Marketing & IT Solutions"
                            width={180}
                            height={45}
                            className="w-auto h-8 md:h-10 object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-700 hover:text-[#F97316] transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Desktop Services Dropdown */}
                        <div
                            className="relative flex items-center"
                            onMouseEnter={() => setServicesHovered(true)}
                            onMouseLeave={() => setServicesHovered(false)}
                        >
                            <Link
                                href="/services"
                                className="text-sm font-semibold text-slate-700 hover:text-[#F97316] transition-colors duration-200 flex items-center gap-1 py-4"
                                aria-haspopup="true"
                                aria-expanded={servicesHovered}
                            >
                                Services
                                <ChevronDown
                                    size={14}
                                    className={`transform transition-transform duration-200 ${servicesHovered ? "rotate-180 text-[#F97316]" : ""}`}
                                />
                            </Link>

                            <AnimatePresence>
                                {servicesHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white shadow-xl rounded-2xl border border-slate-100 py-2 flex flex-col z-50"
                                        role="menu"
                                        aria-label="Services submenu"
                                    >
                                        <div className="px-4 py-2 border-b border-slate-100 mb-1">
                                            <Link
                                                href="/services"
                                                className="text-xs font-bold text-[#F97316] uppercase tracking-widest hover:underline"
                                                role="menuitem"
                                            >
                                                All Services
                                            </Link>
                                        </div>
                                        {subServices.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-[#1E40AF] hover:bg-blue-50 transition-colors duration-150"
                                                role="menuitem"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/contact"
                            className="bg-[#1E40AF] hover:bg-[#152c7a] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ml-2 whitespace-nowrap"
                        >
                            Get Consultation
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] rounded-lg p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav — rendered as a sibling outside header to avoid overflow clipping */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/30 z-40 md:hidden"
                            onClick={closeMobileMenu}
                            aria-hidden="true"
                        />

                        {/* Drawer */}
                        <motion.nav
                            id="mobile-nav"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 md:hidden flex flex-col"
                            aria-label="Mobile navigation"
                        >
                            {/* Mobile Nav Header */}
                            <div className="flex items-center justify-between p-5 border-b border-slate-100">
                                <Image
                                    src="/logo.png"
                                    alt="SMB Mitra"
                                    width={140}
                                    height={36}
                                    className="h-8 w-auto object-contain"
                                />
                                <button
                                    onClick={closeMobileMenu}
                                    className="text-slate-500 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] rounded-lg p-1"
                                    aria-label="Close navigation menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-1 overflow-y-auto py-4 px-5">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center py-3.5 text-base font-semibold text-slate-800 hover:text-[#F97316] border-b border-slate-50 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {/* Mobile Services Accordion */}
                                <div className="border-b border-slate-50">
                                    <button
                                        className="flex items-center justify-between w-full py-3.5 text-left text-base font-semibold text-slate-800 hover:text-[#F97316] transition-colors"
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        aria-expanded={mobileServicesOpen}
                                    >
                                        Services
                                        <ChevronDown
                                            size={18}
                                            className={`transform transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#F97316]" : ""}`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.22, ease: "easeOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col pl-4 pb-3 space-y-2">
                                                    <Link
                                                        href="/services"
                                                        className="text-sm font-bold text-[#F97316] pt-2"
                                                        onClick={closeMobileMenu}
                                                    >
                                                        View All Services →
                                                    </Link>
                                                    {subServices.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            className="text-sm font-medium text-slate-600 hover:text-[#1E40AF] py-1 transition-colors"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="p-5 border-t border-slate-100">
                                <Link
                                    href="/contact"
                                    className="flex justify-center items-center w-full bg-[#1E40AF] hover:bg-[#152c7a] text-white px-5 py-3.5 rounded-xl text-base font-bold shadow-md transition-colors duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Get Free Consultation
                                </Link>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
