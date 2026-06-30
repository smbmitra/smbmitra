import { Metadata } from 'next';
import { Target, Users, Zap, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FadeUp } from '@/components/animations/FadeUp';
import AboutHeroParallax from '@/components/sections/AboutHeroParallax';

export const metadata: Metadata = {
    title: 'About Us | The SMB Mitra Story',
    description:
        'SMB Mitra champions small and medium businesses across India with premium digital marketing, web development, and custom software. Based in Jangaon, Telangana.',
    alternates: {
        canonical: 'https://smbmitra.com/about',
    },
    openGraph: {
        title: 'About SMB Mitra | Digital Growth Agency for Indian SMBs',
        description:
            'We launched SMB Mitra after watching startups and local businesses get burned by expensive agencies that over-promised and under-delivered.',
        url: 'https://smbmitra.com/about',
    },
};

const values = [
    {
        title: 'Radical Transparency',
        desc: 'We show you exactly where your budget goes. No hidden fees, no opaque agency reporting.',
        icon: <Target size={26} aria-hidden="true" />,
    },
    {
        title: 'Revenue over Vanity',
        desc: 'We care about qualified leads and sustainable growth—not just thousands of empty traffic clicks.',
        icon: <TrendingUp size={26} aria-hidden="true" />,
    },
    {
        title: 'Long-term Partnership',
        desc: 'We act as your outsourced tech and marketing department. Your local growth is our growth.',
        icon: <Users size={26} aria-hidden="true" />,
    },
    {
        title: 'Speed of Execution',
        desc: 'We move at the agile speed of local business. No bureaucratic delays or ticketing queues.',
        icon: <Zap size={26} aria-hidden="true" />,
    },
    {
        title: 'Uncompromising Integrity',
        desc: "If a strategy isn't working, we tell you immediately and pivot. Total honesty, always.",
        icon: <ShieldCheck size={26} aria-hidden="true" />,
    },
    {
        title: 'Hyper-Local Focus',
        desc: 'Based in Jangaon with a deep understanding of what drives the Indian SMB consumer.',
        icon: <MapPin size={26} aria-hidden="true" />,
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero — parallax handled in a separate client sub-component */}
            <AboutHeroParallax />

            {/* Mission Section */}
            <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F1F5F9 0%, #e8eef6 100%)' }} aria-label="Our mission">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <FadeUp className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 shadow-inner border border-slate-100 flex items-center justify-center text-[#1E40AF] mb-6 sm:mb-8 shrink-0">
                            <Target size={36} aria-hidden="true" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                            Our Core Mission
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-medium">
                            To democratize premium digital growth strategies, high-conversion
                            web development, and custom software for small and medium
                            businesses across India—
                            <strong className="text-slate-900">without the corporate jargon.</strong>
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Core Values */}
            <section
                className="py-16 sm:py-24 relative overflow-hidden"
                style={{ background: '#ffffff' }}
                aria-label="Our operating principles"
            >
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <FadeUp className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                            Our Operating Principles
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                            These aren&apos;t just words on a wall. This is how we write code,
                            manage ad budgets, and communicate with partners every single day.
                        </p>
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {values.map((val, i) => (
                            <FadeUp key={i} delay={Math.min(i * 0.08, 0.4)}>
                                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-blue-200 transition-colors duration-300 group h-full flex flex-col">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white text-slate-700 group-hover:text-[#1E40AF] flex items-center justify-center mb-5 sm:mb-6 shadow-sm border border-slate-100 transition-colors duration-200 shrink-0">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
                                        {val.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
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
                className="py-16 sm:py-24 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #F1F5F9 0%, #e8eef6 100%)' }}
                aria-label="Contact us"
            >
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    <FadeUp>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                            Ready to meet your new growth team?
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 font-medium">
                            Stop paying retainers for reports. Start paying for ROI.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
                        >
                            Apply for a Free Audit
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
