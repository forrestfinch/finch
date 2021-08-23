/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.producthunt.com',
      'images.unsplash.com',
      'tailwindui.com',
      'apinew.pincapp.com',
      's3.amazonaws.com',
      'pinc-backend.s3.amazonaws.com',
      's3-us-west-2.amazonaws.com'
    ],
  },
  productionBrowserSourceMaps: true,
  pageExtensions: ['tsx', 'ts'],
}
