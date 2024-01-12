import * as express from 'express';
import { get } from 'lodash';
import * as elevenLabs from '../api/elevenLabs';
import { runFlow } from '../api/flow';
import { resetFlowRun } from '../api/flow.utils';
import * as openAI from '../api/openai';
import { seedFlowMeta } from '../data/flowMeta';
import db from '../db';
import { midKeys } from '../middlewares/midKeys';
import { Json } from '../types';
import { logDeltaInSeconds } from '../utils/time';

export const router = express.Router();

router.use(midKeys);

router.post('/chat', async (req: any, res) => {
  try {
    const { uid } = req.user;

    const { prompt } = req.body;
    const response = await openAI.chat.chat(prompt);
    res.status(200).json({ text: response.text, uid });
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).send('Error generating text');
  }
});

router.post('/image', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openAI.image.image(prompt);
    res.status(200).json({ url: response.data.url });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send('Error generating image');
  }
});

router.post('/speech', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response: any = await openAI.speech.speech(prompt, {} as any);
    res.status(200).json({ url: response.url });
  } catch (error) {
    console.error('Error generating speech:', error);
    res.status(500).send('Error generating speech');
  }
});

router.post('/vision', async (req, res) => {
  try {
    const { url } = req.body;
    const response = await openAI.vision.vision(url);
    res.status(200).json({ text: response.text });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send('Error generating image');
  }
});

router.post('/eleven', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await elevenLabs.speech.speech(prompt, {});
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error generating speech:', error);
    res.status(500).send('Error generating speech');
  }
});

router.post('/flow/prepare', async (req, res) => {
  try {
    const { flow, prompt } = req.body;

    const flowType = get(flow, 'flowConfig.flowType');
    const flowMeta = seedFlowMeta(flowType);

    await db.flow.clear(req);
    await db.flow.set(req, { prompt, ...flow });

    res.status(200).json({
      id: flowMeta.id,
      success: true,
    });
  } catch (error) {
    console.error('Error running flow:', error);
    res.status(500).send('Error running flow');
  }
});

router.post('/flow/prompt', async (req, res) => {
  try {
    const { boardId, boardIdentifier, prompt, params: promptParams = {} } = req.body;

    await db.flow.patchFlowState(req, {
      status: 'waiting',
    });

    await db.runs.changePrompt(req, {
      prompt,
      promptParams,
      boardId,
      boardIdentifier,
    });

    res.status(200).json({ success: true });
    logDeltaInSeconds('flowEnd');
  } catch (error) {
    console.error('Error running flow:', error);
    res.status(500).send('Error running flow');
  }
});

router.post('/flow', async (req, res) => {
  try {
    const { flow } = req.body;
    await db.flow.set(req, flow);
    await resetFlowRun(req, flow);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error setting flow:', error);
    res.status(500).send('Error setting flow');
  }
});

router.patch('/flow/dynamic', async (req, res) => {
  try {
    const { assistant } = req.body;
    await db.flow.patchDynamicFlow(req, assistant);
    await db.variables.patch(req, { transcriptLines: {} });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error setting flow:', error);
    res.status(500).send('Error setting flow');
  }
});

export const onPrompt = async (change: Json, context: any) => {
  const userId = context.params.userId;
  const req = { user: { uid: userId }, tsStart: 0 };

  logDeltaInSeconds('onUserFlowUpdate Start');

  const before: Json = change.before.data();
  const after: Json = change.after.data();

  const didPromptChange = get(before, 'promptTs') !== get(after, 'promptTs');

  if (!didPromptChange) {
    return;
  }

  const prompt = get(after, 'prompt');
  const promptParams = get(after, 'promptParams');

  if (!prompt) {
    return;
  }

  const tsStart = Date.now();
  req.tsStart = tsStart;

  await db.flow.patchFlowState(req, {
    status: 'running',
    tsStart,
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

router.post('/flow', async (req, res) => {
  try {
    const { flow } = req.body;
    await db.flow.set(req, flow);
    await resetFlowRun(req, flow);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error setting flow:', error);
    res.status(500).send('Error setting flow');
  }
});
export const quickRun = async (req: any, res: any) => {};