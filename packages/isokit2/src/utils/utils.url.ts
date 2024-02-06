import { IExternal, ISceneCharacter } from '@gdi/store-iso';

export const parseExternalUrl = (external: IExternal | ISceneCharacter) => {
  const { url = '' } = external;

  const parts = url.split('/');
  const fileName = parts.pop() as string;
  const rootUrl = parts.join('/') + '/';

  return {
    fileName,
    rootUrl,
  };
};
