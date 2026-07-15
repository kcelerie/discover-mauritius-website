import { Icon } from "@/components/ui/Icon";

/**
 * Simple, fast, key-free map (brief §11). Uses Google Maps' embed-by-query, lazy-loaded
 * so it never blocks page render, with a plain-link fallback for no-iframe contexts.
 */
export function MapEmbed({ query, label }: { query: string; label: string }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=10&output=embed`;
  const link = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  return (
    <figure className="overflow-hidden rounded-media border border-hairline">
      <iframe
        src={src}
        title={`Map — ${label}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-64 w-full md:h-80"
      />
      <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-sm text-muted">
        <span className="flex items-center gap-2">
          <Icon name="map-pin" size={16} className="text-ocean" /> {label}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ocean hover:underline"
        >
          Open in Maps
        </a>
      </figcaption>
    </figure>
  );
}
