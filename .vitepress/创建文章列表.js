const fs = require('fs');
const path = require('path');

// 读取指定文件夹下的所有.md文件并处理
function readMarkdownFiles(folderPath) {
    const resultArray = [];
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile() && path.extname(file) === '.md') {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            let yamlInfo = '';
            let contentWithoutYaml = fileContent;
            const yamlDelimiter = '---';
            const yamlStartIndex = fileContent.indexOf(yamlDelimiter);

            if (yamlStartIndex!== -1) {
                const yamlEndIndex = fileContent.indexOf(yamlDelimiter, yamlStartIndex + 3);
                if (yamlEndIndex!== -1) {
                    yamlInfo = fileContent.substring(yamlStartIndex + 3, yamlEndIndex).trim();
                    contentWithoutYaml = fileContent.substring(yamlEndIndex + 3).trim();
                }
            }

            const first100Words = contentWithoutYaml.split(' ').slice(0, 100).join(' ');

            resultArray.push({
                filePath,
                fileName: file,
                yamlInfo,
                contentPreview: first100Words
            });
        }
    });

    return resultArray;
}

// 将生成的JSON数据以特定格式覆盖到docs.md文件中
function writeToDocsMd(jsonData) {
    const jsonString = JSON.stringify(jsonData, null, 2);
    const docsMdPath = path.join(__dirname, '../docs.md');
    const docsMdContent = `


  <div>
    <article v-for="article in articleList" :key="article.filePath">
      [Getting Started](./article.fileName)
      <a :href="/docs/"+article.fileName>点击跳转</a>
        <h2>{{ article.fileName }}</h2>:
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
    const jsonData = ${jsonString}
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

`;

    fs.writeFileSync(docsMdPath, docsMdContent, 'utf8');
}

// 执行读取和写入操作
const docsFolderPath = path.join(__dirname, '../docs');
const markdownFilesData = readMarkdownFiles(docsFolderPath);
writeToDocsMd(markdownFilesData);