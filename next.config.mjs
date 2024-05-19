/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: "export",
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    reactCompiler: true,
  },
};

export default process.env.ANALYZE === "true"
  ? (await import("@next/bundle-analyzer")).default({ enabled: true })(nextConfig)
  : nextConfig;
