import cors from 'cors';
import express from 'express';
import jsonServer from 'json-server';

const app = express();
const port = 3001;

const jsonRouter = jsonServer.router('./db/db.hovercraft.json');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api', (req, res, next) => {
  // const { method, url, body } = req;
  next();
});

app.use('/api', jsonRouter);

app.patch('/api/control', async (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
