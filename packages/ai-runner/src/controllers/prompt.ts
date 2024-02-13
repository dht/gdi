import { runFlow } from '../api/flow';
import db from '../db';
import { midKeys } from '../middlewares/midKeys';
import { Json } from '../types';

export const runPrompt = async (req: any, prompt: string, promptParams: Json) => {
  if (!prompt) {
    return;
  }

  await db.flow.patchFlowState(req, {
    status: 'running',
    tsStart: Date.now(),
  });

  const flow = await db.flow.get(req);

  flow.prompt = prompt;
  flow.promptParams = promptParams;

  await midKeys(req, null, () => {});

  const flowRun = await runFlow(req, flow);
};
