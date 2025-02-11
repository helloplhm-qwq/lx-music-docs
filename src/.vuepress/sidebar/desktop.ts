import { sidebar } from 'vuepress-theme-hope'

export const desktopSidebar = sidebar({
  '/desktop/document/': [
    {
      text: '通用',
      icon: 'common',
      prefix: 'common/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '下载',
      icon: 'download',
      prefix: 'download/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '播放',
      icon: 'play',
      prefix: 'play/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '安装',
      icon: 'package',
      prefix: 'install/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '自定义源',
      icon: 'diy',
      prefix: 'source/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '本地列表',
      icon: 'local',
      prefix: 'list/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '外部歌单',
      icon: 'songlist',
      prefix: 'songlist/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '桌面歌词',
      icon: 'lyric',
      prefix: 'desktop-lyric/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '同步与备份',
      icon: 'sync',
      prefix: 'sync-backup/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '界面显示异常',
      icon: 'screen',
      prefix: 'screen-abnormal/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '其他问题',
      icon: 'other',
      prefix: 'other/',
      children: 'structure',
      collapsible: true,
    },
    'changLog.md',
    'data-path',
    'hotkey.md',
    'scheme-url.md',
    'run-params.md',
    'license.md',
    'use-source.md',
  ],
})
