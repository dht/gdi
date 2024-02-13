import * as threads from './threads';
import { AssistantCreateParams, Json } from '../../types';
import { openai } from './_init';
import { chat } from './chat';
import { delay } from 'shared-base';
export { AssistantCreateParams } from 'openai/resources/beta/assistants/assistants';
import { get as _get } from 'lodash';
import { parseJson } from './_utils';

export const create = async (paramsRaw: Json) => {
  const params = cleanAssistant(paramsRaw);

  const assistant = await openai.beta.assistants.create(params);

  return assistant;
};

export const list = async () => {
  const assistants = await openai.beta.assistants.list();
  return assistants;
};

export const get = async (assistantId: string) => {
  const assistants = await openai.beta.assistants.retrieve(assistantId);
  return assistants;
};

export const remove = async (assistantId: string) => {
  const response = await openai.beta.assistants.del(assistantId);
  return response;
};

export const clearAll = async () => {
  const response = await list();

  const count = response.data.length;

  for (let assistant of response.data) {
    await remove(assistant.id);
  }

  if (count >= 20) {
    await clearAll();
  }
};

export const cleanAssistant = (definition: Json): AssistantCreateParams => {
  const clean = { ...definition };
  delete clean['id'];
  return clean as AssistantCreateParams;
};

const sampleAssistant = {
  id: 'as-tutor',
  name: 'Math Tutor',
  description: 'A personal math tutor that can answer questions about math.',
  instructions:
    'You are a personal math tutor. When asked a question, write and run Python code to answer the question.',
  model: 'gpt-3.5-turbo-1106',
  tools: [],
};

export const generateDefinitions = (description: string) => {
  return chat(
    `Generate a JSON definition for a new assistant ${description}. return a json with the following template: ${JSON.stringify(
      sampleAssistant,
      null,
      4
    )}`
  );
};

export const quickUse = async (
  assistant: AssistantCreateParams & { id: string },
  prompt: string,
  adhoc?: boolean
) => {
  const { id, name, description, instructions } = assistant;

  let res: any,
    ids: any = {};

  res = await create({
    id,
    name,
    description,
    instructions,
    model: 'gpt-3.5-turbo-1106',
    tools: [],
  });

  ids['assistant'] = res.id;

  res = await threads.create({
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  ids['thread'] = res.id;

  res = await threads.createRun(ids['thread'], ids['assistant']);
  ids['run'] = res.id;

  while (res.status !== 'completed') {
    res = await threads.getRun(ids['thread'], ids['run']);
    await delay(500);
  }

  res = await threads.getMessages(ids['thread'], ids['assistant']);

  if (adhoc) {
    // clean up
    await remove(ids['assistant']);
  }

  const output = _get(res, 'data[0].content[0].text.value');

  return {
    ids,
    data: parseJson(output),
  };
};
