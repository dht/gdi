import { Json } from '../types';
import { config } from 'dotenv';
import axios from 'axios';
import * as fs from 'fs';
import fetch from 'node-fetch';
import { input } from './capability.hugging.input';

config();

const API_TOKEN = process.env.HUGGING_FACE_API_KEY ?? '';
const BASE_URL = process.env.HUGGING_FACE_URL ?? '';
const OUTPUT_FILE_PATH = __dirname + '/raw/';

const generateImage = async (id: number, prompt: string, outputFile: string) => {
  console.time('generateImage ' + id);
  const response = await axios.post(
    BASE_URL,
    { inputs: prompt },
    {
      headers: {
        Accept: 'image/png',
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      responseType: 'arraybuffer',
    }
  );

  if (response.status === 200) {
    fs.writeFileSync(OUTPUT_FILE_PATH + outputFile, response.data);
  } else {
    console.error('API request failed with status:', response.status);
  }
  console.timeEnd('generateImage ' + id);
};

const run = async () => {
  const promises = input.map((item, index) => {
    const prompt = `close-up portrait of ${item.writer}, in Martin Schoeller style,  famous for his extreme close-up portraits, detailed, hyper-realistic images of faces, emphasizing the eyes and expressions of his subjects.`;
    generateImage(index, prompt, `image-${index}.png`);
  });
  await Promise.all(promises);
};

run();
