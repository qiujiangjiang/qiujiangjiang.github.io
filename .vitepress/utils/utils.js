import { readdirSync, statSync } from 'fs';
import { join } from 'path';

function getResourceFileNames(folder) {
  const fileNames = [];
  const folderPath = join(__dirname, '..', folder);
  const files = readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = join(folderPath, file);
    const stats = statSync(filePath);

    if (stats.isFile()) {
      fileNames.push(file);
    }
  });

  return fileNames;
}

export default {
  getResourceFileNames
};