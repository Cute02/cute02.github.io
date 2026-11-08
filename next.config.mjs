/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure strict mode and production optimizations
  reactStrictMode: true,
};

export default nextConfig;

