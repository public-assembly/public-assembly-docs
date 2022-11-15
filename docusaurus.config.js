// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Public Assembly Docs',
  tagline: 'Create Whats Missing',
  url: 'https://public---assembly.com/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'logo.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/public-assembly/public-assembly-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/public-assembly/public-assembly-docs',
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
        title: 'Public Assembly',
        logo: {
          alt: 'My Site Logo',
          src: 'logo.png',
        },

        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      // footer: {
      //   style: 'light',
      //   links: [
      //     {
      //       title: 'Public Assembly',
      //       items: [
      //         {
      //           label: 'PBLC',
      //           href: 'public---assembly.com',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Notion',
      //           href: 'https://www.notion.so/ourzora/Neosound-working-product-title-dd4ef7e0ce8c478386ef867a5d0f7ffe',
      //         },
      //         {
      //           label: 'Figma',
      //           href: 'https://www.figma.com/file/IMYiNZVVJCvO9Yjn0IBe1f/~neosound~-%5Bcommunity%5D?node-id=388%3A490',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/pblcasmbly',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Public Assembly, Inc.`,
      // },
      prism: {
        //theme: lightCodeTheme,
        //darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
