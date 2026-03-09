/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/Portfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
