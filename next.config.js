/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-cdn.com",
      },
      {
        protocol: "https",
        hostname: "your-other-domain.com",
      },
    ],
  },
};

module.exports = nextConfig;
