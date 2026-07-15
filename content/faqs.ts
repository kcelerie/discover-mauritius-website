import type { Faq } from "@/lib/types";

/**
 * The client's 9 real FAQs, used verbatim/lightly edited (brief §7).
 * Rendered as an accordion on /faq and reused in a Home section, and emitted
 * as FAQPage JSON-LD for SEO (brief §12).
 */
export const faqs: Faq[] = [
  {
    question: "Are you a licensed travel operator?",
    answer:
      "Yes. Discover Mauritius, by N.K. TAHER CO LTD, is a licensed travel operator and an IATA-accredited travel agency.",
  },
  {
    question: "Do you provide airport transfers?",
    answer:
      "Yes. We provide airport transfers anywhere in Mauritius, with pickup and drop-off at your hotel or preferred location.",
  },
  {
    question: "Can you customize tours and holiday packages?",
    answer:
      "Yes. We customize tours and holiday packages based on your interests, the time you have, and your preferences.",
  },
  {
    question: "Do you provide private tours with a guide?",
    answer:
      "Yes. We offer private tours with experienced local guides who share the island's history, culture, traditions and hidden gems.",
  },
  {
    question: "Can you help with hotel booking?",
    answer:
      "Yes. We assist with hotel booking according to your preferences, budget and holiday requirements.",
  },
  {
    question: "Do you provide air ticketing services?",
    answer:
      "Yes. As an IATA-accredited agency, we provide air ticketing services for international and regional flights.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "As early as possible, especially during peak seasons, so we can secure the best availability for your tours, transfers and accommodation.",
  },
  {
    question: "Can you arrange a complete Mauritius holiday package?",
    answer:
      "Yes. We can arrange a complete holiday package including accommodation, transfers, tours, activities and travel support.",
  },
  {
    question: "Why choose Discover Mauritius?",
    answer:
      "Local knowledge, professional service and personalized attention — so you can experience Mauritius safely, comfortably and authentically.",
  },
];
