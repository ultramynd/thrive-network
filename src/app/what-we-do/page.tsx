import type { Metadata } from "next";
import { SectionHeader } from "@/components/Buttons";
import { FinalCta, PageHero, ServicesGrid } from "@/components/Sections";
import { whatWeDoSeo } from "@/lib/content";

export const metadata: Metadata = {
  title: whatWeDoSeo.title,
  description: whatWeDoSeo.description,
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        subtitle="Six strands. One mission. Whether you come to us for safeguarding training, leadership development, mentoring, or specialist support — you leave more equipped than when you arrived."
        intro="Thrive is a specialist platform working at the intersection of support, learning, leadership, and social impact. Every service we offer is built around a real need — not a trend, not a template. We help individuals grow, equip professionals to lead and respond with confidence, and support organisations to build safer, stronger, and more reflective cultures."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
        ctas={[
          { label: "Explore Our Services", href: "#services" },
          { label: "Get in Touch", href: "/contact" },
        ]}
      />

      <section id="services" className="bg-[var(--soft)] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            title="Our Core Strands"
            intro="Six specialist services. All built around what actually makes a difference."
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.4fr_0.6fr] lg:px-8">
          <SectionHeader title="Why Thrive" />
          <div className="space-y-6 text-lg leading-9 text-[var(--muted)]">
            <p>
              Thrive was not built to be another training provider. It was built
              because there are gaps — in how faith communities handle
              safeguarding, in how organisations develop their leaders, in how
              male survivors of domestic abuse are supported — and those gaps
              have consequences for real people.
            </p>
            <p>
              Our work is grounded in over 16 years of frontline safeguarding
              practice, professional leadership experience, and published
              research. We bring all of that into every training room, coaching
              session, and programme we deliver. And we tailor it — because
              generic rarely works.
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        text="We would be glad to hear from you — whether you are looking for support, training, or a bespoke solution."
      />
    </>
  );
}
