import { runFunction } from '@gdi/firebase';
import { Json } from '../types';
import { prepareFile } from './files';

export type IFile = {
  name: string;
  size: number;
  type: string;
  base64: string;
  forceContentType?: string;
};

export const readFile = (file: File): Promise<IFile> => {
  return new Promise((resolve) => {
    const { name, size, type } = file;

    // base64 file
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;

      resolve({
        name,
        size,
        type,
        base64,
      });
    };
  });
};

export const uploadZip = async (file: File, meta: Json) => {
  const { tags = [] } = meta;

  const fileInfoRaw = await readFile(file);

  const fileInfo = prepareFile(fileInfoRaw, meta);

  const response = await runFunction('/api/assets/upload/zip', {
    fileInfo,
    tags,
  });

  return response.assets.map((asset: Json) => {
    return { asset };
  });
};

export const uploadFiles = (files: File[], meta: Json) => {
  const { tags = [] } = meta;

  const zipFile = files.find((file) => file.name.endsWith('.zip'));

  if (zipFile) {
    return uploadZip(zipFile, meta);
  }

  const promises = files.map(async (file) => {
    const fileInfoRaw = await readFile(file);

    const fileInfo = prepareFile(fileInfoRaw, meta);

    return runFunction('/api/assets/upload', {
      fileInfo,
      tags,
    });
  });

  return Promise.all(promises);
};
