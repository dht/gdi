import { config } from 'dotenv';
import { runFlow } from '../src/api/flow';
import { init } from '../src/api/openai';
import { flow } from './capability.flow.input';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const run = async () => {
  console.time('start');

  const req = { user: { uid: 'test' } };

  runFlow(req, flow);

  console.timeEnd('start');
};

run();
