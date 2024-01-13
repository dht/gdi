import * as express from 'express';

export const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  res.status(200).json({ message: `You sent: ${JSON.stringify(data)}` });
});
