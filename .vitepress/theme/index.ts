/*
 * @Author: qiujiangjiang 1157060413@qq.com
 * @Date: 2024-11-25 19:19:32
 * @LastEditors: qiujiangjiang 1157060413@qq.com
 * @LastEditTime: 2025-01-13 22:49:59
 * @FilePath: \blog-source\.vitepress\theme\index.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import Layout from './Layout.vue'
import './styles/main.css'
import { Theme } from 'vitepress'
import CustomSidebar from './components/CustomSidebar.vue'
import { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FloatingQRCode from './components/FloatingQRCode.vue'
export default {
    // 继承默认主题
    extends: DefaultTheme,
  Layout,
  enhanceApp({ app }:EnhanceAppContext) {
    // 注册全局组件或其他设置
    app.component('CustomSidebar', CustomSidebar)
    app.component('FloatingQRCode', FloatingQRCode)
  }
} satisfies Theme