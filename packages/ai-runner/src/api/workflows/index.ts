import { conversation } from './workflow.conversation';
import { basic as imageBasic } from './workflow.image';
import { oneShot } from './workflow.llm';
import { basic } from './workflow.voice';
import { get } from 'lodash';
import { Json } from '../../types';
import { logger } from '../../utils/logger';

export const workflows: any = {
  llm: {
    oneShot,
  },
  speech: {
    basic,
    conversation,
  },
  image: {
    basic: imageBasic,
  },
};

export const runWorkflow = (req: any, api: Json, variables: Json) => {
  const { endpoint } = api;

  logger.info('runWorkflow', { endpoint });

  const workflow = get(workflows, endpoint);

  if (!workflow) {
    throw new Error(`workflow not found for xpath "${endpoint}"`);
  }

  return workflow(req, api, variables);
};
