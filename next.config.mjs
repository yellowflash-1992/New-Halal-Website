/** @type {import('next').NextConfig} */

// Detect if running inside GitHub Actions CI/CD or with an explicit base path
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const defaultRepoName = "/halal-fit-sis";

// Base path: from NEXT_PUBLIC_BASE_PATH if provided, or repository name in GitHub Actions, or empty for local dev
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isGithubActions
      ? process.env.GITHUB_REPOSITORY
        ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
        : defaultRepoName
      : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
