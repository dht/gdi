import { all } from './fileDb.fs';

export const handleRequest = (req: any, res: any) => {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    case 'POST':
      return handlePost(req, res);
    case 'PATCH':
      return handlePatch(req, res);
    case 'DELETE':
      return handleDelete(req, res);
    default:
  }
};

export const handleGet = (req: any, res: any) => {
  const path = fixPath(req);

  let data;

  if (path.split('/').length === 2) {
    data = all.collection.getItem(path);
  } else {
    data = all.collection.getAll(path);
  }

  res.json(data);
};

export const handlePost = (req: any, res: any) => {
  const path = fixPath(req);

  all.collection.setItem(path, req.body);

  res.json({ success: true });
};

export const handlePatch = (req: any, res: any) => {
  const path = fixPath(req);

  all.collection.patchItem(path, req.body, true);

  res.json({ success: true });
};

export const handleDelete = (req: any, res: any) => {
  const path = fixPath(req);

  all.collection.deleteItem(path);

  res.json({ success: true });
};

export const fixPath = (req: any) => {
  const path = req.path.replace('/data/', '');
  return path;
};
