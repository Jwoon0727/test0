import withPWA from 'next-pwa';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,      // Enable React strict mode for improved error handling
    swcMinify: true,            // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development" // Remove console.log in production
    },
    basePath: process.env.BASE_PATH || '/test0', // Set basePath based on environment variable or default to '/test0'
    assetPrefix: process.env.BASE_PATH || '/test0', // Ensure asset paths are correct
    output: 'export',           // Add this line to enable static export
};

export default withPWA({
    dest: "public",         // destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // disable PWA in the development environment
    register: true,         // register the PWA service worker
    skipWaiting: true,      // skip waiting for service worker activation
})(nextConfig);