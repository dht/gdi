import { runFunction } from '@gdi/firebase';

export const findUp = (root: string) => {
  if (root.includes('$') || root === '') {
    return '';
  }

  if (root.startsWith('project-')) {
    return '$projects';
  }

  return '$tags';
};

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
