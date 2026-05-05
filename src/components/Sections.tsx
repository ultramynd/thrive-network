import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink, SectionHeader } from "@/components/Buttons";
import { impactPoints, Service, services } from "@/lib/content";

export function PageHero({
  title,
  subtitle,
  intro,
  image,
  ctas,
}: {
  title: string;
  subtitle?: string;
  intro?: string;
  image?: string;
  ctas?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="50vw"
            priority
            className="hero-image-motion object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/35 to-transparent" />
      </div>
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center px-5 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <span className="hero-accent-line" aria-hidden="true" />
          <h1 className="hero-reveal hero-reveal-title text-balance font-serif text-[clamp(2.1rem,9.2vw,4.2rem)] font-semibold leading-[0.94]">
            {title}
          </h1>
          {subtitle ? (
            <p className="hero-reveal hero-reveal-subtitle mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:mt-7 sm:text-xl sm:leading-9">
              {subtitle}
            </p>
          ) : null}
          {intro ? (
            <p className="hero-reveal hero-reveal-intro mt-4 max-w-2xl text-sm leading-7 text-white/66 sm:mt-5 sm:text-base sm:leading-8">
              {intro}
            </p>
          ) : null}
          {ctas?.length ? (
            <div className="hero-reveal hero-reveal-actions mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              {ctas.map((cta, index) => (
                <ButtonLink
                  key={cta.href + cta.label}
                  href={cta.href}
                  variant={index === 0 ? "light" : "primary"}
                >
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="services-structured-grid reveal">
      {services.map((service) => {
        const Icon = service.icon;
        const serviceNumber = String(services.indexOf(service) + 1).padStart(2, "0");
        return (
          <Link
            key={service.slug}
            href={`/${service.slug}`}
            className="service-value-card group"
          >
            <span className="service-value-number">{serviceNumber}</span>
            <div className="flex items-start justify-between gap-4">
              <span className="service-value-icon">
                <Icon aria-hidden="true" size={26} strokeWidth={2.1} />
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="relative z-10 text-[var(--muted)] transition group-hover:text-[var(--violet)]"
                size={22}
              />
            </div>
            <h3 className="relative z-10 mt-8 max-w-[14rem] text-xl font-bold leading-7 text-[var(--ink)]">
              {service.navTitle}
            </h3>
            <p
              className={`relative z-10 mt-4 text-sm leading-7 text-[var(--muted)] ${
                compact ? "line-clamp-4" : ""
              }`}
            >
              {service.summary}
            </p>
            <span className="service-value-line" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}

export function ContentBlocks({ service }: { service: Service }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:px-8">
        {service.sections.map((section, index) => (
          <article
            key={section.title}
            className={`reveal grid gap-8 border-t border-black/10 py-12 lg:grid-cols-[0.38fr_0.62fr] ${
              index === 0 ? "border-t-0 pt-0" : ""
            }`}
          >
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
                {section.title}
              </h2>
            </div>
            <div>
              {section.lead ? (
                <p className="mb-5 text-xl font-semibold leading-8 text-[var(--ink)]">
                  {section.lead}
                </p>
              ) : null}
              <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
                {section.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 rounded-lg bg-[var(--soft)] p-4 text-sm font-semibold leading-6 text-[var(--ink)]"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-[var(--violet)]"
                        size={17}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Ready to Work With Thrive?",
  text = "Whether you are looking for support, training, leadership development, or a bespoke solution built around your organisation — we would be glad to hear from you.",
  ctas = [
    { label: "Contact Us", href: "/contact" },
    { label: "Book a Consultation", href: "/book-consultation" },
  ],
}: {
  title?: string;
  text?: string;
  ctas?: { label: string; href: string }[];
}) {
  return (
    <section className="bg-[var(--violet)] px-5 py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            {text}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
          {ctas.map((cta, index) => (
            <ButtonLink
              key={cta.label}
              href={cta.href}
              variant={index === 0 ? "light" : "primary"}
            >
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[680px]">
          <Image
            src="/home/impact-session.jpg"
            alt="Professionals reviewing progress in a facilitated session"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--violet)]/30 mix-blend-multiply" />
        </div>
        <div className="px-5 py-20 lg:px-14">
          <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Our Impact
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {impactPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="reveal border-t border-white/12 py-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10 text-[var(--gold)]">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{point.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-xl font-semibold text-white">
            That is the Thrive standard.
          </p>
        </div>
      </div>
    </section>
  );
}

export function StatementBand() {
  return (
    <section className="statement-band">
      <div className="mx-auto flex max-w-5xl items-start gap-5 px-5 py-9 text-white lg:px-8">
        <span className="mt-1 h-16 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
        <p className="reveal max-w-3xl text-xl font-medium leading-9">
          We believe every person deserves to be safe, heard, equipped, and
          supported. Together, we build the skills, systems, and spaces that help
          people thrive.
        </p>
      </div>
    </section>
  );
}

export function CmsNotice() {
  return (
    <section className="bg-[var(--soft)] py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          title="Built for a CMS"
          intro="Services, team profiles, books, testimonials, blog categories, posts, navigation, footer details, and SEO fields are separated into typed content structures so the current local data can move cleanly into Sanity."
        />
      </div>
    </section>
  );
}
