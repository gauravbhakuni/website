/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                hostname: 'cdn.sanity.io',
            },
        ],
    },
};

export default nextConfig;
