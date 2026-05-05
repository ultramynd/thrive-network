import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Accessibility | Thrive Network",
  description:
    "Accessibility statement for the Thrive Network website implementation.",
};

export default function AccessibilityPage() {
  return (
    <PolicyPage
      title="Accessibility"
      description="Thrive Network's website is built to be readable, keyboard navigable, responsive, and usable across common devices."
      sections={[
        {
          title: "Implementation standard",
          body: [
            "Pages use semantic landmarks, labelled form fields, visible focus states, responsive layouts, and sufficient colour contrast across the main Thrive palette.",
          ],
        },
        {
          title: "Known pending items",
          body: [
            "Final team photos, book covers, partner logos, testimonials, and training images should include meaningful alternative text when supplied.",
          ],
        },
        {
          title: "Feedback",
          body: [
            "Users can contact Thrive Network if they experience an accessibility barrier on the website.",
          ],
        },
      ]}
    />
  );
}
