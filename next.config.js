/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["images.unsplash.com"]
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    };
    return config;
  },
  experimental: {
    outputStandalone: true
  }
};
