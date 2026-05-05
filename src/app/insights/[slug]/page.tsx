import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, FinalCta } from "@/components/Sections";
import { blogPosts } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.seo.title,
    description: post.seo.description,
  };
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${post.author} · ${post.date}`}
        ctas={[{ label: "Back to Insights", href: "/insights" }]}
      />
      <article className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="space-y-6 text-lg leading-9 text-[var(--muted)]">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
