import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://main.vitejs.dev/og-image.png'
const ogTitle = 'JFR'
const ogUrl = 'https://main.vitejs.dev'

export default defineConfig({
  title: 'JFR',
  description: '自由的JS包管理平台',
  lang: 'zh-CN',
  base: '/jfr/',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './diamond.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'twitter:description', content: ogDescription }],
    ['meta', { property: 'twitter:title', content: ogTitle }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: ogImage }],
    ['meta', { property: 'twitter:url', content: ogUrl }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: './diamond.svg',

    // editLink: {
    //   text: '为此页提供修改建议',
    //   pattern: 'https://github.com/vitejs/docs-cn/edit/main/docs/:path',
    // },

    // socialLinks: [
    //   { icon: 'twitter', link: 'https://twitter.com/vite_js' },
    //   { icon: 'discord', link: 'https://chat.vitejs.dev' },
    //   { icon: 'github', link: 'https://github.com/vitejs/vite' }
    // ],

    // algolia: {
    //   apiKey: 'b573aa848fd57fb47d693b531297403c',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:cn']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev'
    // },

    localeLinks: {
      text: '简体中文',
      items: [
        { text: 'English', link: 'https://vitejs.dev' },
      ]
    },

    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: 'Copyright © 2022 HIBIT & JFR Contributors'
    },

    nav: [
      { text: '指引', link: '/guide/', activeMatch: '/guide/' },
      { text: '配置', link: '/config/', activeMatch: '/config/' },
      { text: '插件', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: '相关链接',
        items: [
          // {
          //   text: 'Twitter',
          //   link: 'https://twitter.com/vite_js'
          // },
          // {
          //   text: 'Discord Chat',
          //   link: 'https://chat.vitejs.dev'
          // },
          {
            text: 'Awesome JFR',
            link: 'https://'
          },
          // {
          //   text: 'Dev.to 社区',
          //   link: 'https://dev.to/t/vite'
          // },
          // {
          //   text: 'Rollup 插件兼容',
          //   link: 'https://vite-rollup-plugins.patak.dev/'
          // },
          {
            text: '更新日志',
            link: 'https://'
          }
        ]
      },
      // {
      //   text: 'v3 (next)',
      //   items: [
      //     {
      //       text: 'v2.x（稳定版）',
      //       link: 'https://v2.vitejs.dev'
      //     }
      //   ]
      // }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '为什么选 JFR',
              link: '/guide/why'
            },
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: '功能',
              link: '/guide/features'
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins'
            },
            {
              text: '依赖预构建',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: '静态资源处理',
              link: '/guide/assets'
            },
            {
              text: '构建生产版本',
              link: '/guide/build'
            },
            {
              text: '部署静态站点',
              link: '/guide/static-deploy'
            },
            {
              text: '环境变量与模式',
              link: '/guide/env-and-mode'
            },
            {
              text: '服务端渲染（SSR）',
              link: '/guide/ssr'
            },
            {
              text: '后端集成',
              link: '/guide/backend-integration'
            },
            {
              text: '比较',
              link: '/guide/comparisons'
            },
            {
              text: '从 v2 迁移',
              link: '/guide/migration'
            }
          ]
        },
        {
          text: 'API',
          items: [
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            },
            {
              text: '配置参考',
              link: '/config/'
            }
          ]
        }
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            {
              text: '配置 Vite',
              link: '/config/'
            },
            {
              text: '共享选项',
              link: '/config/shared-options'
            },
            {
              text: '服务器选项',
              link: '/config/server-options'
            },
            {
              text: '构建选项',
              link: '/config/build-options'
            },
            {
              text: '预览选项',
              link: '/config/preview-options'
            },
            {
              text: '依赖优化选项',
              link: '/config/dep-optimization-options'
            },
            {
              text: 'SSR 选项',
              link: '/config/ssr-options'
            },
            {
              text: 'Worker 选项',
              link: '/config/worker-options'
            }
          ]
        }
      ]
    }
  },

  markdown: {
    anchor: {
      permalink: renderPermaLink,
    },
    config: (md) => {
      md.use(MarkDownItCustomAnchor)
    }
  }
})
