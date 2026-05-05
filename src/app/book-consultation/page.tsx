import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Book a Consultation | Thrive Network",
  description:
    "Book a consultation with Thrive Network for support, safeguarding training, leadership development, coaching, bespoke training, research, or Thrive Creatives.",
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        title="Book a Consultation"
        subtitle="Use this enquiry flow to start a conversation with Thrive. A Cal.com or equivalent scheduler can be connected when the client supplies the booking account."
        ctas={[{ label: "Get Help", href: "/get-help" }]}
      />
      <section className="bg-[var(--soft)] py-20">
        <div className="mx-auto max-w-4xl px-5">
          <ContactForm type="consultation" />
        </div>
      </section>
    </>
  );
}
