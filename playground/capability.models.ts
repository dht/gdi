import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { init, models } from '../api/openai';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const outputPath = path.resolve(__dirname, './data/out.ai.models.json');

const run = async () => {
  let response;

  response = await models.list();

  fs.writeFileSync(outputPath, JSON.stringify(response, null, 2));
};

run();
