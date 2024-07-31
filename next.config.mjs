/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images:{
        remotePatterns: [
            { hostname: "strong-sandpiper-465.convex.cloud" }
        ],
    },
};

export default nextConfig;
