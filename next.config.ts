import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  trailingSlash: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  sassOptions:{
    includePaths:[path.join(__dirname, "")],
    prependData: `@use "variables.scss" as *;`
  },
};

export default nextConfig;