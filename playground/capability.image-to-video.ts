import fs from 'node:fs';
import axios from 'axios';
import FormData from 'form-data';
import { config } from 'dotenv';
import sharp from 'sharp';

config();

const API_KEY = process.env.STABILITY_API_KEY;

const resize = async (imagePath: string) => {
  fs.renameSync(imagePath, 'temp.png');
  const image = sharp('temp.png');
  await image.resize(768, 768).toFile(imagePath);
  fs.unlinkSync('temp.png');
};

const generate = async (imagePath: string) => {
  await resize(imagePath);
  const data = new FormData();
  data.append('image', fs.readFileSync(imagePath), 'image.png');
  data.append('seed', 0);
  data.append('cfg_scale', 1.8);
  data.append('motion_bucket_id', 80);

  const response = await axios.request({
    url: `https://api.stability.ai/v2alpha/generation/image-to-video`,
    method: 'post',
    validateStatus: undefined,
    headers: {
      authorization: `Bearer ${API_KEY}`,
      ...data.getHeaders(),
    },
    data: data,
  });

  console.log('Generation ID:', response.data.id);
};

const download = async (generationID: string) => {
  const response = await axios.request({
    url: `https://api.stability.ai/v2alpha/generation/image-to-video/result/${generationID}`,
    method: 'GET',
    validateStatus: undefined,
    responseType: 'arraybuffer',
    headers: {
      accept: 'video/*', // Use 'application/json' to receive base64 encoded JSON
      authorization: `Bearer ${API_KEY}`,
    },
  });

  if (response.status === 202) {
    console.log('Generation is still running, try again in 10 seconds.');
  } else if (response.status === 200) {
    console.log('Generation is complete!');
    fs.writeFileSync('video.mp4', Buffer.from(response.data));
  } else {
    throw new Error(`Response ${response.status}: ${response.data.toString()}`);
  }
};

const run = async () => {
  // await generate('./raw/workshop.png');
  await download('');
};

run();
