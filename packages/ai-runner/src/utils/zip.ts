import temp from 'temp';
import path from 'path';
import AdmZip from 'adm-zip';
import fs from 'fs-extra';

export const extractZip = (base64: string) => {
  const tempDir = temp.mkdirSync();

  const base64WithoutPrefix = base64.replace(/^data:application\/zip;base64,/, '');

  try {
    const zipBuffer = Buffer.from(base64WithoutPrefix, 'base64');
    const zipFilePath = path.join(tempDir, 'temp.zip');
    fs.writeFileSync(zipFilePath, zipBuffer);

    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(tempDir, /*overwrite*/ true);

    fs.rmSync(zipFilePath);
  } catch (err) {
    console.log('err =>', err);
  }

  return tempDir;
};

export const getFiles = (root: string, dir: string = '') => {
  const output: string[] = [];

  const base = path.join(root, dir);

  const all = fs
    .readdirSync(base)
    .filter((file) => !file.startsWith('.'))
    .filter((file) => !file.startsWith('__'));

  // get directory
  const directories = all.filter((file) => fs.lstatSync(path.join(base, file)).isDirectory());

  for (let directory of directories) {
    const inFiles = getFiles(root, directory);
    output.push(...inFiles);
  }

  // get files
  const files = all.filter((file) => !fs.lstatSync(path.join(base, file)).isDirectory());

  for (let file of files) {
    output.push(path.join(dir, file));
  }

  return output;
};
