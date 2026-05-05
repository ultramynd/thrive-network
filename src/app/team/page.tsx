import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/Buttons";
import { PageHero } from "@/components/Sections";
import { ScrollMorphSection } from "@/components/ScrollMorphSection";
import { teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team | Thrive Network",
  description:
    "Meet the Thrive Network team supporting the Men's Empowerment Division.",
};

export default function TeamPage() {
  const divisions = Array.from(
    new Map(teamMembers.map((member) => [member.divisionSlug, member.division])),
  );

  return (
    <>
      <PageHero
        title="Here to support you through your healing journey."
        subtitle="Meet the practitioners, facilitators, assessors, and therapeutic specialists behind Thrive's men's empowerment work."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
        ctas={[{ label: "Get Help Today", href: "/get-help" }]}
      />

      <ScrollMorphSection
        eyebrow="Men's Empowerment Division"
        title="Safe support, held by people who understand the work."
        body={[
          "Thrive Men Empowerment exists for male victims and survivors of domestic abuse who need specialist, non-judgemental support.",
          "This team brings together assessment, facilitation, training, and family-systemic therapeutic insight so men can be heard, supported, and guided toward safer next steps.",
        ]}
        image="/team/mens-empowerment-session.jpg"
        imageAlt="People gathered in a supportive group session"
        cta={{ label: "Explore Men's Empowerment", href: "/thrive-men-empowerment" }}
      />

      <section className="bg-[var(--soft)] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {divisions.map(([divisionSlug, division]) => {
            const members = teamMembers.filter(
              (member) => member.divisionSlug === divisionSlug,
            );

            return (
              <div key={divisionSlug}>
                <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  <SectionHeader
                    title={division}
                    intro="Profiles are grouped by the work they support, so each team member sits inside the division they actively serve."
                  />
                  <span className="w-fit rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-bold text-[var(--violet)]">
                    {members.length} team members
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {members.map((member) => (
                    <Link
                      key={member.slug}
                      href={`/team/${member.slug}`}
                      className="reveal group overflow-hidden rounded-lg border border-black/10 bg-white transition hover:-translate-y-1 hover:border-[var(--violet)] hover:shadow-xl"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--lavender)]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--violet)]">
                              {member.role}
                            </p>
                            <h2 className="mt-3 text-2xl font-bold leading-8 text-[var(--ink)]">
                              {member.name}
                            </h2>
                          </div>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="shrink-0 text-[var(--muted)] transition group-hover:text-[var(--violet)]"
                            size={22}
                          />
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                          {member.summary}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
