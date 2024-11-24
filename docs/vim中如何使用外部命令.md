---
title: vim中如何使用外部命令
tags:
  - linux
  - vim
category: vim
abbrlink: 363c56fa
date: 2023-01-19 21:46:50
---


# 执行外部命令
在vim中想要使用shell命令或者执行其他外部脚本，只需要在命令前加上一个`!`就可以了。
比如我想在vim中编辑脚本的时候查看ls命令:
```shell
:!ls
```
# 读取外部命令执行结果
但是只是执行外部命令还是不够的，通常情况下读写的情况更多，这种情况也只需要在执行命令`!`符号之前加上r(read)就可以了。
如读取ls命令的执行结果:
```shell
:w !ls # ls执行的结果会直接写在当前vim中
```

# 将vim语句写入外部命令
如果当前vim编辑的正是js文件有两句可执行语句:
```JavaScript
console.log("好好学习");
console.log("天天向上");
```
并且安装了`nodejs`，那么就可以通过将vim当前内容写入到nodejs中执行。
同样是在外部命令执行符号`!`之前加上w(write)具体如下:
```shell
:w !node
```
