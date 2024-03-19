import { guid8 } from 'shared-base';
import { saveToBucket } from '../api/files';
import db from '../db';
import { contentTypeFromFileName } from '../utils/contentType';
import { tsShort } from '../utils/time';

export const upload = async (req: any, fileInfo: Json, tags: string[], project: string) => {
  const { name: fileName, size, type, text, base64, forceContentType } = fileInfo;

  const ext = fileName.split('.').pop();
  const id = guid8();

  let buffer: Buffer;

  if (base64) {
    const dataWithoutHeader = base64.replace(/^data:[^;]+;base64,/, '');
    buffer = Buffer.from(dataWithoutHeader, 'base64');
  } else {
    buffer = Buffer.from(text);
  }

  const meta = {
    source: 'uploaded',
  };

  const filePath = `uploads/${id}.${ext}`;
  const assetUrl = await saveToBucket(req, filePath, buffer, type, meta);
  const contentType = forceContentType || contentTypeFromFileName(fileName);

  const asset = await db.assets.create(req, {
    id: guid8(),
    fileName,
    filePath,
    assetUrl,
    contentType,
    tsAdded: tsShort(),
    tags,
    size,
    project,
  });

  return asset;
};
