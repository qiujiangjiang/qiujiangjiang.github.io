


  <div>
    <article v-for="article in articleList" :key="article.filePath">
      [Getting Started](./article.fileName)
      <a :href="/docs/"+article.fileName>点击跳转</a>
        <h2>{{ article.fileName }}</h2>
      <div v-html="article.yamlInfo"></div>
      <p>{{ article.contentPreview }}</p>
    </article>
  </div>


<script>
export default {
  data() {
    return {
      articleList: [], // 存储文章信息的数组，将从生成的JSON数据中获取
    };
  },
  mounted() {
    // 这里假设你已经将生成的JSON数据存储在某个地方，比如通过接口获取或者本地存储。
    // 为了示例简单，这里模拟一个获取JSON数据的过程。
    const jsonData = [
  {
    "filePath": "/Users/qjj/blog/docs/a.md",
    "fileName": "a.md",
    "yamlInfo": "",
    "contentPreview": "# b\n你好"
  },
  {
    "filePath": "/Users/qjj/blog/docs/b.md",
    "fileName": "b.md",
    "yamlInfo": "",
    "contentPreview": "# a\n你好"
  },
  {
    "filePath": "/Users/qjj/blog/docs/hello-world.md",
    "fileName": "hello-world.md",
    "yamlInfo": "title: Hello World\nabbrlink: 4a17b156",
    "contentPreview": "Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n\n## Quick Start\n\n### Create a new post\n\n``` bash\n$ hexo new \"My New Post\"\n```\n\nMore info: [Writing](https://hexo.io/docs/writing.html)\n\n### Run server\n\n``` bash\n$ hexo server\n```\n\nMore info: [Server](https://hexo.io/docs/server.html)\n\n### Generate static files\n\n``` bash\n$ hexo generate\n```\n\nMore info: [Generating](https://hexo.io/docs/generating.html)\n\n### Deploy to remote sites\n\n``` bash\n$ hexo deploy\n```\n\nMore info: [Deployment](https://hexo.io/docs/one-command-deployment.html)"
  },
  {
    "filePath": "/Users/qjj/blog/docs/hexo-thems下的主题文件无法上传GitHub.md",
    "fileName": "hexo-thems下的主题文件无法上传GitHub.md",
    "yamlInfo": "title: hexo thems下的主题文件无法上传GitHub\ntags:\n  - hexo\n  - github\ncategory: hexo\nabbrlink: 3182af74\ndate: 2022-11-08 12:53:28",
    "contentPreview": "# 原因\n无法提交根本原因是主题也是一个从GitHub中拉取的，关联到主题作者的仓库了，所以无法提交到自己的仓库。\n# 解决方法\n思路就是上传的时候将.git 文件夹摘出来,上传完了之后再进行提交，下面的bash可以作为一个脚本，方便处理\n\n```bash \n# 移出.git\nmv themes/butterfly/.git ~/themes_tmp/.git\n\n# 如果已经添加到缓存 先执行删除\n# git rm --cache themes/butterfly\n\ngit add .\n\ngit commit -m \"提交\"\n\ngit push xxxx\n\nmv ~/themes_tmp/.git  themes/butterfly/.git \n```"
  },
  {
    "filePath": "/Users/qjj/blog/docs/hexo如何优化永久链接.md",
    "fileName": "hexo如何优化永久链接.md",
    "yamlInfo": "title: hexo如何优化永久链接\ntags:\n  - hexo\n  - seo\ncategory: hexo\nabbrlink: eb493e73\ndate: 2022-11-19 15:28:22",
    "contentPreview": "# 问题\n\nhexo官方的文档中提供了hexo文章永久连接的一些设定，可以在 _config.yml中进行配置 \n\n| 变量          | 描述                                                         |\n| :------------ | :----------------------------------------------------------- |\n| `:year`       | 文章的发表年份（4 位数）             "
  },
  {
    "filePath": "/Users/qjj/blog/docs/hexo如何添加分类和标签页面.md",
    "fileName": "hexo如何添加分类和标签页面.md",
    "yamlInfo": "title: hexo如何添加分类和标签页面\ntags:\n  - hexo\ncategory: hexo\nabbrlink: a28858\ndate: 2023-01-15 20:03:33",
    "contentPreview": "# 创建标签和分类页面\n\n```shell\nhexo new page categories\nhexo new page tags\n```\n\n创建完成之后会有如下提示:\n\n```shell\nINFO  Created: ~/Documents/blog/source/categories/index.md\nINFO  Created: ~/Documents/blog/source/tags/index.md\n```\n\n这是标签和分类页面的路径,找到这个两个目录下的 `index.md`\n\n在tags头部信息中添加 `type: \"tags\"`\n\n在categories头部信息中添加 `type: \"categories\"`\n\n\n\n# 修改文章模板\n\nhexo在创建文章的时候没有附带分类和标签有点麻烦，hexo的文章模板一般默认为 `post.md`存放在 `./scaffolds/`目录下,我们找到这个目录在头部信息中添加上就行.\n\n```shell\ntitle: {{ title }}\ndate: {{ date }}\ntags: \n  - 未分标签\ncategory: 未分类\n```"
  },
  {
    "filePath": "/Users/qjj/blog/docs/ts引入第三方库,报错无法找到模块xxx(已解决).md",
    "fileName": "ts引入第三方库,报错无法找到模块xxx(已解决).md",
    "yamlInfo": "title: 'ts引入第三方库,报错无法找到模块xxx(已解决)'\ntags:\n  - typescript\n  - 已解决\n  - 报错\ncategory: typescript\nabbrlink: 3eba2879\ndate: 2022-11-13 21:24:37",
    "contentPreview": "# 问题\n在项目中`import`引入第三方库时，提示报错信息，\n> 无法找到模块 \"xxx\" 的声明文件\n\n简单来说就是要么没有下载需要通过npm或者其他包管理进行下载，要么就是下载的版本不是对应的ts的版本。\n\n# 解决方式\n\n## 1.下载ts版本包\n\n- 在包名前添加`@types`下载支持ts的版本，但是问题是不是所有的包都有ts的版本。\n\n```typescript\n\nnpm install -D @types/XXX\nor\nyarn add -D @types/XXX\n\n```\n\n## 2.声明模块类型\n```bash\n# 1.在根目录新建types文件夹。\nmkdir types\n\n# 2.在 tsconfig.json 里的 include 添加上 types\nsed -i 's/\"include\": \\[/\"include\": \\[\"types\",/' tsconfig.json\n\n# 3.在 types 文件夹里新建类型声明文件，格式为 XXX.d.ts 本例子为 lodash.d.ts\ntouch types/lodash.d.ts\n\n```\n\n\n\n\n\n\n```typescript\n// lodash.d.ts \ndeclare module 'XXX' {\n  const content: any\n  /// 这里的 content 可以根据自己的需要，添加需要的类型，这的话可以让 ts 更好的提示\n  /**\n  type content = {\n    test: string\n  }\n */\n  export = content\n}\n\n\n// 例子:如lodash库\n\ndeclare module 'lodash' {\n  const content: any\n  export = content\n}\n\n```"
  },
  {
    "filePath": "/Users/qjj/blog/docs/typescript设计模式之单例设计模式.md",
    "fileName": "typescript设计模式之单例设计模式.md",
    "yamlInfo": "title: typescript设计模式之单例设计模式\ntags:\n  - 设计模式\n  - typescript\ncategory: typescript\nabbrlink: fa6ba0d9\ndate: 2023-02-20 23:39:17",
    "contentPreview": "如果一个类只能有一个实例，并且之后会多次调用创建调用的这个类，调用的依然是那个实例，那么就需要使用单例设计模式。\n同时单例设计模式，又分有多种设计模式，比较常用是就是懒汉式设计模式和饿汉设计模式。\n# 懒汉设计模式\n顾名思义，懒汉设计模式，如果没有调用时，那么懒汉不会进行实例化类。\n```typescript\nclass 敌人管理器 {\n    private static instance: 敌人管理器;\n    private constructor() { }\n\n    public static getInstance() {\n        if (敌人管理器.instance == null) {\n            敌人管理器.instance = new 敌人管理器();\n        }\n        return 敌人管理器.instance;\n    }\n}\n```\n\n1. 敌人管理器类的实例化还是只允许有一个，那么懒汉设计模式如何实现的呢？\n2. 首先我们在敌人管理器类内部声明一个静态私有变量instance 类型就是敌人管理器类，但是不需要初始化。\n3. 我们创建一个静态的公开方法 getInstance 如果以后创建类调用类只能使用类内部的静态方法。\n4. getInstance 内部就是一个简单的判断逻辑，如果instance没有初始化，那么就new 一个敌人管理器类 赋值给instance。但是最终都会返回同一个instance\n\n为什么这样就是一个懒汉模式呢?代码执行的时候虽然内部进行了声明，但是没有进行初始化，只有在第一次调用创建实例的时候才会赋值，这样也就避免了不管用不用这个类，都直接进行初始化浪费内存。\n\n\n\n# 饿汉设计模式\n相较于懒汉设计模式，饿汉设计模式就相比较简单多了，不管有没有先吃了再说！！\n```typescript\nclass 敌人管理器 {\n    private static instance: 敌人管理器 = new 敌人管理器();\n    \n"
  },
  {
    "filePath": "/Users/qjj/blog/docs/vim中如何使用外部命令.md",
    "fileName": "vim中如何使用外部命令.md",
    "yamlInfo": "title: vim中如何使用外部命令\ntags:\n  - linux\n  - vim\ncategory: vim\nabbrlink: 363c56fa\ndate: 2023-01-19 21:46:50",
    "contentPreview": "# 执行外部命令\n在vim中想要使用shell命令或者执行其他外部脚本，只需要在命令前加上一个`!`就可以了。\n比如我想在vim中编辑脚本的时候查看ls命令:\n```shell\n:!ls\n```\n# 读取外部命令执行结果\n但是只是执行外部命令还是不够的，通常情况下读写的情况更多，这种情况也只需要在执行命令`!`符号之前加上r(read)就可以了。\n如读取ls命令的执行结果:\n```shell\n:w !ls # ls执行的结果会直接写在当前vim中\n```\n\n# 将vim语句写入外部命令\n如果当前vim编辑的正是js文件有两句可执行语句:\n```JavaScript\nconsole.log(\"好好学习\");\nconsole.log(\"天天向上\");\n```\n并且安装了`nodejs`，那么就可以通过将vim当前内容写入到nodejs中执行。\n同样是在外部命令执行符号`!`之前加上w(write)具体如下:\n```shell\n:w !node\n```"
  },
  {
    "filePath": "/Users/qjj/blog/docs/vim如何快速注释.md",
    "fileName": "vim如何快速注释.md",
    "yamlInfo": "title: vim如何快速注释\ntags:\n  - linux\n  - vim\ncategory: vim\nabbrlink: 10c5d039\ndate: 2023-01-15 19:11:50",
    "contentPreview": "我们的需求是需要在指定行数的代码前面加上#\n\n在vim中的替换命令很简单:\n\n```shell\n# 1-15行的dog替换成cat\n:5,15s/dog/cat/g\n```\n\n同时结合正则表达式就可以轻松做到\n\n```shell\n:1,15s/^/#/g\n```"
  },
  {
    "filePath": "/Users/qjj/blog/docs/vim文件浏览器的使用.md",
    "fileName": "vim文件浏览器的使用.md",
    "yamlInfo": "title: vim文件浏览器的使用\ntags:\n  - linux\n  - vim\ncategory: vim\nabbrlink: b974f8b6\ndate: 2023-01-14 16:29:55",
    "contentPreview": "如何利用vim完成像ide那个的操作，在项目中必须要使用的文件浏览器功能使用学习记录。\n# 基本命令和快捷键操作\n\n| 按键  | 说明                                          |\n| :---- | :-------------------------------------------- |\n| F1    | 帮助                                          |\n|"
  },
  {
    "filePath": "/Users/qjj/blog/docs/安卓12使用面具root.md",
    "fileName": "安卓12使用面具root.md",
    "yamlInfo": "title: 安卓12使用面具root\ntags:\n  - 安卓\ncategory: 安卓\nabbrlink: 555862f4\ndate: 2022-11-30 14:36:10",
    "contentPreview": "# 需要工具\n\napp:\n\n- Magisk(去酷安下载，或者去[github官网](https://github.com/topjohnwu/Magisk/releases))\n- mt管理器(酷安下载)\n\n电脑软件:\n\n- 小米解锁bl软件(小米社区)\n- 小米线刷工具包(小米社区)\n- payload_dumper(提取安装包中的boot.img)\n\n  - [https://magiskcn.com/payload-dumper-go](https://magiskcn.com/payload-dumper-go)\n  - [https://github.com/vm03/payload_dumper](https://github.com/vm03/payload_dumper)(GitHub原项目)\n- adb工具包\n\n  - [https://developer.android.google.cn/studio/releases/platform-tools?hl=zh-cn](https://developer.android.google.cn/studio/releases/platform-tools?hl=zh-cn)\n\n# 步骤\n\n1. 安装好需要工具软件\n\n- adb工具包路径加入环境变量\n- 小米线刷工具包下载需要配置\n\n2. 小米手机解锁\n3. 在小米设置 点击 /我的设备/miui版本/下载最新完整包\n4. 使用mt管理器将存放在  /Download/downloaded_rom 中下载的最新完整包提取 payload.bin 到其他文件夹，传送到电脑上。\n5. 使用payload_dumper工具提取img，找到提取后的boot.img(启动加载文件)和vbmeta.img(启动校验文件)保留，其中boot.img传送给手机。\n6. 打开Magisk，开始修补boot，选择/安装/选择并修补一个文件/选择刚才提取的boot.img/等待完成\n\n提取生成的magisk_patched_xxxxx.img文件到电脑。\n\n7. 手机按下键和电源键进入fastboot 连接电脑。\n8. 打开命令行窗口，执行以下命令：\n\n```powershell\n\n#替换原boot.img文件\n\nfastboot.exe flash boot magisk_patched_xxxxx.img\n\n#关闭AVB校验\n\nfastboot.exe--disable-verity--disable-verification flash vbmeta vbmeta.img\n\n```\n\n9. 重启手机(打完收工)"
  }
]
    this.articleList = jsonData;
  },
  methods: {
    getRandomImage() {
      // 这里假设你的图片都在/public/images 目录下，并且文件名是 image1.jpg、image2.jpg 等形式。
      const imageNames = ["image1.jpg", "image2.jpg", "image3.jpg"]; // 替换为实际的图片文件名列表
      const randomIndex = Math.floor(Math.random() * imageNames.length);
      
    },
  },
};
</script>

<style scoped>
article {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

