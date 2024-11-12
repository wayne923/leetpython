import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LeetPython',
  tagline: 'Learn smarter, not harder with simplified learning',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://leetpython.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wayne923', // Usually your GitHub org/user name.
  projectName: 'leetpython', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            undefined,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            undefined,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-4PRZNLEDR2',
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date',
          priority: null,
          changefreq: null,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'LeetPython Logo',
        src: 'img/OfficialLeetPythonLogo.png',
      }, 
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          to: '/docs/category/beginner/',
          label: 'Projects',
          position: 'left'
        },      
        {to: '/blog', label: 'Newsletters', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Beginner Python Fundamentals',
              to: '/docs/category/beginner-python-fundamentals',
            },
            {
              label: 'Advanced Python Fundamentals',
              to: '/docs/category/advanced-python-fundamentals',
            },
            {
              label: 'Projects',
              to: '/docs/category/beginner',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@leetpython',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/leetpython',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Principles of AI',
              href: 'https://www.youtube.com/@principlesofai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LeetPython Inc.`,
    },
    metadata: [
      {name: 'keywords', content: 'Python, Programming, Learn Python, Python Tutorials, Python Projects, Easy Python, Python Tips, Python for Beginners'},
      {name: 'description', content: 'LeetPython offers simplified learning approaches to mastering Python. Dive into our comprehensive tutorials, projects, and community support to enhance your coding skills effectively.'}
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;