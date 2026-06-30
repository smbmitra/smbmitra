import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, CheckCircle, Database, HelpCircle } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';

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
            {/* Hero */}
            <section className="container mx-auto px-4 sm:px-6 max-w-5xl pt-10 sm:pt-14 mb-16 sm:mb-24">
                <FadeUp>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F97316] font-semibold text-sm mb-5 sm:mb-6 border border-orange-100">
                        <Code size={16} aria-hidden="true" /> Scalable Architecture
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 sm:mb-6 leading-[1.1] tracking-tight">
                        Software That Bends to{' '}
                        <br className="hidden md:block" />
                        Your Business Rules.
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                        Stop forcing your business rules to fit into off-the-shelf SaaS apps. We
                        build custom dashboards, data management tools, and CRMs that match exactly
                        how your company operates.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#E06512] text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        Discuss Your App Idea <ArrowRight size={20} aria-hidden="true" />
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

            {/* FAQ */}
            <section
                className="container mx-auto px-4 sm:px-6 max-w-3xl mb-14 sm:mb-20 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm bg-white"
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
                                    <HelpCircle size={20} className="text-[#F97316] shrink-0 mt-0.5" aria-hidden="true" />
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
                You own the code from day one.{' '}
                <Link href="/contact" className="text-[#F97316] hover:underline font-bold">
                    Let&apos;s talk tech.
                </Link>
            </FadeUp>
        </div>
    );
}
