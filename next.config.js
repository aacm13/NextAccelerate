/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
        },
      ],
    },
  };
};

module.exports = nextConfig;
