const nextConfig = {
  experimental: {
    serverActions: true,
  },
  future: {
    webpack5: true, // forces webpack instead of Turbopack
  },
};

module.exports = nextConfig;
