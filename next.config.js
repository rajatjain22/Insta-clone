/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                pathname: '**',
            },
        ],
    },
}


module.exports = nextConfig
