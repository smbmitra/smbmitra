import { Metadata } from 'next';
import { Target, Users, Zap, TrendingUp, ShieldCheck, Globe, CheckCircle2, XCircle, ArrowRight, Code2, Cpu, Rocket } from 'lucide-react';
import Link from 'next/link';
import { FadeUp } from '@/components/animations/FadeUp';
import AboutHeroParallax from '@/components/sections/AboutHeroParallax';

export const metadata: Metadata = {
    title: 'About Us | Engineering Digital Growth | SMB Mitra',
    description:
        'SMB Mitra is a modern digital growth agency. We combine high-performance web development, precision performance marketing, and bespoke software for growing businesses.',
    alternates: {
        canonical: 'https://smbmitra.com/about',
    },
    openGraph: {
        title: 'About SMB Mitra | Digital Growth Agency for Modern SMBs',
        description:
            'We launched SMB Mitra after watching startups and growing businesses get burned by expensive agencies that over-promised and under-delivered.',
        url: 'https://smbmitra.com/about',
    },
};

const values = [
    {
        title: 'Radical Transparency',
        desc: 'We show you exactly where your budget goes. No hidden markups, zero opaque agency reporting, and direct access to live dashboards.',
        icon: <Target size={24} aria-hidden="true" />,
    },
    {
        title: 'Revenue over Vanity Metrics',
        desc: 'We optimize for qualified leads, paying customers, and positive unit economics—not empty impressions or cosmetic clicks.',
        icon: <TrendingUp size={24} aria-hidden="true" />,
    },
    {
        title: 'Direct Founder & Engineering Access',
        desc: 'No junior account managers or endless ticketing queues. You collaborate directly with experienced technical builders.',
        icon: <Users size={24} aria-hidden="true" />,
    },
    {
        title: 'High-Velocity Execution',
        desc: 'We move with startup agility. Prototypes in days, campaigns launched in hours, and rapid A/B iterations to beat competitors.',
        icon: <Zap size={24} aria-hidden="true" />,
    },
    {
        title: 'Uncompromising Code Quality',
        desc: 'Sub-second page speeds, clean Next.js architectures, strict accessibility, and enterprise-grade security on every deployment.',
        icon: <Code2 size={24} aria-hidden="true" />,
    },
    {
        title: 'Strict Commercial Integrity',
        desc: "If an ad channel or feature doesn't make commercial sense for your business, we tell you upfront and reallocate resources.",
        icon: <ShieldCheck size={24} aria-hidden="true" />,
    },
];

const comparisonData = [
    {
        feature: 'Communication & Access',
        traditional: 'Account managers passing messages to offshore interns',
        smbMitra: 'Direct WhatsApp & video access to technical founders',
    },
    {
        feature: 'Technology Stack',
        traditional: 'Bloated WordPress templates with slow plugins',
        smbMitra: 'Modern Next.js, React & Tailwind with sub-second loads',
    },
    {
        feature: 'Focus & Incentives',
        traditional: 'Selling hours and billable retainers regardless of results',
        smbMitra: 'Outcome-driven milestones and measurable customer acquisition',
    },
    {
        feature: 'Source Code & Ownership',
        traditional: 'Vendor lock-in with proprietary restrictive platforms',
        smbMitra: '100% Client ownership of all code, assets & accounts',
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero — Parallax Section */}
            <AboutHeroParallax />

            {/* Mission Statement */}
            <section className="py-16 sm:py-20 bg-white relative overflow-hidden" aria-label="Our mission">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <FadeUp className="bg-slate-50 p-8 sm:p-12 md:p-16 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E40AF] mb-6 shrink-0 shadow-sm">
                            <Target size={30} aria-hidden="true" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Our Core Mission
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
                            To empower ambitious small and medium businesses with enterprise-grade web engineering, high-converting digital marketing, and automated software—
                            <strong className="text-slate-900 font-bold"> without agency overhead, jargon, or lock-in contracts.</strong>
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Why Traditional Agencies Fail vs How We Work */}
            <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200" aria-label="Why Choose Us">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    <FadeUp className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#1E40AF]">
                            The Agency Problem
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
                            Why Traditional Agencies Fall Short
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg font-medium">
                            Most agencies are structured to maximize their own retainers, not your bottom line. Here is how we do things differently.
                        </p>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Traditional Agency Card */}
                        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-rose-150 shadow-sm">
                            <div className="flex items-center gap-2.5 text-rose-600 font-bold text-lg mb-6 pb-4 border-b border-slate-100">
                                <XCircle size={22} />
                                <span>Traditional Agencies</span>
                            </div>
                            <ul className="space-y-4">
                                {comparisonData.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                                        <div>
                                            <strong className="text-slate-800 block text-xs uppercase tracking-wider mb-0.5">{item.feature}</strong>
                                            <span>{item.traditional}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SMB Mitra Card */}
                        <div className="p-7 sm:p-9 rounded-3xl bg-[#0F172A] text-white border border-slate-700 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-60 h-60 rounded-full pointer-events-none opacity-20 blur-2xl" style={{ background: '#3b82f6' }} />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-lg mb-6 pb-4 border-b border-slate-800">
                                    <CheckCircle2 size={22} />
                                    <span>The SMB Mitra Standard</span>
                                </div>
                                <ul className="space-y-4">
                                    {comparisonData.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                                            <span className="text-emerald-400 font-bold mt-0.5 shrink-0">✓</span>
                                            <div>
                                                <strong className="text-blue-300 block text-xs uppercase tracking-wider mb-0.5">{item.feature}</strong>
                                                <span>{item.smbMitra}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Operating Principles */}
            <section className="py-16 sm:py-24 bg-white" aria-label="Our operating principles">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <FadeUp className="text-center mb-12 sm:mb-16">
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#1E40AF]">
                            Our Principles
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
                            How We Deliver Predictable Results
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                            These aren&apos;t just slogans on a wall. This is how we write code, manage budgets, and engineer growth every day.
                        </p>
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {values.map((val, i) => (
                            <FadeUp key={i} delay={Math.min(i * 0.08, 0.4)}>
                                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-white text-slate-700 group-hover:text-[#1E40AF] flex items-center justify-center mb-5 shadow-sm border border-slate-200 transition-colors shrink-0">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                                        {val.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium text-xs sm:text-sm">
                                        {val.desc}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 sm:py-20 text-center relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)',
                }}
                aria-label="Contact us"
            >
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10 text-white">
                    <FadeUp>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                            Ready to Meet Your New Growth Team?
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                            Stop paying retainers for vanity reports. Start investing in predictable customer acquisition and high-converting technology.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg shadow-orange-950/20 hover:-translate-y-0.5 transition-all text-sm sm:text-base cursor-pointer"
                        >
                            Request Free Growth Audit <ArrowRight size={18} />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
