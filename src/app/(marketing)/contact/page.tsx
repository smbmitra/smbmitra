import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us | Start Growing Your Business | SMB Mitra',
    description:
        'Ready to scale? Contact the SMB Mitra team today for web development, marketing, and software solutions targeting the Indian market.',
    alternates: {
        canonical: 'https://smbmitra.com/contact',
    },
    openGraph: {
        title: 'Contact SMB Mitra | Free Consultation',
        description:
            'Get your free digital audit and growth playbook. We respond within 24 hours.',
        url: 'https://smbmitra.com/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="pb-20 sm:pb-28 bg-white min-h-screen relative overflow-hidden">
            {/* Background glow */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        'radial-gradient(ellipse at 100% 0%, rgba(30,64,175,0.08) 0%, transparent 65%)',
                    transform: 'translate(20%, -20%)',
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Dark hero header */}
                <div
                    className="relative -mx-4 sm:-mx-6 mb-12 sm:mb-16 px-4 sm:px-6 py-20 sm:py-24 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)' }}
                >
                    <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
                        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                    />
                    <div className="text-center max-w-4xl mx-auto relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-5 sm:mb-6">
                            Let&apos;s Build Something{' '}
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #F97316)' }}>
                                Great
                            </span>{' '}
                            Together
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Fill out the form below, and our team will get back to you within 24 hours.
                            No pressure, no jargon, just pure strategy tailored for your SMB.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
                        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-10">
                            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#F8FAFC" />
                        </svg>
                    </div>
                </div>

                {/* Contact card */}
                <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
                    {/* Form side */}
                    <div className="p-8 sm:p-10 lg:p-14 xl:p-16 lg:w-[60%] bg-white">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                            Send Us a Message
                        </h2>
                        <p className="text-slate-500 font-medium mb-8 sm:mb-10 text-sm sm:text-base">
                            You&apos;re one step away from predictable digital growth.
                        </p>
                        <ContactForm />
                    </div>

                    {/* Info side */}
                    <div className="bg-[#0F172A] text-white p-8 sm:p-10 lg:p-14 xl:p-16 lg:w-[40%] flex flex-col border-t lg:border-t-0 lg:border-l border-slate-800 relative overflow-hidden">
                        {/* Glow */}
                        <div
                            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
                            aria-hidden="true"
                            style={{
                                background:
                                    'radial-gradient(circle, rgba(30,64,175,0.2) 0%, transparent 70%)',
                                transform: 'translate(30%, -30%)',
                            }}
                        />

                        <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 relative z-10">
                            Direct Contact
                        </h2>

                        <ul className="space-y-7 sm:space-y-10 relative z-10 flex-grow">
                            <li className="flex items-start gap-4 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#1E40AF]/30 transition-colors duration-300">
                                    <MapPin className="text-slate-300 group-hover:text-white transition-colors" size={22} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1.5 text-base sm:text-lg">
                                        Our Operations
                                    </h3>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                                        Jangaon, Telangana,
                                        <br />
                                        India.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#F97316]/30 transition-colors duration-300">
                                    <Mail className="text-slate-300 group-hover:text-white transition-colors" size={22} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1.5 text-base sm:text-lg">Email Us</h3>
                                    <a
                                        href="mailto:smbmitra1@gmail.com"
                                        className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base font-medium"
                                    >
                                        smbmitra1@gmail.com
                                    </a>
                                    <p className="text-xs text-[#1E40AF] font-bold tracking-widest uppercase mt-2">
                                        24/7 Monitoring
                                    </p>
                                </div>
                            </li>
                        </ul>

                        {/* Business hours */}
                        <div className="mt-10 sm:mt-12 relative z-10 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                            <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                                Business Hours
                            </h3>
                            <div className="flex justify-between text-slate-400 text-xs sm:text-sm font-medium mb-2">
                                <span>Mon – Fri:</span>
                                <span>9:00 AM – 6:00 PM</span>
                            </div>
                            <div className="flex justify-between text-slate-400 text-xs sm:text-sm font-medium">
                                <span>Saturday:</span>
                                <span>10:00 AM – 2:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
