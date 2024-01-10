import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { init, models, voices } from '../api/elevenLabs';

config();

init({
  elevenLabs: process.env.ELEVENLABS_API_KEY,
});

const outputPathVoices = path.resolve(__dirname, './data/out.eleven.voices.json');
const outputPathModels = path.resolve(__dirname, './data/out.eleven.models.json');

const run = async () => {
  let response;

  response = await voices.list();
  fs.writeFileSync(outputPathVoices, JSON.stringify(response, null, 2));

  response = await models.list();
  fs.writeFileSync(outputPathModels, JSON.stringify(response, null, 2));
};

run();
