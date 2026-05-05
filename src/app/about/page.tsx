import type { Metadata } from "next";
import { SectionHeader } from "@/components/Buttons";
import { FinalCta, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About Thrive Network",
  description:
    "Learn about Thrive Network's specialist work across safeguarding, male survivor support, leadership, coaching, training, research, and creative resources.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built for the gaps that matter."
        subtitle="Thrive sits at the intersection of lived experience, professional practice, and research, with work shaped by safeguarding, cultural awareness, leadership, and lasting change."
        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80"
        ctas={[
          { label: "Explore Our Services", href: "/what-we-do" },
          { label: "Meet the Team", href: "/team" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
          <SectionHeader title="The Thrive Standard" />
          <div className="space-y-6 text-lg leading-9 text-[var(--muted)]">
            <p>
              Thrive exists to support people, equip professionals, and help
              organisations build safer and stronger cultures. The work is
              practical, human, research-informed, and shaped by the realities
              people actually face.
            </p>
            <p>
              Across men empowerment, safeguarding training, leadership
              development, mentoring and coaching, bespoke training and
              research, and Thrive Creatives, the commitment remains the same:
              knowledge that can be used, support that respects lived
              experience, and practice that creates lasting change.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--soft)] py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          {[
            [
              "Safeguarding",
              "Faith-sensitive and trauma-informed training for communities and organisations that carry real responsibility.",
            ],
            [
              "Cultural Awareness",
              "Practice shaped by the cultural contexts that influence disclosure, response, stigma, and trust.",
            ],
            [
              "Professional Practice",
              "Learning, coaching, leadership, and research designed around the people in the room.",
            ],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg bg-white p-7">
              <h2 className="text-2xl font-bold text-[var(--ink)]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
