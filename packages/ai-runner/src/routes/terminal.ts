import * as express from 'express';
import { midKeys } from '../middlewares/midKeys';
// import { midModeration } from '../middlewares/midModeration';
import { runWorkflow } from '../api/workflows';

export const router = express.Router();

router.use(midKeys);
// router.use(midModeration);

router.post('/', async (req: any, res) => {
  try {
    const { prompt } = req.body;

    const response: any = await runWorkflow(
      req,
      {
        endpoint: 'terminal.main',
      },
      {
        content: prompt,
      }
    );

    res.status(200).json({ ...response });
  } catch (error: any) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: error.message });
  }
});
