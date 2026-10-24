import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The repo root also contains other apps; keep tracing scoped to this project.
  outputFileTracingRoot: path.join(__dirname),
  // PGlite must be loaded by the Node runtime, not bundled by webpack.
  serverExternalPackages: ["@electric-sql/pglite"],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
