import { init, speechToSpeech } from 'eleven-next-gen';
import fs from 'fs';
import { config } from 'dotenv';

config();

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
const TOKEN = process.env.ELEVENLABS_TOKEN ?? '';
const INPUT_FILE = './capability.sts.wav';
const OUTPUT_FILE = './capability.sts.output.wav';

const run = async () => {
  init(TOKEN);
  const audioData = await fs.promises.readFile(INPUT_FILE);
  const response: any = await speechToSpeech(audioData, VOICE_ID);
  const writer = fs.createWriteStream(OUTPUT_FILE);
  response.data.pipe(writer);
};

run();
