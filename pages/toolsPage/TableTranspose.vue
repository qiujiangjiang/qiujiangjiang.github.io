<template>
  <!-- 丁娜需要的转置功能 -->
  <div>
    <input type="file" id="excel-upload" accept=".xlsx, .xls" />
    <button id="process-button" @click="processAndDownload()">Process and Download</button>
  </div>
</template>
<script setup>
import * as XLSX from 'xlsx'
import { ref } from 'vue';
// import {  useRoute } from 'vue-router'
// const route = useRoute();
// let queryParam = ref(route.query); // 这将返回一个类型为Record<string | number, string | undefined>的对象
// console.log(queryParam);
 function processAndDownload() {
  const fileInput = document.getElementById('excel-upload')
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0]
    const reader = new FileReader()
    reader.onload = function (e) {
      const data = e.target.result
      const workbook = XLSX.read(data, {
        type: 'binary'
      })

      const sheetName = workbook.SheetNames[0]
      const sheet = workbook.Sheets[sheetName]
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 })

      // 执行数据处理逻辑
      // 最终下载文件
      let processedData = []

      for (let i = 1; i < sheetData.length; i++) {
        // 从第二行开始（跳过表头）
        const row = sheetData[i]

        // 写死 1是key 2是value
        let key = row[0]
        let value = row[1]
        let data = {}
        data[key] = value
        processedData.push(data)
      }
      console.log(processedData)

      // 需要拆分和补足元素

      // 使用reduce方法来计算每个key的出现次数
      var keyCounts = processedData.reduce((counts, obj) => {
        // 获取当前对象的所有keys
        var keys = Object.keys(obj)
        // 遍历keys并更新它们在counts对象中的计数
        keys.forEach((key) => {
          counts[key] = (counts[key] || 0) + 1
        })
        return counts
      }, {})

      // 获取所有keys
      var allKeys = Object.keys(keyCounts)

      // 找出重复次数最多的key
      var max重复次数 = Math.max(...Object.values(keyCounts))

      let jsonData = []
      for (let index = 0; index < max重复次数; index++) {
        let data = {}
        for (let keya = 0; keya < allKeys.length; keya++) {
          const element = allKeys[keya]
          data[element] =
            processedData.filter((e) => Object.keys(e) == element).length > index
              ? Object.values(processedData.filter((e) => Object.keys(e) == element)[index])[0]
              : ''
        }
        // const element = array[index];
        jsonData.push(data)
      }
      // // 输出结果
      // console.log("所有keys:", allKeys);
      // console.log("最高重复次数:", max重复次数);
      // let result = []
      // for (let index = 0; index < max重复次数; index++) {
      //     result.push()

      // }

      // 转换处理后的数据为Excel格式
      const newSheet = XLSX.utils.json_to_sheet(jsonData)
      const newWorkbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Processed Data')

      // 下载Excel文件
      XLSX.writeFile(newWorkbook, 'processed-data.xlsx')
    }
    reader.readAsBinaryString(file)
  }
}
</script>
<style lang="less"></style>