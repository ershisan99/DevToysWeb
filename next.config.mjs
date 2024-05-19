/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
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
