import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { init, speech, voices } from '../packages/ai-runner/src/api/elevenLabs';

config();

init({
  elevenLabs: process.env.ELEVENLABS_API_KEY,
});

const run = async () => {
  let response;

  response = await speech.stream('Living the dream, ah?');

  const stream = response.data;

  // pipe to file
  const outputPath = path.resolve(__dirname, './data/out.eleven.stream.mp3');
  stream.pipe(fs.createWriteStream(outputPath));
};

run();
