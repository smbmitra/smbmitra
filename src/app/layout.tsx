import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

const SITE_URL = 'https://smbmitra.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Digital Marketing & IT Solutions for Small Businesses in India | SMB Mitra',
    template: '%s | SMB Mitra',
  },
  description:
    'We build websites, run performance marketing, and develop custom software that helps SMBs generate leads and scale predictably. Get a free consultation.',
  keywords: [
    'digital marketing India',
    'SMB marketing',
    'website development India',
    'SEO services India',
    'performance marketing',
    'custom software development',
    'small business digital solutions',
    'Jangaon Telangana',
    'Google Ads India',
    'Meta Ads India',
  ],
  authors: [{ name: 'SMB Mitra', url: SITE_URL }],
  creator: 'SMB Mitra',
  publisher: 'SMB Mitra',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'SMB Mitra',
    title: 'Digital Marketing & IT Solutions for Small Businesses in India | SMB Mitra',
    description:
      'We build websites, run performance marketing, and develop custom software that helps SMBs generate leads and scale predictably.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'SMB Mitra — Digital Growth for Indian SMBs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & IT Solutions for SMBs | SMB Mitra',
    description:
      'Websites, performance marketing & custom software for Indian small businesses.',
    images: [`${SITE_URL}/og-image.png`],
    creator: '@smbmitra',
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SMB Mitra',
  description:
    'We build websites, run performance marketing, and develop custom software that helps SMBs generate leads and scale predictably.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  email: 'smbmitra1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jangaon',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.7228,
    longitude: 79.1527,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '14:00' },
  ],
  sameAs: [
    'https://www.instagram.com/smb_mitra',
    'https://www.facebook.com/smbmitra',
    'https://www.linkedin.com/company/smbmitra',
  ],
  priceRange: '₹₹',
  serviceArea: { '@type': 'Country', name: 'India' },
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
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ background: '#ffffff', color: '#0F172A' }}
      >
        <Header />
        {/* pt-20 = header height on mobile; md:pt-[76px] = desktop header height */}
        <main className="flex-grow pt-20 md:pt-[76px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
