import { config } from 'dotenv';
import { init } from '../packages/ai-runner/src/api/openai';
import { flow } from './capability.flow.input';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const run = async () => {
  console.time('start');

  const req = { user: { uid: 'test' } };

  console.timeEnd('start');
};

run();
