# Handover Checklist — Discover Mauritius

Everything on the site that is currently a **clearly-marked placeholder**, with the exact place to
swap in real content. Cross-references `PENDING-CLARIFICATIONS.md`. Nothing here requires touching
components — content lives in `/content`, config in `content/site.ts`, env in `.env`.

## 1. Content to supply
| # | Item | Where to edit | Pending | Notes |
|---|------|---------------|---------|-------|
| 1 | **Real tour list** — names, durations, inclusions, itineraries | `content/tours.ts` | #2 | Replace the 8 `draft: true` placeholders. Keep the same shape; remove `draft` once final. |
| 2 | **Starting prices** | `content/tours.ts` (`fromPrice`, `priceNote`) | #2 | All marked `PLACEHOLDER — awaiting client pricing`. Clear `priceNote` when confirmed. |
| 3 | **Currency** | `content/site.ts` (`defaultCurrency`) + `lib/products.ts` (symbols) | #11 | Default `EUR`. Shown as "From €XX". |
| 4 | **Photos** (every image slot) | set `src` on slots in `content/*`; drop files in `/public/images` | #3 | Full brief in `IMAGE-SHOTLIST.md`. Placeholders auto-swap to `next/image`. |
| 5 | **Reviews / testimonials** | `content/testimonials.ts` | #4 | Currently `[SAMPLE]` + visible "Sample" labels. Replace with real, verifiable reviews only. |
| 6 | **Certificates** | `/public/images` + `app/about/page.tsx` frames | #7 | About page has 3 "Certificate — to be supplied" frames. |
| 7 | **Logo / wordmark** | `components/ui/Logo.tsx` + `app/icon.svg` + `app/opengraph-image.tsx` | #12 | Placeholder compass wordmark. |
| 8 | **Exact Facebook URL** | `content/site.ts` (`facebookUrl`) | — | Currently a functional search link for "Mauritius Tours with NK Taher". |
| 9 | **Office address** | `content/site.ts` (`address`) | — | Needed for `LocalBusiness` schema + a precise contact map. Country is set; street is a placeholder. |

## 2. Configuration / deployment
| # | Item | Where | Pending | Notes |
|---|------|-------|---------|-------|
| 10 | **Domain** | `NEXT_PUBLIC_SITE_URL` env var | #5 | Sets canonicals, OG URLs, sitemap, JSON-LD ids. Recommend Vercel. |
| 11 | **Quote form delivery** | `app/api/quote/route.ts` | #1 | Currently logs to console. Wire Resend/SMTP or WhatsApp handoff at the marked TODO. mailto/WhatsApp fallbacks already work. |
| 12 | **Legal copy approval** | `app/privacy/page.tsx`, `app/terms/page.tsx` | #9 | Draft, marked `DRAFT — for client review`; `noindex` until approved. Have a professional review. |

## 3. Decisions to confirm (not blocking the build)
| # | Item | Pending | Current default |
|---|------|---------|-----------------|
| 13 | Bookings/payments model | #1 | Quote-first only; no checkout. Transfer page architected so instant-booking can be added later. |
| 14 | Languages (FR / Arabic RTL) | #10 | English only; copy dictionary (`content/copy.ts`) ready for locale siblings. |
| 15 | Typography direction | — | Fraunces + Inter (confirmed by client this session). |
| 16 | Deadline | #6 | None given. |

## 4. Post-launch (see `SEO-NOTES.md`)
- Google Business Profile (Pending #8), Search Console, analytics, review generation.

## 5. How to verify after swapping content
```bash
npm run build      # must pass; checks types + prerenders all pages
npm start          # smoke-test locally
```
- Re-run Google Rich Results Test on a tour + the FAQ page.
- Once photos + real copy are in, run Lighthouse (target 90+ across the board).
