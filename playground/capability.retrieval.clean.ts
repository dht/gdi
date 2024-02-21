import { config } from 'dotenv';
import * as fs from 'fs-extra';
import * as path from 'path';
import { assistants, files, init } from '../packages/ai-runner/src/api/openai';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const idsPath = path.resolve(__dirname, './capability.retrieval.ids.json');

let ids: any;

if (fs.existsSync(idsPath)) {
  ids = fs.readJsonSync(idsPath);
} else {
  process.exit(1);
}

const run = async () => {
  let res;

  if (ids['file']) {
    console.log('delete file');
    res = await files.remove(ids['file']);
  }

  if (ids['assistant']) {
    console.log('delete assistant');
    res = await assistants.remove(ids['assistant']);
  }
};

run();
