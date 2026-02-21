import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'new.ikore.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
