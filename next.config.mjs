/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "photo-foodbless.s3.ap-southeast-1.amazonaws.com",
            }
        ]
    }
};
export default nextConfig;
