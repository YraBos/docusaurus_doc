import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'Docusaurus',
  tagline: 'Docusaurus installation and creation of websites',
  favicon: 'img/favicon.ico',

  baseUrl: '/docusaurus/',
  url: 'https://yrabos.github.io',

  organizationName: 'yrabos',
  projectName: 'docusaurus',
  deploymentBranch: 'main',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
        tagName: 'meta',
        attributes: {
            name: 'description',
            content: 'Docusaurus',
        },
    },
    {
        tagName: 'meta',
        attributes: {
            name: 'keywords',
            content: 'docusaurus installation example config site create build deploy promotion github pages docusaurus установка примеры настройка сайта развертывание сайтов продвижение',
        },
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
//          editUrl: 'https://github.com/yrabos/docusaurus_doc/edit/main',
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
        title: 'Документация',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
      },

      footer: {
        style: 'dark',
        copyright: `Minsk,  ${new Date().getFullYear()}.`
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


