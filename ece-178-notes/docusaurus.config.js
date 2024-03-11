// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ECE 178 Notes',
  tagline: 'Digital Image Processing',
  favicon: 'img/favicon.svg',
  

  // Set the production url of your site here
  url: 'https://ece178.amilworks.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'amilworks', // Usually your GitHub org/user name.
  projectName: 'ece-178-notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/amilworks/ece178/edit/main/ece-178-notes/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
    stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card-ece178-amil.jpeg',
      navbar: {
        title: 'ECE 178 Notes',
        logo: {
          alt: 'ECE 178 Logo',
          src: 'img/ace-final-ct.svg',
          // src: 'img/logo-ece178.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Course Notes',
          },
          {href: 'https://www.canvas.ucsb.edu/', label: 'UCSB Canvas', position: 'left'},
          {
            href: 'https://github.com/amilworks/ece178',
            label: '⭐ GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Course Notes',
                to: '/docs/intro',
              },
              {
                label: 'Programming Help',
                to: '/docs/category/programming-help',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'ChatGPT',
                href: 'https://chat.openai.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/amilworks/ece178',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/image-processing',
              },

              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'UCSB Canvas',
                href: 'https://www.canvas.ucsb.edu/',
              },
              {
                label: 'Amilworks',
                href: 'https://amilworks.io',
              },
              {
                label: 'UCSB ECE Department',
                href: 'https://www.ece.ucsb.edu/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Amilworks, Inc. Built with ❤️ in Santa Barbara, CA.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
