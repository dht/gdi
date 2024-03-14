import { config } from 'dotenv';
import * as fs from 'fs-extra';
import * as path from 'path';
import { assistants, threads, files, init } from '../packages/ai-runner/src/api/openai';
import { get } from 'lodash';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

// const question = "How many times does the letter I appear in people's names?";
// const question = 'I need to solve the equation `3x + 11 = 14`. Can you help me?';
const question = 'Can you create a pie graph of people by city';
// const question = 'Can you create a new csv with only people from engineering?';

const instructionsPath = path.resolve(__dirname, './capability.files.instructions.md');
const csvPath = path.resolve(__dirname, './capability.files.csv');
const idsPath = path.resolve(__dirname, './capability.files.ids.json');
const outputPath = path.resolve(__dirname, './data/out.ai.files.json');

let ids: any;

if (fs.existsSync(idsPath)) {
  ids = fs.readJsonSync(idsPath);
} else {
  ids = {};
}

const run = async () => {
  let res;

  console.time('answering question');

  const instructions = fs.readFileSync(instructionsPath, 'utf8');

  if (!ids['file']) {
    console.log('creating file');
    const stream = fs.createReadStream(csvPath);

    res = await files.create({
      file: stream,
    });

    ids['file'] = res.id;
  }

  if (!ids['assistant']) {
    console.log('creating assistant');
    res = await assistants.create({
      id: 'as-files',
      name: 'CSV questions',
      description: instructions,
      instructions: instructions,
      model: 'gpt-3.5-turbo-1106',
      tools: [
        {
          type: 'code_interpreter',
        },
      ],
      file_ids: [ids['file']],
    });

    ids['assistant'] = res.id;
  }

  if (!ids['thread']) {
    console.log('creating thread');
    res = await threads.create({
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
    });

    ids['thread'] = res.id;
  } else {
    res = await threads.addMessage(ids['thread'], question);
  }

  res = await threads.createRun(ids['thread'], ids['assistant']);
  ids['run'] = res?.id;

  fs.writeJsonSync(idsPath, ids, { spaces: 2 });

  console.time('running');
  while (res?.status !== 'completed') {
    res = await threads.getRun(ids['thread'], ids['run']);
    await delay(500);
  }

  console.timeEnd('running');

  res = await threads.getMessages(ids['thread'], ids['assistant']);

  fs.writeJsonSync(outputPath, res.data, { spaces: 2 });

  console.timeEnd('answering question');
};

const delay = (millis: number) => new Promise((resolve) => setTimeout(resolve, millis));

run();
