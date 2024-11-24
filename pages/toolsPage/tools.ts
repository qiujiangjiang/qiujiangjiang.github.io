import { string2csv } from './string2csv'

export const tools = [
  {
    title: '转换成带逗号无换行',
    payload: (arg: string) => {
      return string2csv.processingData2(arg).join(',')
    },
    // templateRouter:""
    routePath: '/tools'
  },
  {
    title: '转换成带逗号有换行',
    payload: (arg: string) => {
      return string2csv.processingData(arg).join(',\n')
    },
    routePath: '/tools'
  },
  {
    title: '转换成【带引号逗号无换行】',
    payload: (arg: string) => {
      return string2csv
        .processingData(arg)
        .map((e) => `"${e}"`)
        .join(',')
    },
    routePath: '/tools'
  },
  {
    title: 'json转成csv',
    payload: (arg: string) => {
      return arg
    },
    routePath: ''
  },
  {
    title: '提取链接中的数值(逛逛号)',
    payload: (arg: string) => {
      return arg
    },
    routePath: ''
  },
  {
    title: 'Excel转置',
    payload: (arg: string) => {
      return arg
    },
    routePath:'/TableTranspose'
  }
]
