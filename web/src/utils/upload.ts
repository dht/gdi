import { runFunction } from '@gdi/firebase';
import { Json } from '../types';

export type IFile = {
  name: string;
  size: number;
  type: string;
  base64: string;
};

export const readFile = (file: File) => {
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

export const uploadFiles = (files: File[], meta: Json) => {
  const { tags = [] } = meta;

  const promises = files.map(async (file) => {
    const fileInfo = await readFile(file);

    return runFunction('/api/assets/upload', {
      fileInfo,
      tags,
    });
  });

  return Promise.all(promises);
};
