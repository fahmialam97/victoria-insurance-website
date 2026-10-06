import type { NextConfig } from "next";

// Cloudflare quick tunnel untuk preview dev dari perangkat lain; tidak berlaku di production
const devTunnelHosts = process.env.NODE_ENV === "development" ? ["*.trycloudflare.com"] : [];

const nextConfig: NextConfig = {
  // Static export ke folder out/ untuk di-upload ke cPanel (mockup tanpa server Node.js)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: devTunnelHosts,
};

export default nextConfig;
