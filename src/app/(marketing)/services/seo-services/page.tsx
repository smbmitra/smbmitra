import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, CheckCircle, HelpCircle } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';

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
            {/* Hero */}
            <section className="container mx-auto px-4 sm:px-6 max-w-5xl pt-10 sm:pt-14 mb-16 sm:mb-24">
                <FadeUp>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#1E40AF] font-semibold text-sm mb-5 sm:mb-6 border border-blue-100">
                        <Search size={16} aria-hidden="true" /> Organic Growth Engine
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                        Dominate Your Local Market on Google.
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                        When your customers search for your services, they shouldn&apos;t find your
                        competitor. We build robust Local and National SEO campaigns that guarantee
                        long-term, free organic traffic.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-[#152c7a] text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        Request SEO Audit <ArrowRight size={20} aria-hidden="true" />
                    </Link>
                </FadeUp>
            </section>

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

            {/* FAQ */}
            <section
                className="container mx-auto px-4 sm:px-6 max-w-3xl mb-14 sm:mb-20 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm bg-white"
                aria-label="Frequently asked questions"
            >
                <FadeUp>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center tracking-tight">
                        SEO Facts You Should Know
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
                Want immediate results while SEO kicks in? Let&apos;s talk{' '}
                <Link href="/services/performance-marketing" className="text-[#1E40AF] hover:underline font-bold">
                    Performance Marketing
                </Link>
                .
            </FadeUp>
        </div>
    );
}
