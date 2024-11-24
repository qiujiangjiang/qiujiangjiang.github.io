---
title: hexo如何添加分类和标签页面
tags:
  - hexo
category: hexo
abbrlink: a28858
date: 2023-01-15 20:03:33
---

# 创建标签和分类页面

```shell
hexo new page categories
hexo new page tags
```

创建完成之后会有如下提示:

```shell
INFO  Created: ~/Documents/blog/source/categories/index.md
INFO  Created: ~/Documents/blog/source/tags/index.md
```

这是标签和分类页面的路径,找到这个两个目录下的 `index.md`

在tags头部信息中添加 `type: "tags"`

在categories头部信息中添加 `type: "categories"`



# 修改文章模板

hexo在创建文章的时候没有附带分类和标签有点麻烦，hexo的文章模板一般默认为 `post.md`存放在 `./scaffolds/`目录下,我们找到这个目录在头部信息中添加上就行.

```shell
title: {{ title }}
date: {{ date }}
tags: 
  - 未分标签
category: 未分类
```
