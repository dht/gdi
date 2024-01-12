import { dbAdapter } from '../utils/globals';
import { arrayToObject } from '../utils/object';

export type Scope =
  | 'users'
  | 'keys'
  | 'userData'
  | 'settings'
  | 'pendingBoards'
  | 'pendingReviews'
  | 'global';

export const getScopedPath = (req: any, path: string, scope: Scope) => {
  const { uid } = req.user;

  switch (scope) {
    case 'global':
      return path;
    default:
      return `${scope}/${uid}${path}`;
  }
};

export const getByNode = async (req: any, nodeName: string) => {
  const scopedPath = getScopedPath(req, `/${nodeName}`, 'userData');
  return dbAdapter.getCollection(scopedPath);
};

export const getByNodes = async (req: any, nodeNames: string[]) => {
  const promises = nodeNames.map((nodeName) => getByNode(req, nodeName));

  const responses = await Promise.all(promises);

  return responses.reduce((acc, cur, index) => {
    const nodeName = nodeNames[index];
    acc[nodeName] = arrayToObject(cur);
    return acc;
  }, {} as any);
};
