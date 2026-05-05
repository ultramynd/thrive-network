import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Thrive Network",
  description:
    "Privacy policy placeholder for Thrive Network, including data minimisation and consent notes for enquiry and support forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      description="This page is ready for the client's final legal wording. The current implementation follows the plan's data minimisation approach for forms."
      sections={[
        {
          title: "What the website collects",
          body: [
            "The website collects enquiry details submitted through contact, booking, newsletter, safeguarding, and assessment request forms.",
            "Assessment requests avoid collecting detailed sensitive histories online and ask only for safe contact details and support preferences.",
          ],
        },
        {
          title: "Consent and special category data",
          body: [
            "Where a form could relate to sensitive personal circumstances, the user must confirm consent before submitting.",
            "Final legal wording should confirm the lawful basis, Article 9 condition, retention policy, and who can access submissions.",
          ],
        },
        {
          title: "Third-party services",
          body: [
            "Email delivery, scheduling, analytics, and CMS services can be connected through environment variables and provider configuration.",
          ],
        },
      ]}
    />
  );
}
