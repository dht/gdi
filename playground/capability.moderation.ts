import { config } from 'dotenv';
import { init, moderation } from '../packages/ai-runner/src/api/openai';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const prompt = {
  nice: ['fuck around'],
};

const run = async () => {
  let res;

  console.time('moderation');
  res = await moderation.moderate(prompt);
  console.timeEnd('moderation');

  console.log('res.data ->', res);
};

run();
