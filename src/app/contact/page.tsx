import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Thrive Network",
  description:
    "Contact Thrive Network about safeguarding training, men empowerment, leadership development, mentoring, coaching, bespoke training, research, and Thrive Creatives.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Ready to Work With Thrive?"
        subtitle="Whether you are looking for support, training, leadership development, or a bespoke solution built around your organisation — we would be glad to hear from you."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
        ctas={[{ label: "Book a Consultation", href: "/book-consultation" }]}
      />
      <section className="bg-[var(--soft)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-[var(--ink)]">
              Contact details
            </h2>
            <div className="mt-7 space-y-4 text-base leading-8 text-[var(--muted)]">
              <p>Email: {site.email}</p>
              <p>Phone: {site.phone}</p>
              <p>Address: {site.address}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
