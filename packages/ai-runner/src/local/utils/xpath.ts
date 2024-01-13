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
  }
  return output;
};
