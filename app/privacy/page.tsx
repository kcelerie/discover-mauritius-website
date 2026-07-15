import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Discover Mauritius (N.K. TAHER CO LTD) collects, uses and protects your personal information. Draft placeholder pending client and legal approval.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      label="Privacy Policy"
      href="/privacy"
      lastUpdated="[DRAFT — to be confirmed]"
      intro={`This Privacy Policy explains how ${site.legalName} ("Discover Mauritius", "we", "us") handles the personal information you share with us when you request a quote or contact us. This is a draft for review and must be finalized before launch.`}
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "When you submit a quote request or contact us, we collect the details you provide — such as your name, email address, phone/WhatsApp number, country of residence, travel dates, party size and trip preferences.",
            "We may also collect basic, non-identifying analytics about how visitors use our website in order to improve it. [Confirm which analytics tools, if any, will be used.]",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use your information solely to respond to your enquiry, prepare a personalized travel quote, arrange the services you request, and communicate with you about your trip.",
            "We do not sell your personal information. We may share necessary details with trusted travel suppliers (for example hotels, transport providers or airlines) only to fulfil the services you ask us to arrange.",
          ],
        },
        {
          heading: "How we contact you",
          paragraphs: [
            "We will contact you using the method you choose — WhatsApp or email — in relation to your enquiry and booking. You can ask us to stop contacting you at any time.",
          ],
        },
        {
          heading: "Data retention & security",
          paragraphs: [
            "We keep your information only as long as necessary to provide our services and meet legal and accounting obligations, and we take reasonable measures to protect it. [Confirm retention period and security practices.]",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, contact us using the details below. [Confirm applicable data-protection law, e.g. the Mauritius Data Protection Act, and any additional rights.]",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            `For any privacy question or request, contact ${site.legalName} at ${site.email} or ${site.phoneDisplay}.`,
          ],
        },
      ]}
    />
  );
}
