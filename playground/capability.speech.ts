import { config } from 'dotenv';
import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as cp from 'child_process';
import { init as initElevenLabs, speech } from '../api/elevenLabs';
import { init as initOpenAI } from '../api/openai';
import { saveToBucket, setBucket } from '../api/files';
import { Voice, getVoiceNames, nameToIds } from '../api/elevenLabs/_config';
import { Json } from '../types';
import { conversation } from '../api/workflows/workflow.conversation';

config();

var serviceAccount = require('./serviceAccountKey.json');
const storageBucket = process.env.STORAGE_BUCKET;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket,
});

const bucket = admin.storage().bucket();

const parseVoices = () => {
  const voices = require('./data/out.eleven.voices.json');

  const voiceMap = voices.voices
    // .filter((voice: Json) => voice.category === 'premade')
    .reduce((acc: Json, voice: Json) => {
      const { name } = voice;
      acc[name] = voice;
      return acc;
    }, {} as Json);

  const names = Object.keys(voiceMap).sort();

  const outputVoices = names
    .map((name: string) => {
      const voice = voiceMap[name];
      const { labels } = voice;
      const labelsText = Object.values(labels).join(', ');
      return `  ${name} = '${name}', // ${labelsText}`;
    })
    .join('\n');

  const outputNameToIds = names
    .map((name: string) => {
      const voice = voiceMap[name];
      const { voice_id } = voice;
      return `  '${name}': '${voice_id}',`;
    })
    .join('\n');

  const content = fs.readFileSync(__dirname + '/../api/elevenLabs/_config.ts', 'utf8');

  let regex, newContent;

  regex = /export enum Voice \{([^\}]+)\}/g;

  newContent = content.replace(
    regex,
    `export enum Voice {
${outputVoices}
};`
  );

  regex = /export let nameToIds: Record<Voice, string> = \{([^}]+)\};/g;

  newContent = newContent.replace(
    regex,
    `export let nameToIds: Record<Voice, string> = {
${outputNameToIds}
};`
  );

  fs.writeFileSync(__dirname + '/../api/elevenLabs/_config.ts', newContent);
};

const speakTest = async (text: string, voice: Voice, outputFileName: string) => {
  const outputPath = __dirname + '/data';
  const outputFilePath = `${outputPath}/${outputFileName}`;

  if (fs.existsSync(outputFilePath)) {
    return;
  }

  console.time('speech ' + voice);

  const response: any = await speech.speech(text, {
    voice,
  });
  console.timeEnd('speech ' + voice);

  fs.writeFileSync(outputFilePath, response.data);
};

const sampleVoices = async (text: string) => {
  const voices = getVoiceNames();

  for (let i = 0; i < voices.length; i++) {
    const voice = voices[i] as Voice;
    const outputFileName = `voices/voice-${voice}.mp3`;
    await speakTest(text, voice, outputFileName);
  }

  console.log('done');
};

const connectMp3s = () => {
  const files = fs.readdirSync(__dirname + '/data/').filter((file) => file.includes('.mp3'));

  // append all files to output.mp3 with ffmpeg

  const outputPath = __dirname + '/data/output.mp3';

  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }

  const outputFilePath = `${outputPath}`;

  const inputFiles = files
    .map((file) => {
      return `-i ${__dirname}/data/${file}`;
    })
    .join(' ');

  const command = `ffmpeg ${inputFiles} -filter_complex "concat=n=${files.length}:v=0:a=1" ${outputFilePath}`;

  cp.execSync(command);
};

const run = async () => {
  initElevenLabs({
    elevenLabs: process.env.ELEVENLABS_API_KEY,
  });

  initOpenAI({
    openAI: process.env.OPENAI_API_KEY,
  });

  //   parseVoices();
  //   await sampleVoices(text);

  setBucket(bucket);

  const api = {
    id: 'conversation',
    endpoint: 'speech.conversation',
    vendor: 'openAI',
  };

  const inputRaw = fs.readFileSync(__dirname + '/data/in.transcriptShort.json', 'utf8');
  const input = JSON.parse(inputRaw);

  const response: any = await conversation(
    {
      user: {
        uid: 'test',
      },
    },
    api,
    input
  );

  fs.writeFileSync(__dirname + '/data/out.transcriptShort.json', JSON.stringify(response, null, 2));

  const req = {
    user: {
      uid: 'test',
    },
  };

  // connectMp3s();
  //   const buffer = fs.readFileSync(__dirname + '/data/voice-jessie.mp3');

  //   const url = await saveToBucket(req, 'speech/test.mp3', buffer, 'audio/mp3');
};

run();
