import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         { protocol: "https", hostname: "iili.io" },
         { protocol: "https", hostname: "hotmassages.pt" },
         { protocol: "http", hostname: "127.0.0.1" },
         { protocol: "https", hostname: "glorious-wisdom-17a13fbae0.media.strapiapp.com" },
      ],
   },
};

export default nextConfig;
