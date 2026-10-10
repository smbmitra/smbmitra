import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import CookieConsent from "@/components/layout/CookieConsent";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://smbmitra.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Marketing & Web Development for SMBs | SMB Mitra",
    template: "%s | SMB Mitra",
  },
  description:
    "SMB Mitra helps small and medium businesses grow with custom website development, high-ROI performance marketing, local SEO, and bespoke software solutions. Request a free growth audit.",
  keywords: [
    "digital marketing agency India",
    "website development for small businesses",
    "local SEO services India",
    "Google Ads management India",
    "Meta Ads for SMBs",
    "performance marketing agency",
    "custom software development India",
    "business automation software",
    "Next.js web development",
    "SMB Mitra",
  ],
  authors: [{ name: "SMB Mitra", url: SITE_URL }],
  creator: "SMB Mitra",
  publisher: "SMB Mitra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "SMB Mitra",
    title: "Digital Marketing & Web Development for SMBs | SMB Mitra",
    description:
      "We build high-converting websites, manage ROI-driven performance marketing, and engineer custom software for ambitious businesses.",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "SMB Mitra — Digital Growth for Modern Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Web Development for SMBs | SMB Mitra",
    description:
      "Websites, performance marketing & custom software for growing businesses.",
    images: [`${SITE_URL}/logo.png`],
    creator: "@smbmitra",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/logo-favicon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo-favicon.png",
    apple: "/logo-favicon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "SMB Mitra",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      email: "contact@smbmitra.com",
      telephone: "+91-9502335120",
      sameAs: [
        "https://www.instagram.com/smb_mitra",
        "https://www.facebook.com/smbmitra",
        "https://www.linkedin.com/company/smbmitra",
        "https://twitter.com/smbmitra",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jangaon",
        addressRegion: "Telangana",
        postalCode: "506167",
        addressCountry: "IN",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "SMB Mitra — Digital Marketing & IT Solutions",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      email: "contact@smbmitra.com",
      telephone: "+91-9502335120",
      priceRange: "₹₹",
      currenciesAccepted: "INR, USD",
      paymentAccepted: "Bank Transfer, UPI, Credit Card, Razorpay",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jangaon",
        addressRegion: "Telangana",
        postalCode: "506167",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.7228,
        longitude: 79.1527,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "14:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SMB Mitra Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description: "Custom, mobile-first responsive websites built with Next.js and React.",
              url: `${SITE_URL}/services/website-development`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Engine Optimization (SEO)",
              description: "Local SEO, Google Business Profile optimization, and technical SEO.",
              url: `${SITE_URL}/services/seo-services`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance Marketing",
              description: "Targeted Google Ads and Meta Ads management focused on ROI and lead generation.",
              url: `${SITE_URL}/services/performance-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description: "Tailor-made CRMs, ERP dashboards, and operational workflow automation tools.",
              url: `${SITE_URL}/services/custom-software`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "SMB Mitra",
      description: "Digital Marketing & IT Solutions for Small Businesses",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ background: "#ffffff", color: "#0F172A" }}
      >
        <Header />
        {/* pt-20 = header height on mobile; md:pt-[76px] = desktop header height */}
        <main className="flex-grow pt-20 md:pt-[76px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
