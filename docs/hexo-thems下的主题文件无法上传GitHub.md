---
title: hexo thems下的主题文件无法上传GitHub
tags:
  - hexo
  - github
category: hexo
abbrlink: 3182af74
date: 2022-11-08 12:53:28
---
# 原因
无法提交根本原因是主题也是一个从GitHub中拉取的，关联到主题作者的仓库了，所以无法提交到自己的仓库。
# 解决方法
思路就是上传的时候将.git 文件夹摘出来,上传完了之后再进行提交，下面的bash可以作为一个脚本，方便处理

```bash 
# 移出.git
mv themes/butterfly/.git ~/themes_tmp/.git

# 如果已经添加到缓存 先执行删除
# git rm --cache themes/butterfly

git add .

git commit -m "提交"

git push xxxx

mv ~/themes_tmp/.git  themes/butterfly/.git 
```