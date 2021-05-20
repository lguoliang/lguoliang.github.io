/**
 * 顶部导航
 */
const nav = [
  { text: 'Home', link: '/' },
  { text: 'JS', link: '/js/' },
  { text: 'Mini Program', link: '/weapp/' },
  { text: 'Git', link: '/git/' },
  { text: 'Npm', link: '/npm/' },
  { text: 'JQuery', link: '/jquery/' },
  { text: 'Html', link: '/html/' },
  { text: 'Other', link: '/other/' },
  {
    text: 'Link',
    items: [
      { text: 'External', link: 'https://baidu.com' }
    ]
  }
]
/**
 * 侧边栏菜单
 */
const sidebar = {
  '/js/': require('./sidebar/_js'),
  '/git/': require('./sidebar/_git'),
  '/vue/': require('./sidebar/_vue'),
  '/weapp/': require('./sidebar/_weapp'),
  '/npm/': require('./sidebar/_npm'),
  '/jquery/': require('./sidebar/_jquery'),
  '/html/': require('./sidebar/_html'),
  '/other/': require('./sidebar/_other')
}

module.exports = {
  port: 8086,
  title: 'GL\'s Blog', 
  description: '知识的贫穷，限制了你的想像力。',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: { nav, sidebar },
  plugins: ['@vuepress/back-to-top', '@vuepress/last-updated', '@vuepress/blog']
}