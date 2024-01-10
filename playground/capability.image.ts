import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { assistants, image, init } from '../api/openai';
import { avatars } from './capability.image.input';
import axios from 'axios';
import { initHuggingFace, textToImage } from '../utils/huggingFace';

config();

init({
  openAI: process.env.OPENAI_API_KEY,
});

initHuggingFace(process.env.HUGGING_FACE_URL, process.env.HUGGING_FACE_API_KEY);

const run = async () => {
  let response;

  response = await textToImage({ inputs: 'coffeeshop on mars, no people' });
  fs.writeFileSync(__dirname + '/data/out.image.png', response);
  return;

  const promises = avatars.splice(0, 3).map(async (avatar, index) => {
    try {
      const filename = path.resolve(`./src/_playground/raw/avatar_${index}.jpg`);
      response = await image.image(
        `a generic smiling avatar of ${avatar}, hand painted, pencil, professional, black and white, fully clothed, face in the middle, portrait, looking at camera`
      );
      const buffer = Buffer.from(response.data.b64Json, 'base64');
      fs.writeFileSync(filename, buffer);
    } catch (err) {
      console.log('err =>', err);
    }
  });

  await Promise.all(promises);
};

run();
