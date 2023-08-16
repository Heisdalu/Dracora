const { hostname } = require("os");
// https://picsum.photos/70/80
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "picsum.photos",
    //     pathname: "70/80",
    //   },
    // ],
  },
};

module.exports = nextConfig;
