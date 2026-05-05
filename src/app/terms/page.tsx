import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms | Thrive Network",
  description: "Terms page placeholder for Thrive Network.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms"
      description="This page is ready for the client's final terms of use."
      sections={[
        {
          title: "Website use",
          body: [
            "The website provides information about Thrive Network services, resources, enquiries, bookings, and support pathways.",
          ],
        },
        {
          title: "Service enquiries",
          body: [
            "Submitting an enquiry does not create an emergency response relationship or guarantee service availability.",
          ],
        },
        {
          title: "Final legal review",
          body: [
            "The client should replace this content with solicitor-approved terms before launch.",
          ],
        },
      ]}
    />
  );
}
