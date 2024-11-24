<script setup lang="ts">
// import { NButton, NInput } from "naive-ui";
import NaiveUI from 'naive-ui';
import { ref } from "vue";
const inputValue = ref("");
const outValue = ref("");
function clickTips() {
  console.log(0);
}
</script>
<template>
  <h1>爱塞缝塞缝</h1>
  <n-split direction="horizontal" style="height: 200px" :max="0.75" :min="0.25">
    <template #1>
      <n-input
        v-model:value="inputValue"
        type="textarea"
        placeholder="基本的 Textarea"
        autosize
        style="min-width: 30%"
      />
    </template>
    <template #2>
      <div>
        <n-button @click="clickTips" color="#8a2be2">处理</n-button>
        <n-button @click="clickTips" color="#8a2be2">重置</n-button>
      </div>
    </template>
    <template #3>
      <n-input
        v-model:value="outValue"
        type="textarea"
        placeholder="基本的 Textarea"
        autosize
        style="min-width: 30%"
      />
    </template>
  </n-split>
</template>
<style></style>
