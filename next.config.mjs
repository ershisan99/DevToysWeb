/** @type {import('next').NextConfig} */
const nextConfig = {
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
