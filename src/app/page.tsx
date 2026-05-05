import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, SectionHeader } from "@/components/Buttons";
import {
  FinalCta,
  ImpactSection,
  ServicesGrid,
  StatementBand,
} from "@/components/Sections";
import { ScrollMorphSection } from "@/components/ScrollMorphSection";
import { homeSeo } from "@/lib/content";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeHeroSupport />

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

      <ScrollMorphSection
        eyebrow="Why Thrive"
        title="Support that moves with the people who need it."
        body={[
          "Thrive brings together lived experience, professional practice, safeguarding insight, and culturally responsive support.",
          "Whether we are working with an individual, a church, a professional team, or an organisation, the goal is the same: safer spaces, clearer decisions, and the confidence to move forward.",
        ]}
        image="/home/support-in-practice.jpg"
        imageAlt="Professionals in a facilitated training discussion"
        cta={{ label: "Explore Our Services", href: "/what-we-do" }}
      />

      <section className="bg-[var(--soft)] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              title="Our Services"
              intro="Six connected areas of work, arranged around the real support people and organisations need."
              align="center"
            />
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

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="mx-auto grid min-h-[72svh] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="hero-accent-line" aria-hidden="true" />
          <h1 className="text-balance font-serif text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.94] text-white">
            Empowering People. Strengthening Practice. Transforming Lives.
          </h1>
        </div>
        <div className="relative min-h-[22rem] overflow-hidden rounded-lg lg:min-h-[34rem]">
          <Image
            src="/home/support-in-practice.jpg"
            alt="Professional support and development conversation"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/55 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

function HomeHeroSupport() {
  const principles = [
    "Lived experience",
    "Professional practice",
    "Research-led insight",
  ];

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-14">
        <div>
          <p className="text-2xl font-semibold leading-9 text-[var(--ink)] md:text-3xl md:leading-10">
            Thrive is a specialist platform for individuals, professionals, faith
            communities, and organisations who are serious about safeguarding,
            growth, and lasting change.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
            We sit at the intersection of lived experience, professional
            practice, and research. Every service we deliver is grounded in what
            actually works.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="grid gap-3">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-center gap-4 border-t border-black/10 pt-4 first:border-t-0 first:pt-0"
              >
                <span className="text-sm font-black text-[var(--violet)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-bold text-[var(--ink)]">{principle}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/what-we-do">Explore Our Services</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
