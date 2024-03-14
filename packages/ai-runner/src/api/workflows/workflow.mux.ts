import { createMuxAssistant } from '../../data/data.assistant.mux';
import { capabilities } from '../../data/data.capabilities';
import db from '../../db';
import { Json } from '../../types';
import * as api from '../openai';

export const main = async (req: any, _api: Json, params: Json, streamCallback?: any) => {
  const { content } = params;

  console.time('getIds');
  const ids = (await db.ids.get(req)) ?? {};
  const { muxAssistantId, muxThreadId } = ids;
  console.timeEnd('getIds');

  if (!muxAssistantId) {
    const definition = createMuxAssistant(capabilities);
    const assistant = await api.assistants.create(definition);
    ids.muxAssistantId = assistant.id;
    await db.ids.patch(req, ids);
  }

  if (!muxThreadId) {
    const thread = await api.threads.create({
      messages: [],
    });
    ids.muxThreadId = thread.id;
    await db.ids.patch(req, ids);
  }

  let response: any;
  response = await api.threads.addMessage(ids.muxThreadId, content);

  response = await api.threads.createStreamedRun(
    ids.muxThreadId,
    ids.muxAssistantId,
    streamCallback
  );
  console.log('response.data ->', response.data);
};
