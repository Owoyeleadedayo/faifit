/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["twzaxpwgrivrbhirhbpk.supabase.co"],
  },
  async redirects() {
    return [
      {
        source: '/:path((?!details).*)', // Match all paths except those starting with /details
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;