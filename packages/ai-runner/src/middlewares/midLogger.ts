import * as elevenLabs from '../api/elevenLabs';
import * as openAI from '../api/openai';
import { dbAdapter } from '../utils/globals';
import { initLogger } from '../utils/logger';

export const midLogger = async (req: any, _res: any, next?: any) => {
  // req.logger = initLogger();
  // req.logger.req = req;

  next();
};
