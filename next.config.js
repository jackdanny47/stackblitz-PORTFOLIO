// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },

  turbopack: {}, // enables Turbopack with default settings
};

export default nextConfig;
