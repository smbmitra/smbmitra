import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
} from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/smb_mitra?igsh=dHE1M2t1anlhZXlq&utm_source=qr",
    icon: Instagram,
    hoverColor: "#E1306C",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/smbmitra",
    icon: Facebook,
    hoverColor: "#1877F2",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/smbmitra",
    icon: Linkedin,
    hoverColor: "#0A66C2",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/smbmitra",
    icon: Twitter,
    hoverColor: "#1DA1F2",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-slate-300"
      style={{
        background: "linear-gradient(180deg, #0F172A 0%, #080f1d 100%)",
      }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(30,64,175,0.5), rgba(249,115,22,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(30,64,175,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-14 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            {/* Logo in white pill — works regardless of logo background */}
            <Link href="/" className="inline-block" aria-label="SMB Mitra Home">
              <div
                className="inline-flex items-center justify-center rounded-xl px-3 py-2 transition-transform hover:scale-105"
                style={{ background: "rgba(255,255,255,0.95)" }}
              >
                <Image
                  src="/logo.png"
                  alt="SMB Mitra — Digital Marketing & IT Solutions"
                  width={160}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              We build websites, run performance marketing, and develop custom
              software that helps SMBs generate leads and scale predictably.
            </p>

            {/* Social links */}
            <div className="flex gap-3 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  aria-label={`Follow SMB Mitra on ${label}`}
                >
                  <Icon
                    size={16}
                    className="text-slate-400 hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-bold mb-5 text-xs uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span
                      className="w-0 group-hover:w-2.5 h-px transition-all duration-300"
                      style={{ background: "#F97316" }}
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-bold mb-5 text-xs uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Website Development",
                  href: "/services/website-development",
                },
                { label: "SEO Mastery", href: "/services/seo-services" },
                {
                  label: "Performance Marketing",
                  href: "/services/performance-marketing",
                },
                { label: "Custom Software", href: "/services/custom-software" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span
                      className="w-0 group-hover:w-2.5 h-px transition-all duration-300"
                      style={{ background: "#1E40AF" }}
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-bold mb-5 text-xs uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(249,115,22,0.15)" }}
                >
                  <MapPin
                    className="shrink-0"
                    size={14}
                    style={{ color: "#F97316" }}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-slate-400 text-sm">
                  Jangaon, Telangana, India.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(30,64,175,0.15)" }}
                >
                  <Phone
                    className="shrink-0"
                    size={14}
                    style={{ color: "#60a5fa" }}
                    aria-hidden="true"
                  />
                </div>
                <a
                  href="tel:+919502335120"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  +91 95023 35120
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(30,64,175,0.15)" }}
                >
                  <Mail
                    className="shrink-0"
                    size={14}
                    style={{ color: "#60a5fa" }}
                    aria-hidden="true"
                  />
                </div>
                <a
                  href="mailto:contact@smbmitra.com"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  contact@smbmitra.com
                </a>
              </li>
            </ul>

            {/* <div
              className="mt-5 p-4 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Business Hours
              </p>
              <p className="text-xs text-slate-400">
                Mon – Fri: 9:00 AM – 6:00 PM
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Sat: 10:00 AM – 2:00 PM
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex items-center justify-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs text-slate-500 text-center">
            &copy; {currentYear} SMB Mitra. All rights reserved. Built with ♥ in
            Telangana, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
