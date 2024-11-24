---
title: hexo如何优化永久链接
tags:
  - hexo
  - seo
category: hexo
abbrlink: eb493e73
date: 2022-11-19 15:28:22
---
# 问题

hexo官方的文档中提供了hexo文章永久连接的一些设定，可以在 _config.yml中进行配置 

| 变量          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| `:year`       | 文章的发表年份（4 位数）                                     |
| `:month`      | 文章的发表月份（2 位数）                                     |
| `:i_month`    | 文章的发表月份（去掉开头的零）                               |
| `:day`        | 文章的发表日期 (2 位数)                                      |
| `:i_day`      | 文章的发表日期（去掉开头的零）                               |
| `:hour`       | 文章发表时的小时 (2 位数)                                    |
| `:minute`     | 文章发表时的分钟 (2 位数)                                    |
| `:second`     | 文章发表时的秒钟 (2 位数)                                    |
| `:title`      | 文件名称 (relative to “source/_posts/“ folder)               |
| `:name`       | 文件名称                                                     |
| `:post_title` | 文章标题                                                     |
| `:id`         | 文章 ID (*not persistent across [cache reset](https://hexo.io/zh-cn/docs/commands#clean)*) |
| `:category`   | 分类。如果文章没有分类，则是 `default_category` 配置信息。   |
| `:hash`       | SHA1 hash of filename (same as `:title`) and date (12-hexadecimal) |

但是这样还是有问题，首先是太长了，好几层的嵌套是不利于SEO的。

然后我改成了标题名加哈希，但是hexo对中文连接会转义，很长一串。

```yml
# 原本的太长了
permalink: ':title-:hash/'
```

# 解决方案



## 1.使用hexo-abbrlink插件

- 命令行安装插件

```bash
# 安装 如果有报错缺少依赖一个一个安装就行
npm install hexo-abbrlink --save

```

-  config.yml 配置

```yml
permalink: posts/:abbrlink.html  # 此处可以自己设置，也可以直接使用 :/abbrlink
abbrlink:
    alg: crc32   #算法： crc16(default) and crc32
    rep: hex     #进制： dec(default) and hex
```

- 实际效果

安装完插件和配置文件之后，new的新文章会在Front-matter中增加一个 `abbrlink`  

需要注意的是，如果此前已经有了文章，生成之后没有正常显示连接，可以在`source/_posts`中查看文章是否有abbrlink字段，如没有重新保存生成即可。

```md
---
title: hexo thems下的主题文件无法上传GitHub
tags:
  - hexo
  - github
category: hexo
abbrlink: 3182af74
date: 2022-11-08 12:53:28
---
```

## 2.使用hexo-abbrlink插件插件

- 命令行安装

```bash
npm i hexo-permalink-pinyin --save
```

- config.yml 配置

注意将原本的permalink注释掉

```yml
permalink_pinyin:
# 是否启用
  enable: true
# 指定分隔符
  separator: '-'   # default: '-'
```

- 实际效果

`hexo thems下的主题文件无法上传GitHub`

`/hexo-thems-xia-de-zhu-ti-wen-jian-wu-fa-shang-chuan-github/`





