/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'upbeat-wolf-752.convex.cloud' }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
