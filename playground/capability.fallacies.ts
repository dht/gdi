import { config } from 'dotenv';
import { runFlow } from '../src/api/flow';
import { init } from '../src/api/openai';
import { toFile } from 'openai';
import { flow } from './capability.flow.input';
import { api } from '../src/api';
import * as fs from 'fs';
import { Json } from '../src/types';
import * as path from 'path';
import format from './data/in.fallacies.format.json';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const run = async () => {
  console.time('fallacies');

  let res: any,
    ids: any = {};

  const filepath = path.resolve(__dirname, './data/in.fallacies.json');
  const filepathOutput = path.resolve(__dirname, './data/output.fallacies.json');
  const stream = fs.createReadStream(filepath);

  res = await api.openAI.files.create({
    file: stream,
  });

  ids['file'] = res.id;

  res = await api.openAI.assistants.create({
    id: 'as-debate-moderator',
    name: 'Debate Moderator',
    description:
      'You are a debate moderator. When asked a question, write and run Python code to answer the question.',
    instructions: `You are a debate moderator. You receive a JSON of a lecture transcript and search for logical fallacies and other manipulations in the transcript. You return a JSON with the fallacies and manipulations you found in the following format: ${JSON.stringify(
      format,
      null,
      2
    )}.`,
    model: 'gpt-3.5-turbo-1106',
    tools: [
      {
        type: 'retrieval',
      },
    ],
    file_ids: [ids['file']],
  });

  ids['assistant'] = res.id;

  res = await api.openAI.threads.create({
    messages: [
      {
        role: 'user',
        content: 'Find all the logical fallacies in this transcript',
      },
    ],
  });

  ids['thread'] = res.id;

  res = await api.openAI.threads.createRun(ids['thread'], ids['assistant']);
  ids['run'] = res.id;

  while (res.status !== 'completed') {
    res = await api.openAI.threads.getRun(ids['thread'], ids['run']);
    await delay(500);
  }

  res = await api.openAI.threads.getMessages(ids['thread'], ids['assistant']);
  fs.writeFileSync(filepathOutput, JSON.stringify(res.data, null, 2));

  console.timeEnd('fallacies');
};

const delay = (millis: number) => new Promise((resolve) => setTimeout(resolve, millis));

run();
