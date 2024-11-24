---
title: 安卓12使用面具root
tags:
  - 安卓
category: 安卓
abbrlink: 555862f4
date: 2022-11-30 14:36:10
---

# 需要工具

app:

- Magisk(去酷安下载，或者去[github官网](https://github.com/topjohnwu/Magisk/releases))
- mt管理器(酷安下载)

电脑软件:

- 小米解锁bl软件(小米社区)
- 小米线刷工具包(小米社区)
- payload_dumper(提取安装包中的boot.img)

  - [https://magiskcn.com/payload-dumper-go](https://magiskcn.com/payload-dumper-go)
  - [https://github.com/vm03/payload_dumper](https://github.com/vm03/payload_dumper)(GitHub原项目)
- adb工具包

  - [https://developer.android.google.cn/studio/releases/platform-tools?hl=zh-cn](https://developer.android.google.cn/studio/releases/platform-tools?hl=zh-cn)

# 步骤

1. 安装好需要工具软件

- adb工具包路径加入环境变量
- 小米线刷工具包下载需要配置

2. 小米手机解锁
3. 在小米设置 点击 /我的设备/miui版本/下载最新完整包
4. 使用mt管理器将存放在  /Download/downloaded_rom 中下载的最新完整包提取 payload.bin 到其他文件夹，传送到电脑上。
5. 使用payload_dumper工具提取img，找到提取后的boot.img(启动加载文件)和vbmeta.img(启动校验文件)保留，其中boot.img传送给手机。
6. 打开Magisk，开始修补boot，选择/安装/选择并修补一个文件/选择刚才提取的boot.img/等待完成

提取生成的magisk_patched_xxxxx.img文件到电脑。

7. 手机按下键和电源键进入fastboot 连接电脑。
8. 打开命令行窗口，执行以下命令：

```powershell

#替换原boot.img文件

fastboot.exe flash boot magisk_patched_xxxxx.img

#关闭AVB校验

fastboot.exe--disable-verity--disable-verification flash vbmeta vbmeta.img

```

9. 重启手机(打完收工)
