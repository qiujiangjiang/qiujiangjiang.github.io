---
title: vim如何快速注释
tags:
  - linux
  - vim
category: vim
abbrlink: 10c5d039
date: 2023-01-15 19:11:50
---

我们的需求是需要在指定行数的代码前面加上#

在vim中的替换命令很简单:

```shell
# 1-15行的dog替换成cat
:5,15s/dog/cat/g
```

同时结合正则表达式就可以轻松做到

```shell
:1,15s/^/#/g
```

