import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Faqs } from "@/components/sections/Faqs";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faqs";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Discover Mauritius — licensing, airport transfers, private guided tours, custom packages, hotel booking, air ticketing and how far in advance to book.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Good to know"
        title="Frequently asked questions"
        subtitle="Everything travellers usually ask us before they book. Can't find your answer? We're a quick WhatsApp message away."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <Faqs
        items={faqs}
        eyebrow="Questions & answers"
        title="Your questions, answered"
        subtitle={undefined}
        surface="canvas"
      />

      <QuoteCta
        eyebrow="Still curious?"
        title="Ask us anything about Mauritius"
        subtitle="Tell us what you're planning and we'll help — no obligation, no payment needed to enquire."
      />

      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "FAQ", href: "/faq" },
          ]),
        ]}
      />
    </>
  );
}
