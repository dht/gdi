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
    const response = await db.playbacks.create(req, flowRun);
    res.status(200).json({ text: response.text, uid });
  } catch (error) {
    console.error('Error saving playback:', error);
    res.status(500).send('Error saving playback');
  }
});

router.get('/:id', async (req: any, res) => {
  try {
    const playback = await db.playbacks.get(req, req.params.id);

    res.status(200).json(playback ?? {});
  } catch (error) {
    console.error('Error getting playback:', error);
    res.status(500).send('Error getting playback');
  }
});
