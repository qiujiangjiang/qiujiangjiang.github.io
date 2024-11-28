/*
 * @Author: qiujiangjiang 1157060413@qq.com
 * @Date: 2024-11-25 19:19:32
 * @LastEditors: qiujiangjiang 1157060413@qq.com
 * @LastEditTime: 2024-11-28 20:55:42
 * @FilePath: \blog-source\pages\nav\read.data.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import fs from 'fs';
// example.data.js
export default {
    watch: ['../../.vitepress/assets/data.json'],
    load(watchedFiles) {
        // watchFiles 是一个所匹配文件的绝对路径的数组。
        // 生成一个博客文章元数据数组
        // 可用于在主题布局中呈现列表。
        return watchedFiles.map((file) => {
          return JSON.parse(fs.readFileSync(file, 'utf-8'))
      })
}}