import { Json } from '../../types';

export const toBase64 = (content: string) => {
  try {
    return btoa(content);
  } catch (err) {
    console.log('toBase64 err =>', err);
  }
};

export const fromBase64 = (content: string) => {
  try {
    const contentWithoutPrefix = content.replace(/^data:.+;base64,/, '');
    return atob(contentWithoutPrefix);
  } catch (err) {
    console.log('fromBase64 err =>', err, content);
  }
};

export const jsonToBase64 = (json: Json) => {
  try {
    const content = JSON.stringify(json, null, 2);
    return toBase64(content) ?? '';
  } catch (err) {
    console.log('jsonToBase64 err =>', err);
    return '';
  }
};

export const base64ToJson = (content: string) => {
  try {
    const raw = fromBase64(content);
    return JSON.parse(raw ?? '{}') ?? {};
  } catch (err) {
    console.log('base64ToJson err =>', err);
    return {};
  }
};
