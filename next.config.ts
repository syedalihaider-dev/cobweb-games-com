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

  async headers() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "cobwebgames.vercel.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;