import * as express from 'express';
import * as envato from '../api/envato';
import { midKeys } from '../middlewares/midKeys';
import { midMusic } from '../middlewares/midMusic';

export const router = express.Router();

router.use(midKeys);
router.use(midMusic);

router.post('/search', async (req: any, res) => {
  try {
    const { q } = req.body;
    const response = await envato.search.music(q);
    res.status(200).json(response);
  } catch (error: any) {
    console.error('Error search music:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/purchases', async (_req: any, res) => {
  try {
    const response = await envato.search.getPurchases();
    res.status(200).json(response);
  } catch (error: any) {
    console.error('Error search music:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/import/:id', async (req: any, res) => {
  try {
    const { id } = req.params;
    const response = await envato.search.getDownloadLink(id);

    res.status(200).json(response);
  } catch (error: any) {
    console.error('Error search music:', error);
    res.status(500).json({ error: error.message });
  }
});
