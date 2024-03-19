import * as express from 'express';
import { guid4 } from 'shared-base';
import { midKeys } from '../middlewares/midKeys';
import db from '../db';

export const router = express.Router();

router.use(midKeys);

router.post('/save', async (req: any, res) => {
  try {
    const { uid } = req.user;

    const flowRun = await db.runs.get(req);
    flowRun.id = guid4();
    flowRun.uid = uid;
    const response: any = await db.playbacks.create(req, flowRun);
    res.status(200).json({ text: response.text, uid });
  } catch (error: any) {
    console.error('Error saving playback:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req: any, res) => {
  try {
    const playback = await db.playbacks.get(req, req.params.id);

    res.status(200).json(playback ?? {});
  } catch (error: any) {
    console.error('Error getting playback:', error);
    res.status(500).json({ error: error.message });
  }
});
