/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    secret: process.env.JWT_SECRET,
  },
};

module.exports = nextConfig;
