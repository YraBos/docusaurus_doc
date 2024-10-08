import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'Docusaurus',
  tagline: 'Docusaurus создание сайтов',
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
            content: 'docusaurus, docusaurus это, docusaurus помощь справка доки, docusaurus секреты фишки сервисы, docusaurus help docs, docusaurus github pages, docusaurus установка настройка, docusaurus install settings, docusaurus сайт создать, docusaurus create site',
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

      themes: [
        // ... Настройки вашей темы
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
          ({
            // ... Ваши опции
            // рекомендуется использовать `hashed`, поскольку возможно долгосрочное кэширование индексного файла
            hashed: true,
            language: ["en", "ru"], // включаем обрабатываемые языки
            indexBlog: false, // включаем индексирование для поиска блога (если он есть или мы этого хотим), иначе false
            indexPages: true, // индексируем страницы для поиска
            highlightSearchTermsOnTargetPage: true, // подсветка найденного
          }),
        ],
      ],

};


