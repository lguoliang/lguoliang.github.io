const script = require('./sidebar/script')
const git = require('./sidebar/git')
const weapp = require('./sidebar/weapp')
const vueSidebar = require('./sidebar/vueSidebar')

module.exports = {
  port: 8086,
  title: 'GL\'s Blog', 
  // description: '知识的贫穷，限制了你的想像力。',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JS', link: '/js/' },
      { text: 'Mini Program', link: '/weapp/' },
      { text: 'Git', link: '/git/' },
      { text: 'Npm', link: '/npm/' },
      { text: 'Other', link: '/other/' },
      {
        text: 'Link',
        items: [
          { text: 'External', link: 'https://baidu.com' }
        ]
      }
    ],
    sidebar: {
      '/js/': script,
      '/git/': git,
      '/vue/': vueSidebar,
      '/weapp/': weapp,
      '/npm/': [
        '',
        '源地址配置',
        'npm包管理'
      ],
      '/other/': [{
        // title: 'other',
        collapsable: false,
        children: [
          '',
          '费曼学习法',
          'Gitbook'
        ]
      }]
    }
  },
  // plugins: {
  //   '@vuepress/back-to-top': true,
  //   '@vuepress/last-updated': true
  // }
  plugins: ['@vuepress/back-to-top', '@vuepress/last-updated', '@vuepress/blog']
}