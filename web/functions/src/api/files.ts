import * as fs from 'fs';
import db from '../db';
import { fetchBinaryUrl } from '../utils/download';

let bucket: any;

export const setBucket = (value: any) => {
  bucket = value;
};

export const saveFile = (filename: string, buffer: Buffer) => {
  fs.writeFileSync(filename, buffer);
  return filename;
};

export const saveToBucket = async (
  req: any,
  filepath: string,
  buffer: any,
  contentType: string
) => {
  const file = bucket.file(filepath);

  await file.save(buffer, {
    contentType,
    public: true,
  });

  await file.makePublic();

  const assetUrl = file.publicUrl();
  // `https://storage.googleapis.com/${bucket.name}/${filepath}`;

  let assetType = 'file';

  await db.assets.logNew(req, assetUrl, contentType);

  return assetUrl;
};

export const deleteFromBucket = async (filepath: string) => {
  const file = bucket.file(filepath);
  await file.delete();
};
