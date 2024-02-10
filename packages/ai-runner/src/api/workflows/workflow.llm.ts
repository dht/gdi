import { get, merge } from 'lodash';
import { delay } from 'shared-base';
import { allParsers } from '../../parsing';
import { Json } from '../../types';
import db from '../../db';
import { bakeValue } from '../flow.utils';
import { assistants, threads } from '../openai';
import * as fs from 'fs';
import { logger } from '../../utils/logger';

export const bootstrapAssistants = async (req: any, flow: any) => {
  let assistant: any;

  for (assistant of Object.values(flow.flowAssistants)) {
    const xpath = `assistantIds.${assistant.id}`;

    const id = await db.getXPath(req, xpath);

    if (id) {
      console.log('assistant already exists =>', id);
      continue;
    }

    const response = await assistants.create(assistant);

    await db.runs.patch(req, {
      assistantIds: {
        [assistant.id]: response.id,
      },
    });

    await db.logs.logNewAssistant(req, assistant.id);
  }
};

export const getOrCreateThread = async (req: any, nodeId: string, input: Json) => {
  let threadId = await db.getXPath(req, `nodeState.${nodeId}.threadId`);

  if (threadId) {
    console.log('thread exists =>', threadId);
  } else {
    const variables = await db.variables.get(req);
    const content = bakeValue(variables, input.prompt);

    const responseThread = await threads.create({
      messages: [
        {
          role: 'user',
          content,
          file_ids: [],
        },
      ],
    });

    threadId = responseThread.id;
    await db.flow.patchNode(req, nodeId, {
      threadId,
    });
  }

  return threadId;
};

export const addMessage = async (req: any, threadId: string, input: Json) => {
  const variables = await db.variables.get(req);
  const content = bakeValue(variables, input.prompt);

  const response = await threads.addMessage(threadId, content);

  return response;
};

export const createRunAndListen = async (
  _req: any,
  nodeId: string,
  threadId: string,
  assistantId: string,
  modelId: string
) => {
  const responseRun = await threads.createRun(threadId, assistantId);

  if (!responseRun) {
    throw new Error('No responseRun');
  }

  await db.flow.patchNode(_req, nodeId, {
    runId: responseRun.id,
  });

  let run;

  do {
    run = await threads.getRun(threadId, responseRun.id);
    await delay(500);
  } while (run.status === 'in_progress');

  const response = await threads.getMessages(threadId, { nodeId, modelId });

  return response;
};

export const oneShot = async (req: any, _api: Json, params: Json) => {
  const { node, stateVariables, modelId, cumulativeThread } = params;

  const { id, input, variables, assistantId } = node;

  logger.info('oneShot', { id, input, variables, assistantId });

  const assistantId$ = await db.getXPath(req, `assistantIds.${assistantId}`);

  const threadId = await getOrCreateThread(req, id, input);

  if (cumulativeThread) {
    await addMessage(req, threadId, input);
  }

  const responseRun = await createRunAndListen(req, id, threadId, assistantId$, modelId);

  const changeVariables: Json = {};

  const changeNodeState = {
    cost: responseRun.cost,
    status: responseRun.isSuccess ? 'done' : 'error',
  };

  const vars = parseVariables(variables);

  // response variables
  for (let key of Object.keys(vars.responseVariables)) {
    const xpathOrParser = variables[key];
    const value = get(responseRun.data, xpathOrParser);
    merge(changeVariables, { [key]: value });
  }

  // update variables
  for (let key of Object.keys(vars.parseVariables)) {
    const xpathOrParser = variables[key];
    const parser = allParsers[xpathOrParser];
    const newVariables = parser({ ...stateVariables, ...changeVariables });
    merge(changeVariables, newVariables);
  }

  return [changeVariables, changeNodeState];
};

export const parseVariables = (variables: Json) => {
  const output = {
    responseVariables: {} as Json,
    parseVariables: {} as Json,
  };

  for (let key of Object.keys(variables)) {
    const value = variables[key];

    if (value.includes('$')) {
      output.parseVariables[key] = value;
    } else {
      output.responseVariables[key] = value;
    }
  }

  return output;
};

export const analyzeMessages = (response: any) => {
  fs.writeFileSync('response.json', JSON.stringify(response, null, 2));
};
