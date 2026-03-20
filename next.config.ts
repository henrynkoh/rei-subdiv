import path from "path";
import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
