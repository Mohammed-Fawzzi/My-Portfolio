import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
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
