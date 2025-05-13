import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         { protocol: "https", hostname: "iili.io" },
         { protocol: "https", hostname: "hotmassages.pt" },
      ],
   },
};

export default nextConfig;
