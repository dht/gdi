import * as express from 'express';
import { guid4 } from 'shared-base';
import { midKeys } from '../middlewares/midKeys';
import db from '../db';

export const router = express.Router();

router.use(midKeys);

router.post('/saveForLater', async (req: any, res) => {
  const { id } = req.body;

  try {
    await db.boards.save(req, id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving board for later:', error);
    res.status(500).send('Error saving board for later');
  }
});

router.get('/myBoards', async (req: any, res) => {
  try {
    const data = await db.boards.getMy(req);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting my boards:', error);
    res.status(500).send('Error getting my boards');
  }
});

router.post('/add', async (req: any, res) => {
  const { id } = req.body;

  try {
    await db.boards.addToMy(req, id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error adding to my boards:', error);
    res.status(500).send('Error adding to my boards');
  }
});

router.post('/remove', async (req: any, res) => {
  const { id } = req.body;

  try {
    await db.boards.removeFromMy(req, id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error adding to my boards:', error);
    res.status(500).send('Error adding to my boards');
  }
});

router.post('/new', async (req: any, res) => {
  const { url } = req.body;

  const id = guid4();

  try {
    await db.boards.suggest(req, {
      id,
      url,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error submitting new board:', error);
    res.status(500).send('Error submitting new board');
  }
});

router.post('/review', async (req: any, res) => {
  const { review } = req.body;
  const { title, body, rating } = review ?? {};

  const id = guid4();

  try {
    await db.boards.review(req, {
      id,
      title,
      body,
      rating,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error submitting new review:', error);
    res.status(500).send('Error submitting new review');
  }
});
