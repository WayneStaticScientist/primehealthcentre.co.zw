import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase this as needed
    },
  },
  /* config options here */
} as NextConfig;

export default nextConfig;
