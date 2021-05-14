const withMDX = require('@next/mdx')();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';

module.exports = withBundleAnalyzer(
  withMDX({
    pageExtensions: ['ts', 'tsx', 'mdx'],
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    env: {
      baseUrl: baseUrl,
    },
    future: {
      webpack5: true,
    },
  })
);
