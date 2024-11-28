<!--
 * @Author: qiujiangjiang 1157060413@qq.com
 * @Date: 2024-11-28 20:52:34
 * @LastEditors: qiujiangjiang 1157060413@qq.com
 * @LastEditTime: 2024-11-28 20:52:43
 * @FilePath: \blog-source\.vitepress\components\searcg.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <select v-model="selectedSearcher" @change="switchSearcher">
      <option value="local">本地搜索</option>
      <option value="google">谷歌搜索</option>
      <!-- 这里可以添加更多的搜索引擎选项 -->
    </select>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vitepress';
  
  const router = useRouter();
  const selectedSearcher = ref('local');
  
  const switchSearcher = () => {
    // 根据选择的搜索引擎更新配置中的搜索器
    router.push({
      query: {
        searcher: selectedSearcher.value,
      },
    });
  };
  </script>