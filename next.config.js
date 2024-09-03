/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/recruitment',
        destination: '/apply',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
