---
# https://vitepress.dev/reference/default-theme-home-page
layout: home 

hero:
  name: "小江哥的资源库"
  text: "不定期更新的"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: 进入站点
      link: /markdown-examples
    - theme: alt
      text: 其他问题
      link: /api-examples
    - theme: brand
      text: 文章
      link: /docs
    - theme: alt
      text: 福利
      link: https://kzurl13.cn/7cDjoZ

features:
  - title: 美团外卖优惠卷
    details: 点击
    link: https://kzurl13.cn/7cDjoZ 
  - title: 选择
    details: 做正确的选择
  - title: 沉淀
    details: 积累和复习
  # - title: 文章
  #   details: 学习成长
---

<script setup>
import { NAV_DATA } from './pages/nav/data'
import  MNavLinks from './.vitepress/components/MNavLinks.vue'
import {data} from './pages/nav/read.data.js'
import TableTranspose from './pages/toolsPage/TableTranspose.vue';
import SearchBox from './.vitepress/components/search.vue';
import { ref } from 'vue';
import { NLayoutSider, NMenu } from 'naive-ui';
// 定义侧边栏菜单选项
const menuOptions = ref([
  {
    label: '首页',
    key: '/',
    icon: 'home'
  },
  {
    label: '文档',
    key: '/docs',
    icon: 'document'
  },
  {
    label: '关于我们',
    key: '/about',
    icon: 'info-circle'
  },
]);

// 处理菜单选项被选中的事件
const handleSelect = (key) => {
  // 这里可以根据选中的key进行页面跳转等操作
  console.log(`选中了: ${key}`);
};
// import 'ant-design-vue/dist/reset.css';
console.log(NAV_DATA)
</script>
<style src="./pages/nav/index.scss"></style>

<br />

# 前端导航
  <div>
    <!-- 其他布局内容 -->
    <SearchEngineSwitcher />
    <SearchBox /> <!-- 假设已经有一个名为SearchBox的搜索框组件，由搜索插件生成 -->
    <!-- 其他布局内容 -->
  </div>
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

<style lang="scss">

  a[href="https://kzurl13.cn/7cDjoZ"]{
background-color: #ffa517 !important
  }
  </style>
