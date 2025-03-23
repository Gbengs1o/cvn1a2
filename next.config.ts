import { NextConfig } from 'next'

const config: NextConfig = {
  typescript: {
    // WARNING: Ignores type errors during production builds
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/my-bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'i.im.ge',
        pathname: '/**', // adjust pattern if needed
      },
    ],
  },
}

export default config
