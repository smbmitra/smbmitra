"use client";

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            service: formData.get('service'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSubmitStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 relative">
            {submitStatus === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl mb-6 font-medium"
                >
                    Message sent successfully! We will get back to you within 24 hours.
                </motion.div>
            )}

            {submitStatus === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl mb-6 font-medium"
                >
                    An error occurred. Please try again or email us directly at smbmitra1@gmail.com.
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input id="name" name="name" type="text" required placeholder="Arun B" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input id="company" name="company" type="text" placeholder="Your Business Pvt Ltd" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all shadow-sm" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input id="email" name="email" type="email" required placeholder="contact@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                    <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Interest Area *</label>
                    <div className="relative">
                        <select id="service" name="service" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all shadow-sm text-slate-700 font-medium appearance-none">
                            <option value="">Select a service...</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Performance Marketing">Performance Marketing</option>
                            <option value="SEO Services">SEO Services</option>
                            <option value="Custom Software">Custom Software</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Project Details *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell us about your goals, current challenges, and timeline..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all shadow-sm resize-none"></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white font-bold text-lg py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 active:translate-y-0"
            >
                {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <><Send size={20} /> Request Free Consultation</>}
            </button>
        </form>
    );
}
