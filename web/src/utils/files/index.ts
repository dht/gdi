import { Json } from '../../types';
import { IFile } from '../upload';
import { prepareFile as clip } from './files.scene';

const mapByName: any = {
  'clip-default.json': clip,
};

export const prepareFile = (fileInfo: IFile, meta: Json) => {
  const { name } = fileInfo;

  const method = mapByName[name];

  if (!method) {
    return fileInfo;
  }

  return method(fileInfo, meta);
};
