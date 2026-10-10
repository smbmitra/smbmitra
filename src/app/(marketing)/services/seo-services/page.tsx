import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Search, CheckCircle, HelpCircle } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';
import FAQAccordion from '@/components/sections/FAQAccordion';

export const metadata: Metadata = {
    title: 'SEO Mastery for Small Businesses | Local SEO | SMB Mitra',
    description:
        'Dominate Google search results and Google Maps. Our SEO strategies bring high-intent organic traffic to your website.',
    alternates: {
        canonical: 'https://smbmitra.com/services/seo-services',
    },
    openGraph: {
        title: 'SEO Mastery for SMBs | Local SEO Services | SMB Mitra',
        description:
            'Rank higher on Google with proven local and technical SEO strategies tailored for Indian small businesses.',
        url: 'https://smbmitra.com/services/seo-services',
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://smbmitra.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://smbmitra.com/services"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "SEO Services",
                    "item": "https://smbmitra.com/services/seo-services"
                }
            ]
        },
        {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO) & Google Maps Growth",
            "serviceType": "SEO Services",
            "description": "Technical SEO, on-page optimization, content strategy, and Google Business Profile management for SMBs.",
            "provider": {
                "@type": "LocalBusiness",
                "name": "SMB Mitra",
                "url": "https://smbmitra.com",
                "telephone": "+91-9502335120",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Jangaon",
                    "addressRegion": "Telangana",
                    "postalCode": "506167",
                    "addressCountry": "IN"
                }
            },
            "areaServed": "IN"
        }
    ]
};

const steps = [
    { step: '01', title: 'Technical Audit' },
    { step: '02', title: 'Keyword Strategy' },
    { step: '03', title: 'On-Page Fixes' },
    { step: '04', title: 'Content & Links' },
];

const benefits = [
    'Local SEO & Google My Business optimization.',
    'Deep technical site audit & Core Web Vitals.',
    'Authority content strategy & link building.',
    'Schema markup for rich search results.',
];

const faqs = [
    {
        q: 'How long does SEO take?',
        a: 'SEO is a marathon, not a sprint. You will generally start seeing noticeable movement in generic rankings between month 3 and 6.',
    },
    {
        q: 'Do you guarantee rank #1?',
        a: 'No reputable agency guarantees position #1. We guarantee using Google-approved white-hat techniques that will significantly lift your visibility and traffic quality.',
    },
];

export default function SEOServicesPage() {
    return (
        <div className="pb-20 sm:pb-24 bg-white min-h-screen">
            <Script
                id="seo-services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            {/* Dark hero */}
            <div
                className="relative -mx-4 sm:-mx-6 mb-16 sm:mb-20 px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)' }}
            >
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />
                <div className="relative z-10 max-w-5xl mx-auto">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/80 font-bold text-xs uppercase tracking-wider mb-5 sm:mb-6">
                            <Search size={15} className="text-[#60a5fa]" aria-hidden="true" /> Organic Growth Engine
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                            Dominate High-Intent Search on{' '}
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #F97316)' }}>
                                Google.
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl leading-relaxed font-medium">
                            When potential buyers search for your services, they shouldn&apos;t find your
                            competitors. We build robust Local &amp; National SEO campaigns that secure
                            long-term, zero-cost customer acquisition.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-slate-900"
                            style={{ background: 'linear-gradient(135deg, #F97316, #fb923c)', boxShadow: '0 0 20px rgba(249,115,22,0.3)' }}
                        >
                            Request Free SEO Audit <ArrowRight size={20} aria-hidden="true" />
                        </Link>
                    </FadeUp>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
                    <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10">
                        <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
                    </svg>
                </div>
            </div>

            {/* Who is this for */}
            <section className="bg-slate-50 py-14 sm:py-20 mb-16 sm:mb-24" aria-label="Target audience">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <FadeUp>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 sm:mb-6 text-center tracking-tight">
                            Who is this for?
                        </h2>
                        <p className="text-base sm:text-lg text-slate-700 text-center max-w-2xl mx-auto leading-relaxed">
                            Perfect for local service providers, real estate developers, and
                            clinics who rely on &quot;near me&quot; searches, as well as B2B companies
                            looking to build long-term authority.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Process */}
            <section className="container mx-auto px-4 sm:px-6 max-w-5xl mb-16 sm:mb-24" aria-label="Our process">
                <FadeUp>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 sm:mb-12 text-center tracking-tight">
                        The SMB Mitra Process
                    </h2>
                </FadeUp>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                    {steps.map((item, i) => (
                        <FadeUp key={i} delay={i * 0.08}>
                            <div className="text-center group border border-slate-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 bg-white">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-[#1E40AF] font-bold text-xl sm:text-2xl rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-100 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base md:text-lg leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24" aria-label="SEO advantages">
                <FadeUp>
                    <div className="bg-[#0F172A] text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                            aria-hidden="true"
                            style={{
                                background: 'radial-gradient(circle, rgba(30,64,175,0.2) 0%, transparent 70%)',
                                transform: 'translate(30%, -30%)',
                            }}
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white relative z-10">
                            The SEO Advantage
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1E40AF] shrink-0 mt-0.5" size={20} aria-hidden="true" />
                                    <span className="text-slate-200 text-sm sm:text-base">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeUp>
            </section>

            {/* Custom Scope & Local Rank Audit Banner */}
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24" aria-label="SEO rank audit">
                <FadeUp>
                    <div className="bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-200 p-8 sm:p-12 rounded-3xl text-center shadow-sm relative overflow-hidden">
                        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-200 text-[#1E40AF]">
                            Google Maps &amp; Local Visibility
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                            Dominate Your Local &quot;Near Me&quot; Searches
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                            Find out exactly how your business ranks against nearby competitors on Google Maps and organic search. We provide a complimentary Local Search Audit with zero obligations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1E40AF] hover:bg-[#152c7a] text-white font-bold text-sm sm:text-base shadow-lg hover:-translate-y-0.5 transition-all"
                            >
                                Get Free Local Rank Audit
                            </Link>
                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm sm:text-base transition-all"
                            >
                                View Verified Results ↗
                            </Link>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-14 sm:mb-20" aria-label="Frequently asked questions">
                <FadeUp>
                    <FAQAccordion
                        faqs={faqs}
                        title="SEO Facts &amp; Expectations"
                        subtitle="Honest insights into ranking timelines, Google Maps optimization, and sustainable organic traffic."
                    />
                </FadeUp>
            </section>

            <FadeUp className="text-center font-semibold text-slate-600 text-sm sm:text-base px-4">
                Want immediate results while SEO kicks in? Let&apos;s talk{' '}
                <Link href="/services/performance-marketing" className="text-[#1E40AF] hover:underline font-bold">
                    Performance Marketing
                </Link>
                .
            </FadeUp>
        </div>
    );
}
