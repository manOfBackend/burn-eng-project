import "@sayvoca/lib/env.mjs"
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@sayvoca/ui", "@sayvoca/lib"],
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  webpack: (config, { isServer }) => {
    config.plugins = [...config.plugins, new PrismaPlugin()]
    return config;
  }
};

export default nextConfig