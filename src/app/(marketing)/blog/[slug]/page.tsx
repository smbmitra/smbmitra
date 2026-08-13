import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import { FadeUp } from "@/components/animations/FadeUp";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2, ArrowRight, Share2 } from "lucide-react";
import Script from "next/script";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | SMB Mitra Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://smbmitra.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://smbmitra.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-08-01",
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "SMB Mitra",
      url: "https://smbmitra.com",
    },
  };

  return (
    <div className="bg-white min-h-screen pb-20 sm:pb-28">
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1.5" /> Back to Resources
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 mb-6">
            <span className="px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 border border-blue-500/30 font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Main Body */}
      <article className="container mx-auto px-4 sm:px-6 max-w-3xl pt-12 sm:pt-16">
        <div className="bg-blue-50 border border-blue-200 p-6 sm:p-8 rounded-2xl mb-10 font-medium text-slate-800 text-base sm:text-lg leading-relaxed">
          <strong className="text-[#1E40AF] block mb-2 font-bold uppercase text-xs tracking-wider">
            Executive Summary
          </strong>
          {post.content.intro}
        </div>

        <div className="space-y-10 text-slate-800 leading-relaxed text-base sm:text-lg font-normal">
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-4">
                {section.heading}
              </h2>
              <p className="text-slate-700 font-medium">{section.body}</p>
              {section.takeaway && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold mt-4">
                  <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>{section.takeaway}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion Box */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white space-y-4">
          <h3 className="text-xl font-bold">Key Takeaway & Next Steps</h3>
          <p className="text-slate-300 text-base leading-relaxed font-medium">
            {post.content.conclusion}
          </p>
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-medium">
              Written by {post.author.name}
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all"
            >
              Get Free Growth Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
