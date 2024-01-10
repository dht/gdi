import * as express from 'express';
import { midKeys } from '../middlewares/midKeys';
import db from '../db';

export const router = express.Router();

router.use(midKeys);

router.post('/new', async (req: any, res) => {
  try {
    const { tagValue } = req.body;
    const tag = await db.tags.create(req, tagValue);
    res.status(200).json({ success: true, tag });
  } catch (error) {
    console.error('Error creating tag:', error);
    res.status(500).send('Error creating tag');
  }
});

router.get('/myTags', async (req: any, res) => {
  try {
    const tags = await db.tags.get(req);
    res.status(200).json({ success: true, tags });
  } catch (error) {
    console.error('Error getting tags:', error);
    res.status(500).send('Error getting tags');
  }
});
