import axios from 'axios';

export const fetchBinaryUrl = (url: string) => {
  return axios.get(url, { responseType: 'arraybuffer' });
};

export const fetchJsonUrl = (url: string) => {
  return axios.get(url, { responseType: 'json' });
};
