import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { assistants, init } from '../api/openai';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const instructionsPath = path.resolve(__dirname, './capability.generate.instructions.md');
const outputPath = path.resolve(__dirname, './data/out.ai.assistant.json');

const run = async () => {
  let response;

  console.time('generating assistant definitions');

  const instructions = fs.readFileSync(instructionsPath, 'utf8');

  response = await assistants.generateDefinitions(instructions);

  fs.writeFileSync(outputPath, response.text);

  console.timeEnd('generating assistant definitions');
};

run();
