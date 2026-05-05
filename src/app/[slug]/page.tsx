import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink, SectionHeader } from "@/components/Buttons";
import { SafeguardingBookingForm } from "@/components/Forms";
import { ContentBlocks, FinalCta, PageHero } from "@/components/Sections";
import { serviceBySlug, services } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.heroTitle}
        subtitle={service.subtitle}
        image={service.image}
        ctas={service.ctas}
      />

      <ContentBlocks service={service} />

      {service.extraOfferings?.length ? (
        <section className="bg-[var(--soft)] py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader title="Service Offerings: MEN EMPOWERMENT" />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {service.extraOfferings.map((offering, index) => (
                <article
                  key={offering.title}
                  className="rounded-lg border border-black/10 bg-white p-6"
                >
                  <p className="text-sm font-bold text-[var(--violet)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-[var(--ink)]">
                    {offering.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--muted)]">
                    {offering.body?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {offering.bullets?.length ? (
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--ink)]">
                      {offering.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.resourceNote ? (
        <section id="resources" className="bg-[var(--soft)] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.45fr_0.55fr] lg:px-8">
            <SectionHeader
              title="Books and Resources"
              intro="Thrive Creatives will publish books, specialist publications, training resources, practical toolkits, campaign materials, and media content here."
            />
            <div className="rounded-lg border border-dashed border-[var(--violet)]/35 bg-white p-8">
              <p className="text-lg leading-8 text-[var(--muted)]">
                {service.resourceNote}
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact">Enquire About Resources</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {service.form === "safeguarding" ? (
        <section className="bg-[var(--soft)] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
            <SectionHeader
              title="Book Safeguarding Training"
              intro="The booking form captures: name, organisation, email, phone number, preferred training package, and preferred delivery format."
            />
            <SafeguardingBookingForm />
          </div>
        </section>
      ) : null}

      <FinalCta ctas={service.ctas} />
    </>
  );
}
