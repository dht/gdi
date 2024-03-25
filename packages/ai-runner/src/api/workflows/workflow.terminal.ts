import { createTerminalAssistant } from '../../data/data.assistant.terminal';
import db from '../../db';
import { Json } from '../../types';
import * as api from '../openai';

export const main = async (req: any, _api: Json, params: Json, streamCallback?: any) => {
  const { content } = params;

  const ids = (await db.ids.get(req)) ?? {};
  const { terminalAssistantId, terminalThreadId } = ids;

  if (!terminalAssistantId) {
    const definition = createTerminalAssistant();
    const assistant = await api.assistants.create(definition);
    ids.terminalAssistantId = assistant.id;
    await db.ids.patch(req, ids);
  }

  if (!terminalThreadId) {
    const thread = await api.threads.create({
      messages: [],
    });
    ids.terminalThreadId = thread.id;

    await db.ids.patch(req, ids);
  }

  let response: any;
  response = await api.threads.addMessage(ids.terminalThreadId, content);
  response = await api.threads.createStreamedRun(ids.terminalThreadId, ids.terminalAssistantId);

  return response;
};
