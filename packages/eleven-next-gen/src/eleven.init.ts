import axios from 'axios';
import { setInstance } from './globals';

const API_BASE = 'https://api.elevenlabs.io/v1';

export const init = (TOKEN: string) => {
  const instance = axios.create({
    baseURL: API_BASE,
    headers: {
      authority: 'api.elevenlabs.io',
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7',
      authorization: `Bearer ${TOKEN}`,
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryXAgaUR2SsBZzFDfT',
      origin: 'https://elevenlabs.io',
      referer: 'https://elevenlabs.io/',
      'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    },
  });

  setInstance(instance);
};
