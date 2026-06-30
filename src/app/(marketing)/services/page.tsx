import { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, TrendingUp, Search, CheckCircle, Code, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';

export const metadata: Metadata = {
    title: 'Our Services | SEO, Web Development & Marketing | SMB Mitra',
    description:
        'Explore our full suite of services tailored for Indian SMBs: Website Development, SEO, Google Ads, Social Media, and Custom Software.',
    alternates: {
        canonical: 'https://smbmitra.com/services',
    },
    openGraph: {
        title: 'Our Services | SMB Mitra',
        description:
            'End-to-end digital solutions for Indian SMBs — websites, SEO, performance marketing, and custom software.',
        url: 'https://smbmitra.com/services',
    },
};

const services = [
    {
        title: 'Website Development',
        slug: 'website-development',
        description:
            "Lightning-fast, mobile-first websites optimized for conversions. We don't just build pages; we build digital storefronts that sell.",
        points: ['Next.js & React Applications', 'High-Converting Landing Pages', 'E-Commerce & WordPress Solutions'],
        icon: <Monitor size={44} className="transition-colors duration-300" aria-hidden="true" />,
        iconBg: 'bg-blue-50 text-[#1E40AF] group-hover:bg-[#1E40AF] group-hover:text-white',
    },
    {
        title: 'Performance Marketing',
        slug: 'performance-marketing',
        description:
            'Data-driven Google Ads and Meta Ads campaigns. We focus on exact ROI and qualified leads, not just vanity clicks and impressions.',
        points: ['Google Search & Performance Max', 'Facebook & Instagram Lead Gen', 'Advanced Retargeting Campaigns'],
        icon: <TrendingUp size={44} className="transition-colors duration-300" aria-hidden="true" />,
        iconBg: 'bg-orange-50 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white',
    },
    {
        title: 'SEO Mastery',
        slug: 'seo-services',
        description:
            'Dominate local and national search results. We get your business correctly structured to capture high-intent Google searches.',
        points: ['Local SEO & GMB Optimization', 'Deep Technical SEO', 'Authority Content Strategy'],
        icon: <Search size={44} className="transition-colors duration-300" aria-hidden="true" />,
        iconBg: 'bg-blue-50 text-[#1E40AF] group-hover:bg-[#1E40AF] group-hover:text-white',
    },
    {
        title: 'Custom Software',
        slug: 'custom-software',
        description:
            'Tailor-made CRMs, secure dashboards, and operational tools designed explicitly to streamline your unique business workflow.',
        points: ['Custom Web Applications', 'Internal Business Dashboards', 'Seamless API Integrations'],
        icon: <Code size={44} className="transition-colors duration-300" aria-hidden="true" />,
        iconBg: 'bg-orange-50 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white',
    },
];

export default function ServicesPage() {
    return (
        <div className="pb-20 sm:pb-28 bg-slate-50 min-h-screen relative overflow-hidden">
            {/* Background accent */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
                aria-hidden="true"
                style={{
                    background: 'radial-gradient(ellipse at 100% 0%, rgba(30,64,175,0.07) 0%, transparent 65%)',
                    transform: 'translate(20%, -20%)',
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Page header */}
                {/* Page hero */}
                <div
                    className="relative -mx-4 sm:-mx-6 mb-16 sm:mb-20 px-4 sm:px-6 py-20 sm:py-24 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)' }}
                >
                    <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
                        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                    />
                    <div className="text-center max-w-4xl mx-auto relative z-10">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 font-bold text-xs uppercase tracking-widest mb-5 sm:mb-6">
                            Our Capabilities
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-[1.08]">
                            Everything You Need to Scale{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #F97316)' }}
                            >
                                Predictably.
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                            End-to-end engineered solutions designed explicitly for the budgets,
                            goals, and speed of small to medium-sized businesses.
                        </p>
                    </FadeUp>
                    </div>
                    {/* Wave divider */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
                        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10">
                            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#F8FAFC" />
                        </svg>
                    </div>
                </div>

                {/* Service cards */}
                <div className="space-y-8 sm:space-y-10 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <FadeUp key={index} delay={index * 0.08}>
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    aria-hidden="true"
                                    style={{ background: 'linear-gradient(to right, transparent, rgba(248,250,252,0.9))' }}
                                />

                                {/* Icon */}
                                <div
                                    className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 rounded-3xl flex items-center justify-center ${service.iconBg} transition-all duration-500 shadow-inner group-hover:shadow-lg relative z-10 group-hover:scale-105`}
                                >
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-grow relative z-10">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-medium">
                                        {service.description}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-7 sm:mb-8">
                                        {service.points.map((point, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-3 text-slate-700 font-semibold text-sm bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100"
                                            >
                                                <CheckCircle size={16} className="text-[#1E40AF] shrink-0" aria-hidden="true" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group/btn text-sm sm:text-base"
                                    >
                                        Explore Capabilities{' '}
                                        <ArrowRight
                                            size={17}
                                            className="group-hover/btn:translate-x-0.5 transition-transform"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </div>
    );
}
