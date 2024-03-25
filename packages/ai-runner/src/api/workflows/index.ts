import { conversation } from './workflow.conversation';
import { basic as imageBasic } from './workflow.image';
import { oneShot } from './workflow.llm';
import { basic } from './workflow.voice';
import { get } from 'lodash';
import { Json } from '../../types';
import { main as mux } from './workflow.mux';
import { main as terminal } from './workflow.terminal';

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
  mux: {
    main: mux,
  },
  terminal: {
    main: terminal,
  },
};

export const runWorkflow = (req: any, api: Json, variables: Json, streamCallback?: any) => {
  const { endpoint } = api;

  const workflow = get(workflows, endpoint);

  if (!workflow) {
    throw new Error(`workflow not found for xpath "${endpoint}"`);
  }

  return workflow(req, api, variables, streamCallback);
};
