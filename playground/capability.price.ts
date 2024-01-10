import { config } from 'dotenv';
import { flow } from './capability.flow.input';
import { api, init } from '../src/api';
import * as fs from 'fs';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
  elevenLabs: process.env.ELEVENLABS_API_KEY,
});

const run = async () => {
  console.time('start');

  const req = { user: { uid: 'test' } };

  let response: any;

  // response = await api.elevenLabs.subscription.info();
  // fs.writeFileSync('response.json', JSON.stringify(response, null, 2));

  // response = await api.elevenLabs.speech.speech('test', {});

  // fs.writeFileSync('response.mp3', response.data);

  response = await api.openAI.threads.getMessages('thread_mK122bFiyKKywXKGo1GpuBJE', {
    modelId: 'gpt-3.5-turbo-1106',
  });

  fs.writeFileSync('response.json', JSON.stringify(response, null, 2));

  console.timeEnd('start');
};

run();
