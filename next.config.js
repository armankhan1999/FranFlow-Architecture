/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // Removed output: 'export' to enable API routes
  trailingSlash: false,
  basePath: '',
  assetPrefix: ''
}

module.exports = nextConfig
