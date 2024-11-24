const fs = require('fs');
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