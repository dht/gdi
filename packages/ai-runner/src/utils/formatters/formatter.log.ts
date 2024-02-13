import { format } from 'winston';
import { cleanObject } from '../object';

export const formatter = format.printf((info) => {
  const { level, message, label = '', timestamp, ...rest } = info;

  const data = JSON.stringify(cleanObject(rest));

  return [
    timestamp, //
    label ? `[${label}]` : '',
    level ? `${level}:` : '',
    message,
    data,
  ]
    .filter((i) => i)
    .join(' ');
});
