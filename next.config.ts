import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
   eslint: {
    ignoreDuringBuilds: true, // Disables eslint during the build
  },
  typescript: {
    // Disable type checking during the build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/Zemenaytech/chewataawaqi-assets/main/**",
        
      },
    ],
  },
};

export default nextConfig;
