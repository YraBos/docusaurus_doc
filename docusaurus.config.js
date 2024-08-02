import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Документация',
  tagline: 'docusaurus',
  favicon: 'img/favicon.ico',

  baseUrl: '/docusaurus/',
  url: 'https://yrabos.github.io',

  organizationName: 'yrabos', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  headTags: [
    {
        tagName: 'meta',
        attributes: {
            name: 'keywords',
            content: 'docusaurus, docusaurus web, статический сайт, web документация, docusaurus create, docusaurus deploy',
        },
    },
    {
        tagName: 'meta',
        attributes: {
            name: 'description',
            content: 'Docusaurus: создание проектов',
        },
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YraBos/docusaurus_doc/edit/main',
          editLocalizedFiles: true,
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Docusaurus',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        copyright: " ",
      },
      prism: {
        theme: prismThemes.nightOwlLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'css', 'java', 'json'],
      },
    }),
};


