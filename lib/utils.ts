export type ClassValue = string | number | false | null | undefined;

/** Tiny classnames joiner (no dependency). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

import { site } from "@/content/site";

/** Build a wa.me deep link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `${site.whatsappUrl}?text=${text}`;
}
