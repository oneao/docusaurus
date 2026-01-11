import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'oneao',
  tagline: '技术 · 笔记 · 记录',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.oneao.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'oneao',
      logo: {
        alt: 'oneao',
        src: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'dropdown',
          label: '编程语言',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              label: 'ReactNative',
              sidebarId: 'ReactNativeSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Vue',
              sidebarId: 'VueSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Uniapp',
              sidebarId: 'UniappSidebar',
            },
          ],
        },
        {
          type: 'dropdown',
          label: '开发工具',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              label: 'Docusaurus',
              sidebarId: 'DocusaurusSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Git',
              sidebarId: 'GitSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Docker',
              sidebarId: 'DockerSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Agent',
              sidebarId: 'AgentSidebar',
            },
            {
              type: 'docSidebar',
              label: '包管理器',
              sidebarId: 'PackageManageSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Web 和 应用服务器',
              sidebarId: 'ServerSidebar',
            },
          ],
        },
        {
          type: 'dropdown',
          label: '数据库',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              label: 'PostgreSQL',
              sidebarId: 'PostgreSQLSidebar',
            },
            {
              type: 'docSidebar',
              label: 'SqlServer',
              sidebarId: 'SqlServerSidebar',
            },
          ],
        },
        {
          to: '/blog',
          label: '博客',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          'aria-label': 'GitHub Repository',
          'className': 'navbar--github-link',
          'href': 'https://github.com/oneao',
          'position': 'right',
          'title': 'Github',
        },
        {
          'aria-label': 'Gitee Repository',
          'className': 'navbar--gitee-link',
          'href': 'https://gitee.com/oneao',
          'position': 'right',
          'title': 'Gitee',
        },
        {
          'aria-label': 'Email',
          'className': 'navbar--email-link',
          'href': 'mailto:hi_itao@163.com',
          'position': 'right',
          'title': 'Email',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    algolia: {
      appId: '4IBAG5TBY3',
      apiKey: 'c2d2e67295117b9bea79946f285bb128',
      indexName: 'docusaurus',
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
