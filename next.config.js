const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = {
  ...withNextra(),
  rewrites: null,
  output: 'export',
  images: {
    unoptimized: true,
  },
};
