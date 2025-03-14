/*
 * @Author: qiujiangjiang 1157060413@qq.com
 * @Date: 2024-11-25 19:19:32
 * @LastEditors: qiujiangjiang 1157060413@qq.com
 * @LastEditTime: 2025-01-13 23:47:03
 * @FilePath: \blog-source\.vitepress\config.mts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { defineConfig, DefaultTheme } from "vitepress";
import { tools } from "../pages/toolsPage/tools";


const fileAndStyles: Record<string, string> = {}
function getitems(): (
  | DefaultTheme.NavItemWithLink
  | DefaultTheme.NavItemChildren
)[] {
  return tools.map((item) => {
    // 假设每个item都是一个对象，我们将其嵌入到一个新的对象中，键为'params'
    return { text: item["title"], link: `/pages/toolsPage/${item["title"]}` };
  });
}



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的网站",
  description: "网站描述",
  base: '/',  // 对于 username.github.io 仓库，使用根路径 '/'
  
  // 构建输出配置
  outDir: '.vitepress/dist',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      {
        text: "小工具",
        // items: getitems(),
        link: "/pages/toolsPage/ToolsPage",
      },
      { text: "设置", link: "/config" },
      // { text: '项目', link: 'https://github.com/...' },
      { text: "项目", link: "/nav/index" },
      { text: "小工具", link: "/pages/toolsPage/ToolsPage" },
    ],
    outline: {
      level: [1, 6],
      label: "目录",
    },
    search: {
      provider: "local",
    },
    sidebar: [
      //默认侧边栏
      {
        text: "导航栏",
       collapsed: false,
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qiujiangjiang' }
    ],

    // 确保资源路径正确
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ]
  },
  locales: {
    root: {
      label: "English",
      lang: "cn",
    },
  },
  vite:{
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc']
    },
    plugins:[
    
    ],
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  // async enhanceApp({ app }) {
  //   app.config.globalProperties.getResourceFileNames = getResourceFileNames;
  // },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html) return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, style + '</head>')
    }
  }


});
