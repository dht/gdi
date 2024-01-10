import * as express from 'express';
import * as openAI from '../api/openai';
import { midKeys } from '../middlewares/midKeys';

export const router = express.Router();

router.use(midKeys);

router.post('/improve', async (req: any, res) => {
  const { assistant, prompt } = req.body;
  const response = await openAI.assistants.quickUse(assistant, prompt, true);
  const { ids, data } = response;

  res.status(200).json({
    success: true,
    ids,
    data,
  });
});
