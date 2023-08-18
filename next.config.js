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
    
}

module.exports = nextConfig
