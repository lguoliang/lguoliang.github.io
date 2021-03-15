const script = require('./sidebar/script')
const git = require('./sidebar/git')
const weapp = require('./sidebar/weapp')

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
      { text: 'Git', link: '/git/' },
      { text: 'Mini Program', link: '/weapp/' },
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
      '/weapp/': weapp,
      '/other/': [{
        title: 'other',
        children: [
          ''
        ]
      }]
    }
  }
}