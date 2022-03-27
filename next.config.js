/** @type {import('next').NextConfig} */
const Path = require("path");
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [Path.join(__dirname, "styles")]
  }
  // future: {
  //   webpack5: true
  // },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // config.module.rules.push({
  //   //   test: /\.my-file$/i,
  //   //   loader: "raw-loader"
  //   // });
  //   buildId, dev, isServer, defaultLoaders, webpack;
  //   // Important: return the modified config
  //   return config;
  // }
  // images: {
  //   loader: "imgix",
  //   path: "https://example.com/myaccount/",
  // },
};
