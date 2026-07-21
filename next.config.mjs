import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.pdf$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: "asset/resource",
      }
    );
    return config;
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon.jpg",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
