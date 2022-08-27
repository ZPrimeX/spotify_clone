/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    secret: process.env.JWT_SECRET,
    base_api: process.env.BASE_API,
  },
};

module.exports = nextConfig;
