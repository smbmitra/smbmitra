import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HelpCircle, Monitor } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';

export const metadata: Metadata = {
    title: 'Website Development for Local Businesses & SMBs | SMB Mitra',
    description:
        'Get a lightning-fast, highly-converting website customized for your brand. We build WordPress and React sites that turn visitors into paying clients.',
    alternates: {
        canonical: 'https://smbmitra.com/services/website-development',
    },
    openGraph: {
        title: 'Website Development for SMBs | SMB Mitra',
        description:
            'Lightning-fast, mobile-first websites built on Next.js or WordPress that generate leads on autopilot.',
        url: 'https://smbmitra.com/services/website-development',
    },
};

const steps = [
    { step: '01', title: 'Discovery & Strategy' },
    { step: '02', title: 'UX/UI Wireframing' },
    { step: '03', title: 'Custom Development' },
    { step: '04', title: 'SEO Setup & Launch' },
];

const benefits = [
    'Mobile-first architecture out of the box.',
    'Sub-second load times using modern frameworks.',
    'Built-in local SEO foundation for Google.',
    'Easy-to-manage Content Management System (CMS).',
];

const faqs = [
    {
        q: 'How long does it take to build?',
        a: 'A standard 5-page business website takes 2 to 3 weeks from strategy to go-live, depending on how quickly you provide feedback.',
    },
    {
        q: 'Do I own the website entirely?',
        a: 'Yes, 100%. Once the project is complete and paid for, you retain full ownership of the code, domain, and hosting.',
    },
];

export default function WebsiteDevelopmentPage() {
    return (
        <div className="pb-20 sm:pb-24 bg-white min-h-screen">
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 font-semibold text-sm mb-5 sm:mb-6">
                        <Monitor size={16} aria-hidden="true" /> Digital Storefronts
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                        We Don&apos;t Just Build Websites.{' '}
                        <br className="hidden md:block" />
                        We Build <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #F97316)' }}>Sales Engines.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                        Your website shouldn&apos;t just look pretty—it should act as your best
                        24/7 salesperson. We build lightning-fast, conversion-focused websites
                        that bring you leads on autopilot.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-slate-900"
                        style={{ background: 'linear-gradient(135deg, #F97316, #fb923c)', boxShadow: '0 0 20px rgba(249,115,22,0.3)' }}
                    >
                        Get a Free Quote <ArrowRight size={20} aria-hidden="true" />
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
                            Perfect for clinics, real estate firms, hardware manufacturers, and
                            local service providers who are tired of outdated websites that
                            don&apos;t reflect their real-world credibility and, most importantly,
                            don&apos;t generate any leads.
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
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24" aria-label="Why our websites perform better">
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
                            Why Our Websites Perform Better
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

            {/* FAQ */}
            <section
                className="container mx-auto px-4 sm:px-6 max-w-3xl mb-16 sm:mb-20 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm bg-white"
                aria-label="Frequently asked questions"
            >
                <FadeUp>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-5 sm:space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i}>
                                <h3 className="flex items-start gap-2 font-bold text-base sm:text-lg text-slate-800">
                                    <HelpCircle size={20} className="text-[#1E40AF] shrink-0 mt-0.5" aria-hidden="true" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 pl-7 mt-2 text-sm sm:text-base leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </section>

            <FadeUp className="text-center font-semibold text-slate-600 text-sm sm:text-base px-4">
                Need traffic for your new site? Check out our{' '}
                <Link href="/services/seo-services" className="text-[#1E40AF] hover:underline font-bold">
                    SEO Services
                </Link>
                .
            </FadeUp>
        </div>
    );
}
