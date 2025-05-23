/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [{
      hostname: "cdn.shopify.com",
    },
    {
      hostname: "media.licdn.com",
    }]
  },
  reactStrictMode: true,
}