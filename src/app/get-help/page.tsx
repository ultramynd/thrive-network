import type { Metadata } from "next";
import { ButtonLink } from "@/components/Buttons";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Get Help | Thrive Men Empowerment",
  description:
    "Start a safe support request with Thrive Men Empowerment. This page includes emergency guidance and privacy-aware next steps.",
};

export default function GetHelpPage() {
  return (
    <>
      <PageHero
        title="Get Help"
        subtitle="A safe starting point for men seeking support, and for professionals or communities looking to understand how Thrive can help."
        ctas={[
          { label: "Start Assessment Request", href: "/assessment" },
          { label: "Contact Thrive", href: "/contact" },
        ]}
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3 lg:px-8">
          {[
            [
              "If there is immediate danger",
              "Call emergency services now. Thrive's website forms are not monitored as an emergency response channel.",
            ],
            [
              "If you need a first conversation",
              "Use the assessment request to share safe contact details and the kind of support you are looking for.",
            ],
            [
              "If you are a professional or organisation",
              "Contact Thrive to discuss training, awareness sessions, signposting, or bespoke support.",
            ],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg bg-[var(--soft)] p-7">
              <h2 className="text-2xl font-bold text-[var(--ink)]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {text}
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
          <ButtonLink href="/assessment">Start Assessment Request</ButtonLink>
        </div>
      </section>
    </>
  );
}
