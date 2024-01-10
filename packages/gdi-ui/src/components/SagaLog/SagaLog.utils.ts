import { get } from 'lodash';

export const parseMessage = (message: string, data?: Json) => {
  const { keyframe } = data ?? {};

  let extra = '';

  if (keyframe) {
    extra = vectorToString(keyframe.position) + ' | ' + vectorToString(keyframe.rotation);
  }

  return message + ' ' + extra;
};

export const vectorToString = (num: number[]) => {
  if (!num) {
    return '';
  }

  return num.map((v) => v.toFixed(2)).join(',');
};
