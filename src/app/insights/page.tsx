import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/Buttons";
import { NewsletterForm } from "@/components/Forms";
import { PageHero } from "@/components/Sections";
import { blogCategories, blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights | Thrive Network",
  description:
    "Insights from Thrive Network on safeguarding, men empowerment, leadership, coaching, research, Thrive Creatives, and faith communities.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        title="Insights that move practice forward."
        subtitle="A clean blog system is ready for safeguarding, men empowerment, leadership, coaching, research, Thrive Creatives, and faith communities."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
        ctas={[{ label: "Contact Thrive", href: "/contact" }]}
      />

      <section className="bg-[var(--soft)] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            title="Categories"
            intro="Blog categories are ready for CMS publishing. No unrelated legacy demo posts have been migrated."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogCategories.map((category) => (
              <article key={category.slug} className="rounded-lg bg-white p-6">
                <h2 className="text-xl font-bold text-[var(--ink)]">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="Latest Articles" />
          {blogPosts.length ? (
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`}>
                  <article className="rounded-lg border border-black/10 p-6">
                    <p className="text-sm font-bold text-[var(--violet)]">
                      {post.category}
                    </p>
                    <h2 className="mt-4 text-2xl font-bold text-[var(--ink)]">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--violet)]">
                      Read article <ArrowUpRight size={16} />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-dashed border-[var(--violet)]/35 bg-[var(--soft)] p-8">
              <p className="text-lg leading-8 text-[var(--muted)]">
                New article content can now be added through the CMS content
                model. No placeholder blog posts are published.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[var(--ink)] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.55fr_0.45fr] md:items-center lg:px-8">
          <div>
            <h2 className="font-serif text-4xl font-semibold">
              Stay close to the work.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Newsletter signup is wired to the same secure enquiry endpoint and
              ready for an email provider.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
