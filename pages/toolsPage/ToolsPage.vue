<template>
  <h1>小工具页面</h1>
  <br />
  <div class="ToolsPages">
    <div v-for="(item, key) in tools" v-bind:key>
      <n-card :title="item.title" @click="navigateTo(item)" > {{ item.title}} <br> 点击跳转</n-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NCard } from "naive-ui";
// import { titleProps } from "ant-design-vue/es/typography/Title";
import { tools } from "./tools";
import { DefaultTheme } from "vitepress";
// import { useRouter } from 'vue-router'
// 或者 Vue 3 + Vue Router 4方式：
// const router = useRouter()
function getitems(): (
  | DefaultTheme.NavItemWithLink
  | DefaultTheme.NavItemChildren
)[] {
  return tools.map((item) => {
    // 假设每个item都是一个对象，我们将其嵌入到一个新的对象中，键为'params'
    return { text: item["title"], link: `/pages/toolsPage/${item["title"]}` };
  });
}
const navigateTo = (itemx: {
  title: string;
  routePath: string;
  payload: any;
}) => {
  // 路由跳转
  // router.push({
  //   path: item.routePath,
  //    query: {title:item.title} || {}
  // })
  open(getitems().filter((item) => item.text == itemx.title)[0]["link"]);
};
</script>
<style lang="scss" scoped>
div {
  
  // display: flex;
  // > * {
  //   // background-color: black;
  //   padding: 10px;
  //   border-radius: 5%;
  // }
}
.ToolsPages{
  display: flex;
  flex-wrap: wrap;
  > div {
    padding: 10px; 
    // border: 1px ;
  }
}
</style>
