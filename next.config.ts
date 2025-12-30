import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: true,
  images: {
    // domains: ['cdn-icons-png.flaticon.com'],
    formats: ["image/avif"],
  },
  compress: true,
  reactCompiler: true,
};


export default nextConfig;
