import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
