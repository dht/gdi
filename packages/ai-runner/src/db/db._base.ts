import { dbAdapter } from '../utils/globals';
import { arrayToObject } from '../utils/object';

export type Scope =
  | 'users'
  | 'keys'
  | 'credits'
  | 'logs'
  | 'issues'
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

export const unScopePath = (inPath: string) => {
  const output = {
    originalPath: inPath,
    scope: '',
    collectionName: '',
    uid: '',
    path: '',
    xpath: '',
    id: '',
    isItem: false,
    isUserData: false,
  };

  const parts = inPath.split('/');
  const scope = parts[0];
  output.scope = scope;
  output.uid = parts[1];
  output.id = parts[3];
  output.isItem = parts.length % 2 === 0;
  output.isUserData = scope === 'userData';

  switch (scope) {
    case 'global':
      output.path = inPath;
      break;
    case 'userData':
      output.path = parts.slice(2).join('/');
      output.collectionName = parts[2];
      break;
    case 'users':
      output.path = 'user';
      break;
    case 'settings':
      output.path = 'settings';
      break;
    case 'keys':
      output.path = 'keys';
      break;
    case 'logs':
      output.path = 'logs';
      break;
  }

  return output;
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
