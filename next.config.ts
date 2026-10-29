import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
  },
  poweredByHeader: false,
  // Endereços antigos continuam funcionando (links já compartilhados e indexados)
  async redirects() {
    return [
      { source: "/feito-a-mao", destination: "/design-autoral", permanent: true },
      { source: "/emily", destination: "/emilly", permanent: true },
    ];
  },
};

export default nextConfig;
