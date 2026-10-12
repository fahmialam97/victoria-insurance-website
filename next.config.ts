import type { NextConfig } from "next";

// Cloudflare quick tunnel untuk preview dev dari perangkat lain; tidak berlaku di production
const devTunnelHosts = process.env.NODE_ENV === "development" ? ["*.trycloudflare.com"] : [];

const nextConfig: NextConfig = {
  // Static export ke folder out/ untuk di-upload ke cPanel (mockup tanpa server Node.js)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: devTunnelHosts,
  // Versi Indonesia (app/(id)) & Inggris (app/[lang]) memakai root layout terpisah, jadi 404 global dibuat lewat
  // app/global-not-found.tsx
  experimental: { globalNotFound: true },
};

export default nextConfig;
