const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");


const shareEnv = dotenv.parse(fs.readFileSync(".env"));
const LOCAL_ENV = process.env;
const { API_URL } = {
  ...LOCAL_ENV,
  ...shareEnv,
};



const nextConfig = {
    publicRuntimeConfig: {
        API_URL,
    },
    images: {
      domains: ['images.unsplash.com','media.istockphoto.com'], // Add other allowed domains if needed
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    
}

module.exports = nextConfig
