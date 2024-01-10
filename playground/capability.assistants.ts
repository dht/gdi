import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { assistants, init, threads } from '../api/openai';
import { clearAll } from '../api/openai/assistants';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const threadId = 'thread_GxBGJCvPBOck2VCUhlJuK5jw';

const run = async (clear: boolean) => {
  let response;
  let outputPath: string;

  outputPath = path.resolve(__dirname, './data/out.ai.assistants.json');

  // response = await assistants.list();

  // fs.writeFileSync(outputPath, JSON.stringify(response, null, 2));

  // if (clear) {
  //   await clearAll();
  // }

  outputPath = path.resolve(__dirname, './data/out.ai.thread.json');

  response = await threads.getMessages(threadId, {});

  fs.writeFileSync(outputPath, JSON.stringify(response.data, null, 2));
};

run(false);
