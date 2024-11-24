// example.data.js
import fs from "node:fs";
import yaml from "js-yaml";
import path from "path";
// import { parse } from 'csv-parse/sync'
export default {
  watch: ["../docs/*.md"],
  load(watchedFiles) {
    // watchFiles 是一个所匹配文件的绝对路径的数组。
    // 生成一个博客文章元数据数组
    // 可用于在主题布局中呈现列表。
    return watchedFiles.map((file: string) => {
      return path.basename(file);
    });
  },
};
