/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/api/generate': ['./fonts/**/*'],
  },
};

export default nextConfig;
