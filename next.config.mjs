// Next.js configuration with custom Webpack for SVG handling
const nextConfig = {
  basePath: '/mcode-www-preview',
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    // Reapply the existing rule, but only for svg imports ending in ?url
    config.module.rules.push({
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
    });

    // Convert all other *.svg imports to React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: fileLoaderRule?.issuer,
      resourceQuery: {
        not: [...(fileLoaderRule?.resourceQuery?.not || []), /url/],
      }, // exclude if *.svg?url
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [],
          },
        },
      },
    });

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
