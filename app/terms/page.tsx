import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Booking Conditions",
  description: "Terms of use and booking conditions for Discover Mauritius (N.K. TAHER CO LTD). Draft placeholder pending client and legal approval.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms & Booking Conditions"
      label="Terms & Booking Conditions"
      href="/terms"
      lastUpdated="[DRAFT — to be confirmed]"
      intro={`These Terms & Booking Conditions govern the use of this website and the travel services provided by ${site.legalName} ("Discover Mauritius"). This is a draft for review — final terms, including cancellation and payment conditions, must be confirmed by the client and a legal professional before launch.`}
      sections={[
        {
          heading: "About us",
          paragraphs: [
            `Discover Mauritius is a trading name of ${site.legalName}, a licensed tour operator and IATA-accredited travel agency established on ${site.founded} in Mauritius.`,
          ],
        },
        {
          heading: "Quotes & enquiries",
          paragraphs: [
            "Requesting a quote through this website places no obligation on you and requires no payment. We prepare a personalized, non-binding quote based on the details you provide.",
            "Prices shown on this website are indicative starting prices (\"from\" prices) and do not constitute a fixed offer. Your final price is confirmed in your individual quote. [Confirm currency and what starting prices include.]",
          ],
        },
        {
          heading: "Bookings & confirmation",
          paragraphs: [
            "A booking is confirmed only once we have agreed the details with you in writing and any required confirmation or deposit process has been completed. [Confirm the booking and payment process — note: online payment is not currently offered on this website.]",
          ],
        },
        {
          heading: "Payments",
          paragraphs: [
            "This website does not process online payments. Payment arrangements are agreed directly with you as part of your booking. [Confirm accepted payment methods and timing.]",
          ],
        },
        {
          heading: "Changes & cancellations",
          paragraphs: [
            "Changes and cancellations are subject to the conditions of your specific booking and those of our suppliers (such as hotels, airlines and activity providers). [Insert the company's cancellation and refund policy, including any deposits, deadlines and supplier terms.]",
          ],
        },
        {
          heading: "Your responsibilities",
          paragraphs: [
            "You are responsible for ensuring you have valid travel documents, visas, insurance and any health requirements for travel to Mauritius, and for providing accurate information when booking. We recommend appropriate travel insurance for every trip.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "We take great care in arranging your travel. Our liability is limited to the services we directly provide and is subject to applicable law. [Confirm liability wording with a legal professional.]",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms can be sent to ${site.legalName} at ${site.email} or ${site.phoneDisplay}.`,
          ],
        },
      ]}
    />
  );
}
