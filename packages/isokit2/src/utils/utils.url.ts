import { IExternal } from '@gdi/store-iso';

export const parseExternalUrl = (external: IExternal) => {
  const { rootUrl, fileName, url } = external;

  const output = { rootUrl: '', fileName: '' };

  if (url) {
    output.fileName = url;
  } else {
    output.rootUrl = rootUrl ?? '';
    output.fileName = fileName ?? '';
  }

  return output;
};
