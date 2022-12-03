import { navbar } from 'vuepress-theme-hope'

export const mobileNavbar = navbar([
  { text: '主页', icon: 'home', link: '/' },
  {
    text: '常见问题',
    icon: 'docs',
    children: [
      { text: '桌面端', icon: 'desktop', link: '/desktop/' },
      { text: '移动端', icon: 'mobile', link: '/mobile/' },
    ],
  },
  { text: '软件下载', icon: 'download', link: '/download/' },
  { text: '反馈', icon: 'report', link: '/report/' },
])
