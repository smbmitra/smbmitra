import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import { FadeUp } from "@/components/animations/FadeUp";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth Resources & Guides for SMBs | SMB Mitra",
  description:
    "Actionable digital marketing, web development, local SEO, and custom software guides tailored for Indian small business owners.",
  alternates: {
    canonical: "https://smbmitra.com/blog",
  },
  openGraph: {
    title: "Growth Resources & Guides for SMBs | SMB Mitra",
    description:
      "Practical strategies to scale your local business, reduce customer acquisition costs, and build custom web technology.",
    url: "https://smbmitra.com/blog",
  },
};

export default function BlogHubPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1a2d6b 50%, #0F172A 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center relative z-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-bold text-blue-300 mb-6">
              <BookOpen size={16} /> Knowledge Hub & Resources
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Practical Growth Playbooks for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Indian SMBs.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              No generic fluff or corporate jargon. Just tested strategies on local SEO, Meta/Google ads ROI, web architecture, and custom software automation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <article className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-[#1E40AF]">
                        <Tag size={12} /> {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-semibold">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-[#1E40AF] transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-semibold">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-bold text-[#1E40AF] group-hover:translate-x-1 transition-transform"
                    >
                      Read Full Article <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
