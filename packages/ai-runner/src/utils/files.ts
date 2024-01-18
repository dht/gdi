import fs from 'fs-extra';
import path from 'path';

export const getTempFileInfo = (root: string, filepath: string) => {
  const fullPath = path.join(root, filepath);

  // base64 file
  const base64 = fs.readFileSync(fullPath, 'base64');
  const name = path.basename(filepath);
  const size = fs.statSync(fullPath).size;
  const type = path.extname(filepath);

  return {
    name,
    size,
    type,
    base64,
    text: '',
  };
};
