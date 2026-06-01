import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/cocoro2" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: isProd ? "/cocoro2/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
  // NEXT_PUBLIC_BASE_PATH をビルド時に埋め込む → 静的アセットパスの手動構築に使用
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
