# SEO Notes — Discover Mauritius

## What's already built in (on-page/technical SEO)
- **Static generation** for every content page (fast, crawlable) — see the build output; only the
  quote form's API and the prefill-aware `/contact` render dynamically.
- **Unique `<title>` + meta description** per page, with a title template (`… · Discover Mauritius`).
- **One `<h1>` per page** and a semantic heading hierarchy throughout (verified in build tests).
- **Canonical URLs** per page; `metadataBase` set from `NEXT_PUBLIC_SITE_URL`.
- **Open Graph + Twitter cards** sitewide, plus a generated branded OG image (`/opengraph-image`).
- **Structured data (JSON-LD):**
  - `TravelAgency` + `WebSite` sitewide (in the root layout)
  - `TouristTrip` + `Offer` + `BreadcrumbList` on each tour page
  - `Service` + `BreadcrumbList` on each service landing page
  - `FAQPage` on `/faq`
  - `BreadcrumbList` on interior pages
- **`sitemap.xml`** (all pages + tours) and **`robots.txt`** (allows all, disallows `/api/`, points to sitemap).
- **`manifest.webmanifest`**, theme-color, SVG favicon.
- **Accessibility & Core Web Vitals posture:** minimal JS (~102 kB shared; FAQ uses zero-JS
  `<details>`), `next/font` (no layout shift), `next/image` for real photos, lazy maps, visible focus,
  reduced-motion support — all of which support Lighthouse SEO/Perf/A11y scores.
- **Keyword-aligned copy & metadata** targeting the brief's queries: "tours in Mauritius",
  "airport transfer Mauritius", "Mauritius holiday packages", "IATA travel agency Mauritius",
  "5 day Mauritius package", "private airport transfer Mauritius", etc.

## Before launch (must-do)
1. **Set the real domain** — `NEXT_PUBLIC_SITE_URL` (Pending #5). This fixes canonicals, OG URLs,
   sitemap and JSON-LD `@id`s. Currently defaults to a placeholder domain.
2. **Swap placeholder content** — real tours, prices, photos, reviews, certificates (see `HANDOVER.md`).
   Structured-data prices are indicative until real pricing lands.
3. **Verify structured data** with Google's Rich Results Test once live.
4. **Confirm the `/contact` form delivery** (Resend/SMTP or WhatsApp handoff) so enquiries arrive.

## Post-launch growth (priorities for the client)
1. **Google Business Profile (Pending #8).** The single highest-impact local-SEO action.
   - Check whether a profile already exists for "N.K. TAHER CO LTD" / "Discover Mauritius" (the client
     was unsure). If yes, claim/verify it; if no, create one.
   - Category: *Tour operator* (+ *Travel agency*). Add service areas, hours, phone, website, photos.
   - This drives Google Maps visibility for "tours in Mauritius", "airport pickup Mauritius", etc.
2. **Google Search Console + Bing Webmaster Tools.**
   - Verify the domain, submit `sitemap.xml`, monitor coverage and queries.
   - Watch Core Web Vitals and mobile usability reports.
3. **Analytics.** Add privacy-friendly analytics (e.g. Plausible/Umami) or GA4. Track the primary
   conversion: quote-form submissions and WhatsApp clicks. (Update the Privacy Policy accordingly.)
4. **Review generation (Pending #4).** Trust is the conversion strategy, so reviews matter most:
   - Ask happy guests for Google + TripAdvisor + Facebook reviews (a WhatsApp link after each trip works well).
   - Once real reviews exist, replace the SAMPLE testimonials and consider adding `AggregateRating`
     to the organization schema (only with genuine, verifiable data).
5. **Local & content SEO.**
   - Get listed/consistent NAP (Name, Address, Phone) across TripAdvisor, Facebook, local directories.
   - Consider a lightweight blog/guides section ("Best beaches in Mauritius", "5 days in Mauritius")
     to capture long-tail queries — the content layer and design system already support new pages.
6. **Backlinks & partnerships.** Hotels, villa owners and local businesses linking back; travel blogs.

## Nice-to-have later
- **i18n (Pending #10):** French and Arabic (RTL) versions with `hreflang` tags for the Saudi/EU markets.
  The copy dictionary (`/content/copy.ts`) is already structured for this.
- **Per-tour OG images** generated dynamically (the OG image route pattern is already in place).
- **Photo alt text** will come straight from the shotlist subjects — already wired via `SmartImage`.
