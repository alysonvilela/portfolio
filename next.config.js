/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.birobirobiro.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:slug*/a',
        destination: '/articles/:slug*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig
