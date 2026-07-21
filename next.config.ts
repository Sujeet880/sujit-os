import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-studies/mirari-surface-dashboard",
        destination: "/work/mirari-surface",
        permanent: true,
      },
      {
        source: "/case-studies/scaling-white-label-loyalty-platform",
        destination: "/work/gynger-loyalty",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
