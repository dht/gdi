import * as express from 'express';
import { guid8 } from 'shared-base';
import db from '../db';
import { midKeys } from '../middlewares/midKeys';
import { tsShort } from '../utils/time';

export const router = express.Router();

router.use(midKeys);

router.post('/report', async (req: any, res) => {
  try {
    const { description } = req.body;
    const id = guid8();

    await db.issues.create(req, {
      id,
      tsAdded: tsShort(),
      description,
    });

    res.status(200).json({ success: true, id });
  } catch (error: any) {
    console.error('Error creating asset:', error);
    res.status(500).json({ error: error.message });
  }
});
