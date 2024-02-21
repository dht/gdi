import { config } from 'dotenv';
import * as fs from 'fs-extra';
import * as path from 'path';
import { assistants, threads, files, init } from '../packages/ai-runner/src/api/openai';
import { get } from 'lodash';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

const inputPath = path.resolve(__dirname, './data/out.ai.files.json');
const outputPath = path.resolve(__dirname, './data/out.ai.files');

const run = async () => {
  const content = fs.readJsonSync(inputPath);
  const info = getFileInfo(content);

  if (!info.found) {
    console.log('no file found');
    return;
  }

  console.log(`downloading file of type: ${info.fileType}...`);
  await download(info.fileId, outputPath + info.ext);
};

const allXpaths: any = {
  image: {
    fileType: '[0].content[0].type',
    fileId: '[0].content[0].image_file.file_id',
    ext: '.png',
  },
  csv: {
    fileType: '[0].content[0].text.annotations[0].type',
    fileId: '[0].content[0].text.annotations[0].file_path.file_id',
    ext: '.csv',
  },
};

const getFileInfo = (content: any) => {
  const output = {
    fileType: '',
    fileId: '',
    ext: '',
    found: false,
  };

  for (let key in allXpaths) {
    const xpaths = allXpaths[key];
    output.fileType = get(content, xpaths.fileType);
    output.fileId = get(content, xpaths.fileId);

    if (output.fileId && output.fileType) {
      output.ext = xpaths.ext;
      output.found = true;
      break;
    }
  }

  return output;
};

const download = async (fileId: string, outputPath: string) => {
  const response = await files.get(fileId);
  const data = await response.arrayBuffer();
  const buffer = Buffer.from(data);
  fs.writeFileSync(outputPath, buffer);
};

run();
