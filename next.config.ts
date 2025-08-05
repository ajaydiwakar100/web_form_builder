import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_DISABLE_FONT_OPTIMIZATION: "true"
  }
};

export default nextConfig;
