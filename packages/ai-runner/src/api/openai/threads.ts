import { Json, ThreadCreateParams } from '../../types';
import { AIResponseBuilder } from '../../utils/response';
import { openai } from './_init';
import { calculateAssistantCosts } from './_utils';

export const create = async (params: ThreadCreateParams) => {
  const thread = await openai.beta.threads.create(params);
  return thread;
};

export const getMessages = async (threadId: string, context: Json) => {
  const { modelId } = context;
  const responseBuilder = new AIResponseBuilder();
  let response: any;

  try {
    response = await openai.beta.threads.messages.list(threadId, context);
    responseBuilder //
      .withData(response.data)
      .withCost(calculateAssistantCosts(response.data, modelId));
  } catch (err: any) {
    const { message, type } = err?.error ?? {};
    responseBuilder.withError(message, type);
  }

  return responseBuilder.build();
};

export const addMessage = async (threadId: string, prompt: string) => {
  const message = await openai.beta.threads.messages.create(threadId, {
    content: prompt,
    role: 'user',
  });

  return message;
};

export const createRun = async (threadId: string, assistantId: string) => {
  let run;

  try {
    run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });
  } catch (err: any) {}

  return run;
};

export const getRun = async (threadId: string, runId: string) => {
  const run = await openai.beta.threads.runs.retrieve(threadId, runId);
  return run;
};
