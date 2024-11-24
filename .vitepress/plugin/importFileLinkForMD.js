import { readdirSync } from 'fs';
import { join } from 'path';

export const name = 'auto-link-plugin';
export async function transform(code, id) {
  // 只处理Markdown文件
  if (!id.endsWith('.md')) return;

  const guidesFolder = join(__dirname, '..', 'docs', 'guides');
  const files = readdirSync(guidesFolder);

  let links = '';
  files.forEach((file) => {
    if (file.endsWith('.md')) {
      const fileNameWithoutExtension = file.replace('.md', '');
      links += `- [${fileNameWithoutExtension}](guides/${fileNameWithoutExtension})\n`;
    }
  });

  // 将生成的链接字符串注入到文章内容中
  code = code.replace('<!-- AUTO-LINKS -->', links);

  return code;
}