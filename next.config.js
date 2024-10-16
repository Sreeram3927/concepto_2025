/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['th.bing.com', 'thewowstyle.com'], // Add your external image domains here
    },
  };
  
  module.exports = nextConfig;