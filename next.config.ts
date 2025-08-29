/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["twzaxpwgrivrbhirhbpk.supabase.co"],
  },
  // Temporarily disable redirects to break the loop
  async redirects() {
    return [];
  },
};

export default nextConfig;