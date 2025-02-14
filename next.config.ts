import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "assets.afcdn.com"
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net"
      },
      {
        protocol: "https",
        hostname: "img.cuisineaz.com"
      },
      {
        protocol: "https",
        hostname: "tarasmulticulturaltable.com"
      }
    ]
  }
};

export default nextConfig;
