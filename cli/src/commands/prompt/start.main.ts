import axios from 'axios';
import { get } from 'lodash';
import { copyToClipboard } from './start.utils';

export const instanceLocal = axios.create({
  baseURL: 'http://localhost:3005',
  timeout: 20000,
  headers: {
    Origin: 'http://localhost:3000',
  },
});

export const main = async (prompt: string) => {
  const response = await instanceLocal.post('/api/terminal', {
    prompt,
  });

  const content = get(response, 'data.content', '');

  console.log('='.repeat(50));
  console.log(content);
  console.log('='.repeat(50));

  copyToClipboard(content);
};
