/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Real client/stock photography plugs in here later (Pending #3).
    // Placeholders are rendered as branded gradient blocks via <SmartImage> until then.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
