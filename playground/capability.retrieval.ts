import { config } from 'dotenv';
import * as fs from 'fs-extra';
import * as path from 'path';
import { assistants, threads, files, init } from '../packages/ai-runner/src/api/openai';
import { get } from 'lodash';
import axios from 'axios';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

// const question = 'How much sugar is needed for the recipe?';
const question = 'How long does it take to make the pie?';

// const pdfUrl = 'https://lilluna.com/wp-content/uploads/2015/10/Apple-Pie-Recipe.pdf';

// download pdf

const pdfPath = path.resolve(__dirname, './capability.retrieval.pdf');
const instructionsPath = path.resolve(__dirname, './capability.files.instructions.md');
const idsPath = path.resolve(__dirname, './capability.retrieval.ids.json');
const outputPath = path.resolve(__dirname, './data/out.ai.retrieval.json');

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
    const stream = fs.createReadStream(pdfPath);

    res = await files.create({
      file: stream,
    });

    ids['file'] = res.id;
  }

  if (!ids['assistant']) {
    console.log('creating assistant');
    res = await assistants.create({
      id: 'as-recipe',
      name: 'Recipe questions',
      description: instructions,
      instructions: instructions,
      model: 'gpt-3.5-turbo-1106',
      tools: [
        {
          type: 'retrieval',
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
