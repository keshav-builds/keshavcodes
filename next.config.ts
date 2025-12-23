import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
       protocol: 'https',
        hostname: 'ik.imagekit.io', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      
    ],
  },
  
};

export default nextConfig;
