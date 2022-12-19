/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/munchies/:path*',
        destination: `https://munchies-api.up.railway.app/:path*`,
      },
    ]
  },
};

module.exports = nextConfig;
