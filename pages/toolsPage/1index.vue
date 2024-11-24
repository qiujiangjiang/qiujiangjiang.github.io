<template>
  <h1>{{ props.title }}</h1>
  <n-input v-model:value="value" type="textarea" placeholder="输入内容" />

  <n-button @click="get">生成</n-button>
  <n-button @click="clear">清空</n-button>
  <n-button @click="writeClipborad"> 复制内容</n-button>
  <n-input v-model:value="outValue" type="textarea" placeholder="输出内容" />
</template>
<script setup lang="ts">
import { NButton,NInput } from "naive-ui";

import { ref } from "vue";
import { tools } from "./tools";
const props = defineProps(["title"]);
import { useData } from 'vitepress'
const { params } = useData()
const value = ref("");
const outValue = ref("");
const title = ref(props.title)
// 写入剪贴板 这是一个异步的
async function writeClipborad() {
  try {
    await navigator.clipboard.writeText(outValue.value);

    // info();
    console.log("复制成功");
  } catch (error) {
    console.error(error.message);
  }
}

function clear() {
  value.value = "";
  outValue.value = "";
}
function get() {
  console.log(title);
  
  // console.log(tools,params.value.title);
  
  outValue.value = tools.filter((e) => e.title == params.value.title)[0]["payload"](value.value);
}
</script>
<style lang="less"></style>
