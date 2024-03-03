import { get } from 'lodash';
import * as openAI from '../api/openai';
import { endpointInputChecks } from '../data/data.moderation';
import { parseBodyData } from '../utils/body';

export const midModeration = async (req: any, res: any, next?: any) => {
  let flagged = false;
  const toCheck = get(endpointInputChecks, req.url);

  if (!toCheck && typeof next === 'function') {
    next();
    return;
  }

  try {
    const json = parseBodyData(req, toCheck.body);

    console.time('moderation');
    const res = await openAI.moderation.moderate(json);
    console.timeEnd('moderation');
    flagged = res.flagged;
  } catch (_err: any) {}

  if (flagged) {
    res.status(200).json({ flagged: true });
    return;
  }

  if (typeof next === 'function') {
    next();
  }
};
