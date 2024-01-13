import { runFlow } from '../api/flow';
import db from '../db';
import { midKeys } from '../middlewares/midKeys';
import { Json } from '../types';
import { logDeltaInSeconds } from '../utils/time';

export const runPrompt = async (req: any, prompt: string, promptParams: Json) => {
  if (!prompt) {
    return;
  }

  await db.flow.patchFlowState(req, {
    status: 'running',
    tsStart: Date.now(),
  });

  console.time('flow');
  const flow = await db.flow.get(req);
  flow.prompt = prompt;
  flow.promptParams = promptParams;
  console.timeEnd('flow');

  await midKeys(req, null, () => {});

  logDeltaInSeconds('onUserFlowUpdate beforeRun');
  const flowRun = await runFlow(req, flow);
  logDeltaInSeconds('onUserFlowUpdate afterRun');
};
