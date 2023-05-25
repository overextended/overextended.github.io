// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Overextended',
  tagline: 'Official documentation for Overextended resources',
  url: 'https://overextended.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ox.ico',
  organizationName: 'overextended', // Usually your GitHub org/user name.
  projectName: 'overextended.github.io', // Usually your repo name.

  //   plugins: ['@docusaurus/'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/overextended/overextended.github.io/tree/main/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Overextended',
        logo: {
          alt: 'Ox Logo',
          src: '/img/ox_64.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            href: 'https://www.github.com/overextended',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://discord.gg/hmcmv3P7YW',
            label: 'Discord',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
      algolia: {
        appId: '8XXXVNJ7UW',
        apiKey: '3680aeb79049744c6629dd0abd2f5dfe',
        indexName: 'overextended',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
