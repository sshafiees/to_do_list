/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react', 'react-dom', '@heroicons/react'],
  },
};

export default nextConfig;
