/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/ddeeb6vhx/image/upload/',
  },
  productionBrowserSourceMaps: true,
  pageExtensions: ['tsx', 'ts'],
}
