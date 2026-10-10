import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Code, CheckCircle, Database, HelpCircle } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';
import FAQAccordion from '@/components/sections/FAQAccordion';

export const metadata: Metadata = {
    title: 'Custom Software Development for SMBs | SMB Mitra',
    description:
        'Tailor-made CRMs, internal dashboards, and operational tools designed explicitly for your workflow. Own your software from day one.',
    alternates: {
        canonical: 'https://smbmitra.com/services/custom-software',
    },
    openGraph: {
        title: 'Custom Software Development for SMBs | SMB Mitra',
        description:
            'Stop forcing your business rules into off-the-shelf SaaS. Get software that bends to your workflow.',
        url: 'https://smbmitra.com/services/custom-software',
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
                    "name": "Custom Software",
                    "item": "https://smbmitra.com/services/custom-software"
                }
            ]
        },
        {
            "@type": "Service",
            "name": "Custom Software & Business Automation Development",
            "serviceType": "Software Development",
            "description": "Tailored ERP systems, custom CRMs, internal management dashboards, and workflow automation for growing businesses.",
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
    { step: '01', title: 'System Blueprint' },
    { step: '02', title: 'Architecture' },
    { step: '03', title: 'Agile Coding' },
    { step: '04', title: 'Deployment' },
];

const benefits = [
    { icon: CheckCircle, text: 'Modern Next.js & React Frontends.' },
    { icon: Database, text: 'Secure Node.js & Python Backends.' },
    { icon: CheckCircle, text: 'Scaleable Postgres & NoSQL Databases.' },
    { icon: CheckCircle, text: 'Enterprise-grade security standards.' },
];

const faqs = [
    {
        q: 'Do I own the source code?',
        a: 'Yes, 100%. We hand you the full codebase, with documentation, upon project completion. No vendor lock-in, ever.',
    },
    {
        q: 'Can you integrate with our existing tools?',
        a: 'Absolutely. We build seamless API integrations with Zoho, Tally, WhatsApp Business, payment gateways, and most popular SaaS platforms.',
    },
];

export default function CustomSoftwarePage() {
    return (
        <div className="pb-20 sm:pb-24 bg-white min-h-screen">
            <Script
                id="custom-software-schema"
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
                            <Code size={15} className="text-[#60a5fa]" aria-hidden="true" /> Scalable Architecture
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                            Software Built Explicitly for{' '}
                            <br className="hidden md:block" />
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #F97316)' }}>Your Business Rules.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl leading-relaxed font-medium">
                            Stop forcing your operational rules to fit into restrictive off-the-shelf SaaS. We
                            build custom dashboards, ERPs, client portals, and billing tools that match exactly
                            how your business operates.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-slate-900"
                            style={{ background: 'linear-gradient(135deg, #F97316, #fb923c)', boxShadow: '0 0 20px rgba(249,115,22,0.3)' }}
                        >
                            Discuss Your Application <ArrowRight size={20} aria-hidden="true" />
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
                            Growing SMBs dealing with a mess of Excel spreadsheets, companies
                            paying for expensive enterprise software they only use 10% of, and
                            founders looking to digitize their operations.
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
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24" aria-label="Technical excellence">
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
                            Technical Excellence
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <benefit.icon className="text-[#F97316] shrink-0 mt-0.5" size={20} aria-hidden="true" />
                                    <span className="text-slate-200 text-sm sm:text-base">{benefit.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeUp>
            </section>

            {/* Custom Scope & Architecture Discovery Banner */}
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24" aria-label="Custom software consultation">
                <FadeUp>
                    <div className="bg-gradient-to-br from-orange-50/70 to-slate-50 border border-orange-200 p-8 sm:p-12 rounded-3xl text-center shadow-sm relative overflow-hidden">
                        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-200 text-[#F97316]">
                            100% Code Ownership &amp; IP Transfer
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                            Build Custom Operational Tools That Bend to Your Workflow
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                            Tell us what processes slow your team down. We design a secure, custom PostgreSQL / Next.js architecture tailored to your exact business rules with complete source code handover.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 transition-all"
                            >
                                Discuss Your Architecture
                            </Link>
                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm sm:text-base transition-all"
                            >
                                View Live Web Apps ↗
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
                        title="Custom Software FAQs"
                        subtitle="Answers on IP ownership, system architecture, database security, and post-deployment maintenance."
                    />
                </FadeUp>
            </section>

            <FadeUp className="text-center font-semibold text-slate-600 text-sm sm:text-base px-4">
                You own the code from day one.{' '}
                <Link href="/contact" className="text-[#F97316] hover:underline font-bold">
                    Let&apos;s talk tech.
                </Link>
            </FadeUp>
        </div>
    );
}
