import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Buttons";
import { PageHero } from "@/components/Sections";
import { teamMembers } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.slug === slug);
  if (!member) return {};

  return {
    title: `${member.name} | Thrive Network Team`,
    description: member.summary,
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={member.name}
        subtitle={member.summary}
        image={member.image}
        ctas={[{ label: "Back to Team", href: "/team" }]}
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
          <div className="relative">
            <div className="sticky top-28 overflow-hidden rounded-lg bg-[var(--lavender)] shadow-2xl">
              <Image
                src={member.image}
                alt={member.name}
                width={900}
                height={1125}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <div className="border-b border-black/10 pb-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--violet)]">
                {member.division}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--ink)]">
                {member.role}
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-9 text-[var(--muted)]">
              {member.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/get-help">Get Help Today</ButtonLink>
              <ButtonLink href="/thrive-men-empowerment" variant="secondary">
                Men&apos;s Empowerment
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
