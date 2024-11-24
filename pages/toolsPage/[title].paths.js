import {tools} from './tools'

function convertJsonFormat(jsonArray) {
  // 使用map函数遍历原始数组
  return jsonArray.map(item => {
    // 假设每个item都是一个对象，我们将其嵌入到一个新的对象中，键为'params'
    return { params: item };
  });
}
export default {
    paths: () => convertJsonFormat(tools)
  }