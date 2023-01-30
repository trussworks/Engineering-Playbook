const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

const AppEngPages = require('./utils/redirect-appeng');
const AdrsPages = require('./utils/redirect-adrs');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Truss Engineering Playbook',
  tagline: 'Repository of documentation on how we do Software Engineering at TrussWorks.',
  url: 'https://playbook.truss.dev',
  baseUrl: '/',
  organizationName: 'trussworks',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  projectName: 'Engineering-Playbook',
  themeConfig: {
    navbar: {
      title: 'Engineering Playbook',
      logo: {
        alt: 'Truss Logo',
        src: 'img/truss-icon-light.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'About',
        },
        {
          type: 'doc',
          docId: 'practices',
          position: 'left',
          label: 'Practices',
        },
        {
          type: 'doc',
          docId: 'incident-response/README',
          position: 'left',
          label: 'Incident Response',
        },
        {
          href: 'https://github.com/trussworks/Engineering-Playbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Docusaurus Official Docs',
              href: 'https://6130eb5cde15830007fdf57b--docusaurus-2.netlify.app/docs',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} TrussWorks, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/trussworks/Engineering-Playbook/edit/main/',
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-team-cache of index file is possible.
        hashed: true,
        indexBlog: false,
      })
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: (() => {
          let redirects = [];
          redirects.push(AppEngPages);
          redirects.push(AdrsPages);
          return redirects.flat();
        })(),
      },
    ]
  ]
};
