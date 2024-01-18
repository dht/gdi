import fs from 'fs-extra';
import { extractZip, getFiles } from '../utils/zip';
import { upload } from './upload';
import { getTempFileInfo } from '../utils/files';

export const uploadZip = async (req: any, fileInfo: Json, tags: string[]) => {
  const { base64 } = fileInfo;

  const tempDir = extractZip(base64);
  const files = getFiles(tempDir);

  const promises = files.map((file) => {
    const fileInfo = getTempFileInfo(tempDir, file);
    return upload(req, fileInfo, tags);
  });

  const assets = await Promise.all(promises);

  fs.removeSync(tempDir);

  return assets;
};
