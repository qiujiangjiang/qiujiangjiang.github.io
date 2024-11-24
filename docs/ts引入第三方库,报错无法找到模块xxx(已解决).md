---
title: 'ts引入第三方库,报错无法找到模块xxx(已解决)'
tags:
  - typescript
  - 已解决
  - 报错
category: typescript
abbrlink: 3eba2879
date: 2022-11-13 21:24:37
---

# 问题
在项目中`import`引入第三方库时，提示报错信息，
> 无法找到模块 "xxx" 的声明文件

简单来说就是要么没有下载需要通过npm或者其他包管理进行下载，要么就是下载的版本不是对应的ts的版本。

# 解决方式

## 1.下载ts版本包

- 在包名前添加`@types`下载支持ts的版本，但是问题是不是所有的包都有ts的版本。

```typescript

npm install -D @types/XXX
or
yarn add -D @types/XXX

```

## 2.声明模块类型
```bash
# 1.在根目录新建types文件夹。
mkdir types

# 2.在 tsconfig.json 里的 include 添加上 types
sed -i 's/"include": \[/"include": \["types",/' tsconfig.json

# 3.在 types 文件夹里新建类型声明文件，格式为 XXX.d.ts 本例子为 lodash.d.ts
touch types/lodash.d.ts

```






```typescript
// lodash.d.ts 
declare module 'XXX' {
  const content: any
  /// 这里的 content 可以根据自己的需要，添加需要的类型，这的话可以让 ts 更好的提示
  /**
  type content = {
    test: string
  }
 */
  export = content
}


// 例子:如lodash库

declare module 'lodash' {
  const content: any
  export = content
}

```