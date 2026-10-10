import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';
import FAQAccordion from '@/components/sections/FAQAccordion';

export const metadata: Metadata = {
    title: 'Performance Marketing Services | Google & Meta Ads | SMB Mitra',
    description:
        'Data-driven Google Ads and Meta Ads campaigns focused on ROI, not just clicks. Grow your business predictably with our performance marketing experts.',
    alternates: {
        canonical: 'https://smbmitra.com/services/performance-marketing',
    },
    openGraph: {
        title: 'Performance Marketing | Google & Meta Ads | SMB Mitra',
        description:
            'Stop buying clicks. Start buying customers. ROI-focused campaigns for Indian SMBs.',
        url: 'https://smbmitra.com/services/performance-marketing',
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
                    "name": "Performance Marketing",
                    "item": "https://smbmitra.com/services/performance-marketing"
                }
            ]
        },
        {
            "@type": "Service",
            "name": "Performance Marketing & Paid Ads (Google & Meta Ads)",
            "serviceType": "Paid Advertising",
            "description": "Targeted Google Ads, Meta Ads (Facebook & Instagram), retargeting, and conversion rate optimization for small and medium businesses.",
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
    { step: '01', title: 'Audience Research' },
    { step: '02', title: 'Creative & Copy' },
    { step: '03', title: 'A/B Testing' },
    { step: '04', title: 'Scaling Winners' },
];

const benefits = [
    'Hyper-targeted Google Search intents.',
    'High-converting Meta Video creatives.',
    'Advanced retargeting pixel setup.',
    'Custom real-time reporting dashboards.',
];

const faqs = [
    {
        q: 'What is the minimum ad budget needed?',
        a: 'We recommend a minimum of ₹15,000/month in ad spend to generate statistically meaningful data and optimize effectively.',
    },
    {
        q: 'How do you measure success?',
        a: 'We track Cost Per Lead (CPL), Return on Ad Spend (ROAS), and conversion rates — never vanity metrics like reach or impressions.',
    },
];

export default function PerformanceMarketingPage() {
    return (
        <div className="pb-20 sm:pb-24 bg-white min-h-screen">
            <Script
                id="performance-marketing-schema"
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
                            <TrendingUp size={15} className="text-[#F97316]" aria-hidden="true" /> ROI-Focused Campaigns
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                            Stop Buying Clicks.{' '}
                            <br className="hidden sm:block" />
                            Start Buying <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #F97316)' }}>Customers.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl leading-relaxed font-medium">
                            We build and manage data-driven Google Ads and Meta (Facebook &amp;
                            Instagram) campaigns that track every rupee spent straight to your
                            bottom line. No vanity metrics, just revenue.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-slate-900"
                            style={{ background: 'linear-gradient(135deg, #F97316, #fb923c)', boxShadow: '0 0 20px rgba(249,115,22,0.3)' }}
                        >
                            Audit My Current Ads <ArrowRight size={20} aria-hidden="true" />
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
                            Businesses bleeding money on basic &quot;Boost Post&quot; buttons, and
                            companies tired of paying agencies that report on
                            &quot;Impressions&quot; instead of &quot;Sales Qualified Leads.&quot;
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
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-50 text-[#F97316] font-bold text-xl sm:text-2xl rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-orange-100 group-hover:scale-110 transition-transform">
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
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24" aria-label="Performance advantage">
                <FadeUp>
                    <div className="bg-[#0F172A] text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                            aria-hidden="true"
                            style={{
                                background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
                                transform: 'translate(30%, -30%)',
                            }}
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white relative z-10">
                            The Performance Advantage
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-[#F97316] shrink-0 mt-0.5" size={20} aria-hidden="true" />
                                    <span className="text-slate-200 text-sm sm:text-base">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeUp>
            </section>

            {/* Custom Scope & Ad Audit Banner */}
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24" aria-label="Performance marketing audit">
                <FadeUp>
                    <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/40 border border-orange-200 p-8 sm:p-12 rounded-3xl text-center shadow-sm relative overflow-hidden">
                        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-200 text-[#F97316]">
                            ROI &amp; CPL Optimization
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                            Get a Free Growth &amp; Ad Account Audit
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                            Stop guessing which ads work. We analyze your existing Google or Meta ad spend, search queries, conversion tracking, and Cost Per Lead (CPL) to give you an actionable roadmap.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 transition-all"
                            >
                                Request Free 20-Min Ad Audit
                            </Link>
                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm sm:text-base transition-all"
                            >
                                Explore Live Case Studies ↗
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
                        title="Performance Ads FAQs"
                        subtitle="Answers to common questions regarding minimum ad spend, campaign setup, and ROAS expectations."
                    />
                </FadeUp>
            </section>

            <FadeUp className="text-center font-semibold text-slate-600 text-sm sm:text-base px-4">
                Need a landing page that converts these clicks? Check out{' '}
                <Link href="/services/website-development" className="text-[#1E40AF] hover:underline font-bold">
                    Web Development
                </Link>
                .
            </FadeUp>
        </div>
    );
}
