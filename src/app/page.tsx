import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/Buttons";
import {
  FinalCta,
  ImpactSection,
  PageHero,
  ServicesGrid,
  StatementBand,
} from "@/components/Sections";
import { homeSeo } from "@/lib/content";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
};

export default function Home() {
  return (
    <>
      <PageHero
        title="Empowering People. Strengthening Practice. Transforming Lives."
        subtitle="Thrive is a specialist platform for individuals, professionals, faith communities, and organisations who are serious about safeguarding, growth, and lasting change."
        intro="We sit at the intersection of lived experience, professional practice, and research. What that means for you is simple: every service we deliver is grounded in what actually works."
        image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80"
        ctas={[
          { label: "Explore Our Services", href: "/what-we-do" },
          { label: "Get in Touch", href: "/contact" },
        ]}
      />

      <StatementBand />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader title="About Thrive" />
          <div className="space-y-6 text-lg leading-9 text-[var(--muted)]">
            <p>
              At Thrive, we believe that real impact happens when people are
              genuinely supported, professionals are properly equipped, and
              organisations are built to be stronger. That is not a tagline. It
              is the standard we hold ourselves to across everything we do.
            </p>
            <p>
              Our work spans six core areas — Men Empowerment, Safeguarding
              Training, Leadership Development, Mentoring and Coaching, Bespoke
              Training and Research, and Thrive Creatives. Each one exists
              because there is a gap worth closing, a need worth meeting, and a
              person or organisation worth equipping.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--soft)] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader title="Our Services" />
          </div>
          <ServicesGrid compact />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeader title="Why Work With Thrive" />
            <div className="mt-7 space-y-6 text-lg leading-9 text-[var(--muted)]">
              <p>
                There is no shortage of training providers or coaching services.
                What is rare is genuine expertise, delivered with cultural
                awareness, grounded in real-world practice, and tailored to the
                people in the room. That is what Thrive brings.
              </p>
              <p>
                Whether we are working with a church safeguarding lead, a senior
                manager navigating a complex team, or an individual looking for
                direction — the commitment is the same. To help you move forward
                with knowledge, confidence, and clarity.
              </p>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
            alt="Professionals in a reflective training conversation"
            width={900}
            height={1125}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/5] w-full rounded-xl object-cover shadow-2xl"
          />
        </div>
      </section>

      <ImpactSection />
      <FinalCta />
    </>
  );
}
