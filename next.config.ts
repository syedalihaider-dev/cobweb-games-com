import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        pathname: "/26748614/**",
      },
    ],
  },
};

export default nextConfig;
