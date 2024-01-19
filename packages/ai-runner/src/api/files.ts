import db from '../db';
import { storageAdapter } from '../utils/globals';
import { get } from 'lodash';
import bytes from 'bytes';

let bucket: any;

export const setBucket = (value: any) => {
  bucket = value;
};

export const saveToBucket = async (
  req: any,
  filepath: string,
  buffer: any,
  contentType: string,
  meta?: Json,
  logFile: boolean = false
) => {
  const uid = get(req, 'user.uid');

  let filepathWithUid = filepath;

  if (uid !== 'user') {
    const uid4 = uid.slice(0, 4);
    filepathWithUid = `${uid4}/${filepath}`;
  }

  const assetUrl = await saveFile(filepathWithUid, buffer, contentType);

  if (logFile) {
    await db.assets.logNew(req, assetUrl, contentType);
  }

  if (meta) {
    const fileSize = buffer.length;
    const fileSizeBytes = bytes(buffer.length);
    await saveMeta(req, filepathWithUid, { ...meta, fileSize, fileSizeBytes });
  }

  return assetUrl;
};

export const saveFile = async (filepath: string, buffer: any, contentType: string) => {
  const file = storageAdapter.file(filepath);

  await file.save(buffer, {
    contentType,
    public: true,
  });

  await file.makePublic();

  // `https://storage.googleapis.com/${bucket.name}/${filepath}`;
  const assetUrl = file.publicUrl();
  return assetUrl;
};

export const saveMeta = async (req: any, filepath: string, meta: Json) => {
  return saveFile(filepath + '.json', JSON.stringify(meta, null, 2), 'application/json');
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
