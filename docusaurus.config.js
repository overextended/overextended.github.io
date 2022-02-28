// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
            href: 'https://www.discord.gg/overextended',
            label: 'Discord',
            position: 'left',
          },
          {
            to: 'docs/',
            label: 'Documentation',
            position: 'right',
          },
          {
            // Still have to add the actual search :(
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Overextended`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
		additionalLanguages: ['lua']
      },
    }),
};

module.exports = config;
