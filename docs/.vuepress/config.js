const script = require('./sidebar/script')

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
      {
        text: 'Other',
        items: [
          { text: 'External', link: 'https://baidu.com' }
        ]
      }
    ],
    sidebar: {
      '/js/': script,
      '/git/': [{
        title: 'git',
        children: [
          '',
          'git问题处理'
        ]
      }]
    }
  }
}