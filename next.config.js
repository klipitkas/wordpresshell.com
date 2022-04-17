/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // fixes next-mdx-remote: Package path ./jsx-runtime.js is not exported from package react
      // https://github.com/hashicorp/next-mdx-remote/issues/237
      'react/jsx-runtime.js': require.resolve('react/jsx-runtime'),
    };
    return config;
  },
};

module.exports = nextConfig;
