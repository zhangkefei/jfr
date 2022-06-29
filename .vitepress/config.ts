import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = '自由的JS包管理平台'
const ogImage = ''
const ogTitle = 'JFR'
const ogUrl = 'https://zhangkefei.github.io/jfr/'

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
    ['meta', { property: 'og:url', content: ogUrl }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: './diamond.svg',
    localeLinks: {
      text: '简体中文',
      items: [
        { text: 'English', link: 'https://zhangkefei.github.io/jfr/' },
      ]
    },

    footer: {
      message: '根据 MIT 许可证发布',
      copyright: 'Copyright © 2022 HIBIT & JFR Contributors'
    },

    nav: [
      { text: '首页', link: '/', activeMatch: '' },
      { text: '指引', link: '/guide/', activeMatch: '/guide/' },
      // { text: '配置', link: '/config/', activeMatch: '/config/' },
      {
        text: '相关链接',
        items: [
          {
            text: 'Awesome JFR',
            link: 'https://'
          },
          {
            text: '更新日志',
            link: 'https://'
          }
        ]
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '为什么用 JFR',
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
          ]
        },
        {
          text: '命令',
          items: [
            {
              text: '登入 login',
              link: '/guide/command-login'
            },
            {
              text: '登出 logout',
              link: '/guide/command-logout'
            },
            {
              text: '搜索 search',
              link: '/guide/command-search'
            },
            {
              text: '安装 install',
              link: '/guide/command-install'
            },
            {
              text: '发布 publish',
              link: '/guide/command-publish'
            },
            {
              text: '价格 price',
              link: '/guide/command-price'
            },
          ]
        }
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            {
              text: '配置 JFR',
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
