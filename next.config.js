const dotenv = require("dotenv");

dotenv.config({ path: ".env.production" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  },
};

module.exports = nextConfig;
