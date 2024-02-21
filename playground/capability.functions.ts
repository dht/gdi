import { config } from 'dotenv';
import * as fs from 'fs-extra';
import * as path from 'path';
import { assistants, threads, files, init } from '../packages/ai-runner/src/api/openai';
import { get } from 'lodash';
import axios from 'axios';
import { tools } from './capability.functions.config';
import { toolsMethods } from './capability.functions.methods';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

// const question = 'What is the weather in San Francisco in Fahrenheit?';
const question = "I'm in New york. Should I take an umbrella?";

const instructionsPath = path.resolve(__dirname, './capability.functions.instructions.md');
const idsPath = path.resolve(__dirname, './capability.functions.ids.json');
const logPath = path.resolve(__dirname, './capability.functions.log.json');
const outputPath = path.resolve(__dirname, './data/out.ai.functions.json');

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

  if (!ids['assistant']) {
    console.log('creating assistant');
    res = await assistants.create({
      id: 'as-weather',
      name: 'Weather questions',
      description: instructions,
      instructions: instructions,
      model: 'gpt-3.5-turbo-1106',
      tools,
      file_ids: [],
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

  if (!ids['run']) {
    res = await threads.createRun(ids['thread'], ids['assistant']);
    ids['run'] = res?.id;
  } else {
    res = await threads.getRun(ids['thread'], ids['run']);
    console.log('res?.status ->', res?.status);
  }

  fs.writeJsonSync(idsPath, ids, { spaces: 2 });

  console.time('running');
  while (res?.status === 'queued' || res?.status === 'in_progress') {
    res = await threads.getRun(ids['thread'], ids['run']);
    await delay(500);
  }
  console.timeEnd('running');

  if (res?.status === 'requires_action') {
    res = await threads.getRun(ids['thread'], ids['run']);
    fs.writeJsonSync(logPath, res, { spaces: 2 });

    const toolCalls = get(res, 'required_action.submit_tool_outputs.tool_calls', []);

    console.log('toolCalls ->', toolCalls);

    const outputs: any[] = [];

    for (let toolToCall of toolCalls) {
      const { id, type } = toolToCall;
      const name = get(toolToCall, 'function.name');
      const params = get(toolToCall, 'function.arguments');
      const paramsJson = JSON.parse(params);
      const method: any = toolsMethods[name];

      if (typeof method === 'function') {
        const resMethod = await method(paramsJson);
        outputs.push({
          tool_call_id: id,
          output: JSON.stringify(resMethod),
        });
      }
    }

    res = await threads.submitToolOutputs(ids['thread'], ids['run'], outputs);
    fs.writeJsonSync(logPath, res, { spaces: 2 });
  }

  console.time('running');
  while (res?.status === 'queued' || res?.status === 'in_progress') {
    res = await threads.getRun(ids['thread'], ids['run']);
    await delay(500);
  }
  console.timeEnd('running');

  res = await threads.getMessages(ids['thread'], ids['assistant']);

  fs.writeJsonSync(outputPath, res, { spaces: 2 });

  console.timeEnd('answering question');
};

const delay = (millis: number) => new Promise((resolve) => setTimeout(resolve, millis));

run();
