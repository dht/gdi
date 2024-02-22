import * as envato from '../api/envato';

export const midMusic = async (req: any, _res: any, next?: any) => {
  try {
    const keys = req.keys;
    envato.init(keys);
  } catch (err: any) {
    console.log('err =>', err);
  }

  if (typeof next === 'function') {
    next();
  }
};
