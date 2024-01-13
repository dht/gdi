import { handleRequest } from '../../fileDb/fileDb.requests';

export const midUser = async (req: any, res: any, next: any) => {
  try {
    req.user = {
      uid: 'user',
      email: 'user@example.com',
      displayName: 'User',
      photoURL: '',
    };
  } catch (err: any) {
    console.log('err =>', err);
  }

  next();
};

export const midLogger = async (req: any, res: any, next: any) => {
  // console.log('req.url =>', req.method, req.path);
  next();
};

export const midData = async (req: any, res: any, next: any) => {
  if (req.path.startsWith('/data')) {
    return handleRequest(req, res, next);
  }

  next();
};
