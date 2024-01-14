import * as fs from 'fs';
import db from '../db';
import { storageAdapter } from '../utils/globals';

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
  contentType: string,
  isNew: boolean = false
) => {
  const file = storageAdapter.file(filepath);

  await file.save(buffer, {
    contentType,
    public: true,
  });

  await file.makePublic();

  // `https://storage.googleapis.com/${bucket.name}/${filepath}`;
  const assetUrl = file.publicUrl();

  if (isNew) {
    await db.assets.logNew(req, assetUrl, contentType);
  }

  return assetUrl;
};

export const deleteFromBucket = async (filepath: string) => {
  const file = storageAdapter.file(filepath);
  await file.delete();
};

export const saveState = async (
  req: any,
  filepath: string,
  buffer: any,
  contentType: string,
  isNew: boolean = false
) => {
  const file = storageAdapter.file(filepath);

  await file.save(buffer, {
    contentType,
    public: true,
  });

  await file.makePublic();

  // `https://storage.googleapis.com/${bucket.name}/${filepath}`;
  const assetUrl = file.publicUrl();

  if (isNew) {
    await db.assets.logNew(req, assetUrl, contentType);
  }

  return assetUrl;
};
