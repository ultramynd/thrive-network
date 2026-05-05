import type { Metadata } from "next";
import { AssessmentForm } from "@/components/Forms";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Assessment Request | Thrive Network",
  description:
    "Request an initial Thrive support assessment using a privacy-aware form that avoids collecting detailed sensitive information online.",
};

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        title="Assessment Request"
        subtitle="This form is designed for data minimisation. It collects safe contact details and support preferences, not a detailed abuse history."
        ctas={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <section className="bg-[var(--soft)] py-20">
        <div className="mx-auto max-w-4xl px-5">
          <AssessmentForm />
        </div>
      </section>
    </>
  );
}
