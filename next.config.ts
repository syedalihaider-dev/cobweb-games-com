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

  async redirects() {
    return [
      // =========================
      // Blog Subdomain Redirects (301)
      // =========================
      {
        source: "/animation-service",
        has: [
          {
            type: "host",
            value: "blog.cobwebgames.com",
          },
        ],
        destination: "https://www.cobwebgames.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;