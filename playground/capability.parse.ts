import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { init, models, voices } from '../api/elevenLabs';
import { runNode } from '../api/flow';
import db from '../db';
import state from '../_playground/data/state.json';

config();

const run = async () => {
  console.time('capabilities.parse');

  let response: any = {
    data: {},
  };

  console.timeEnd('capabilities.parse');
};

run();
