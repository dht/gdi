import { getPath } from './fileDb.db';

export const handleRequest = (req: any, res: any, next: any) => {
  const path = req.path.replace('/data/', '');
  const parts = path.split('/');

  const collectionName = parts[0];

  let data;

  if (parts.length === 1) {
    data = getPath(collectionName);
  } else {
  }

  res.json(data);
};
