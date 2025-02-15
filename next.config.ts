import type { NextConfig } from "next";

const DEPLOY_ENV = process.env.DEPLOY_ENV;

const githubPagesNextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: "/chelajs-website/",
};

const nextConfig: NextConfig = {
  /* config options here */
  ...(DEPLOY_ENV === "github-pages" ? githubPagesNextConfig : {}),
};

export default nextConfig;
