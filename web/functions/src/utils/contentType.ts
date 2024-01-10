import { Json } from '../types';

const contentType: Json = {
  png: 'image',
  jpg: 'image',
  jpeg: 'image',
  mp4: 'video',
  mp3: 'audio',
  json: 'json',
  txt: 'txt',
  glb: '3d',
};

export const contentTypeFromFileName = (fileName: string) => {
  const ext = fileName.split('.').pop() ?? '';
  return (contentType as any)[ext] || 'unknown';
};

export const contentTypeFromFile = (file: File) => {
  return contentTypeFromFileName(file.name);
};

export const contentTypeFromUrl = (url: string) => {};
