<template >
    <h1>爱塞缝塞缝</h1>
    <n-flex justify="space-around" size="large">
        <n-input v-model:value="inputValue" type="textarea" placeholder="基本的 Textarea" />
        <div>
            <n-button @click="clickTips" color="#8a2be2">处理</n-button>
            <n-button @click="clickTips" color="#8a2be2">重置</n-button>

        </div>
        <n-input v-model:value="outValue" type="textarea" placeholder="基本的 Textarea" />
    </n-flex>
</template>
<script setup lang="ts">
import { withBase } from 'vitepress'
import { NButton, NInput, NFlex } from 'naive-ui'
import { ref } from 'vue'
const inputValue = ref("")
const outValue = ref("")
function clickTips() {
    console.log(1);

} 
</script>
