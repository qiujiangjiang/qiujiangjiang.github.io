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
  title: "小江哥的资源库",
  description: "不定期更新的",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
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
      {
        text: "Examples",
        // collapsed: false,
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
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
    plugins:[]
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
