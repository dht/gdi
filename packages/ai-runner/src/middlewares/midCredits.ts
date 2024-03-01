import * as elevenLabs from '../api/elevenLabs';
import * as openAI from '../api/openai';
import * as envato from '../api/envato';
import { dbAdapter } from '../utils/globals';
import { get } from 'lodash';
import { endpointCredits } from '../data/data.credits';

export const midCredits = async (req: any, res: any, next?: any) => {
  const cost = get(endpointCredits, req.url);

  try {
    const credits = await dbAdapter.getCredits(req);

    if (credits < cost) {
      res.status(200).json({ insufficientCredits: true });
      return;
    }

    const remainingCredits = credits - cost;
    await dbAdapter.patchCredits(req, remainingCredits);

    req.credits = remainingCredits;
  } catch (err: any) {
    console.log('err =>', err);
  }

  if (typeof next === 'function') {
    next();
  }
};
