import { all } from './fileDb.fs';

export const handleRequest = (req: any, res: any, next: any) => {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res, next);
    case 'POST':
      return handlePost(req, res, next);
    case 'PATCH':
      return handlePatch(req, res, next);
    default:
      next();
  }
};

export const handleGet = (req: any, res: any, next: any) => {
  const path = fixPath(req);

  let data;

  if (path.split('/').length === 2) {
    data = all.collection.getItem(path);
  } else {
    data = all.collection.getAll(path);
  }

  res.json(data);

  next();
};

export const handlePost = (req: any, res: any, next: any) => {
  const path = fixPath(req);

  all.collection.setItem(path, req.body);

  next();
};

export const handlePatch = (req: any, res: any, next: any) => {
  const path = fixPath(req);

  all.collection.patchItem(path, req.body, true);

  next();
};

export const handleDelete = (req: any, res: any, next: any) => {
  const path = fixPath(req);

  all.collection.deleteItem(path);

  next();
};

export const fixPath = (req: any) => {
  const path = req.path.replace('/data/', '');
  return path;
};
