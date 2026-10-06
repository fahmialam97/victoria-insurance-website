import type { NextConfig } from "next";

// Cloudflare quick tunnel untuk preview dev dari perangkat lain; tidak berlaku di production
const devTunnelHosts = process.env.NODE_ENV === "development" ? ["*.trycloudflare.com"] : [];

const nextConfig: NextConfig = {
  allowedDevOrigins: devTunnelHosts,
  experimental: {
    serverActions: {
      allowedOrigins: devTunnelHosts,
    },
  },
};

export default nextConfig;
