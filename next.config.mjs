/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  basePath: "/YOUR-REPOSITORY-NAME",
  assetPrefix: "/YOUR-REPOSITORY-NAME/",
  // This safely skips headers during the static build phase
  ...(process.env.NODE_ENV !== "production" && {
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin",
            },
          ],
        },
      ];
    },
  }),
};

export default nextConfig;
