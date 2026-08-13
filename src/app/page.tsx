import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IndustriesServed from "@/components/sections/IndustriesServed";
import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing, Websites & Custom Software for SMBs | SMB Mitra",
  description:
    "SMB Mitra builds high-converting Next.js websites, manages ROI-driven Meta/Google Ads, and develops custom business software for Indian small businesses.",
  alternates: {
    canonical: "https://smbmitra.com/",
  },
  openGraph: {
    title: "Digital Marketing, Websites & Custom Software for SMBs | SMB Mitra",
    description:
      "High-performing digital agency in India offering websites, performance marketing, local SEO, and custom web software with zero hidden fees.",
    url: "https://smbmitra.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesServed />
      <FinalCTA />
    </>
  );
}
