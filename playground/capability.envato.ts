import { config } from 'dotenv';
import * as fs from 'fs-extra';
import * as path from 'path';
import { init, search } from '../packages/ai-runner/src/api/envato';

config();

init({
  envato: process.env.ENVATO_PERSONAL_TOKEN,
});

const run = async () => {
  // const matches = await search.music('happy');
  const matches = await search.getPurchases();
  console.log(matches);
  fs.writeJsonSync(path.resolve(__dirname, './data/out.envato.json'), matches);
};

run();
