/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 Forces Next.js to generate static HTML files
  images: {
    unoptimized: true, // 👈 Required because static sites can't optimize images on the fly
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
