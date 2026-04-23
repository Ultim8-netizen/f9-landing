import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Standalone output — not needed now but useful if you ever
  // containerise this for hosting elsewhere
  // output: 'standalone',
}

export default nextConfig