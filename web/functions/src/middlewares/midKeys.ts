import db from '../db';
import * as openAI from '../api/openai';
import * as elevenLabs from '../api/elevenLabs';

export const midKeys = async (req: any, _res: any, next?: any) => {
  try {
    const keys = await db.keys.get(req);
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
