/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ]
  },
}

export default nextConfig
