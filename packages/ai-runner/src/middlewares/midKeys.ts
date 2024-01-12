import * as elevenLabs from '../api/elevenLabs';
import * as openAI from '../api/openai';
import { dbAdapter } from '../utils/globals';

export const midKeys = async (req: any, _res: any, next?: any) => {
  try {
    const keys = await dbAdapter.getKeys(req);
    console.log('keys ->', keys);

    req.keys = keys;

    // initialize APIs
    openAI.init(keys);
    elevenLabs.init(keys);
  } catch (err: any) {
    console.log('err =>', err);
  }

  if (typeof next === 'function') {
    next();
  }
};
