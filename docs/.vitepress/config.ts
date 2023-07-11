import {defineConfig} from 'vitepress';
const {description} = require('../package');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NotifyBC',
  description: description,
  themeConfig: {
    repo: 'bcgov/NotifyBC',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {
        text: 'Docs',
        link: '/docs/',
      },
      {text: 'Help', link: '/help/'},
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            {text: 'Welcome', link: 'docs/getting-started/'},
            {text: 'Overview', link: 'docs/getting-started/overview'},
            {text: 'Quick Start', link: 'docs/getting-started/quickstart'},
            // 'getting-started/installation',
            // 'getting-started/web-console',
            // "getting-started/what's-new",
          ],
        },
        /*
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            'config/overview',
            'config/database',
            'config/adminIpList',
            'config/reverseProxyIpLists',
            'config/httpHost',
            'config/internalHttpHost',
            'config/email',
            'config/sms',
            'config/subscription',
            'config/notification',
            'config/nodeRoles',
            'config/cronJobs',
            'config/rsaKeys',
            'config/workerProcessCount',
            'config/middleware',
            'config/oidc',
            'config/certificates',
          ],
        },
        {
          text: 'API',
          collapsed: false,
          items: [
            'api/overview',
            'api/subscription',
            'api/notification',
            'api/config',
            'api/administrator',
            'api/bounce',
          ],
        },
        {
          text: 'Miscellaneous',
          collapsed: false,
          items: [
            'miscellaneous/benchmarks',
            'miscellaneous/bulk-import',
            'miscellaneous/developer-notes',
            'miscellaneous/upgrade',
          ],
        },
        {
          text: 'Meta',
          collapsed: false,
          items: ['meta/conduct', 'meta/acknowledgments'],
        },
        */
      ],
    },

    socialLinks: [{icon: 'github', link: 'https://github.com/vuejs/vitepress'}],
    externalLinkIcon: true,
  },
  rewrites: {
    'docs/getting-started/index.md': 'docs/index.md',
  },
});
