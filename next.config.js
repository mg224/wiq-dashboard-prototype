/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
  // Enable static optimization for better performance on EC2
  trailingSlash: true,
  // Configure for production deployment
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
