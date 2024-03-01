import { DBAdapter, Json, getScopedPath } from '@gdi/ai-runner';
import * as fb from './firebase';
import { decodeJson, encodeJson } from './crypto';
import { guid4 } from 'shared-base';

export class FirestoreAdapter implements DBAdapter {
  constructor(firestore: any) {
    fb.setFirestore(firestore);
  }

  getCollection(path: string) {
    return fb.getCollection(path);
  }

  replaceCollection(path: string, arr: Json[] | Json) {
    return fb.replaceCollection(path, arr);
  }

  deleteItem(path: string) {
    return fb.deleteItem(path);
  }

  getItem(path: string) {
    return fb.getItem(path);
  }

  setItem(path: string, item: any) {
    return fb.setItem(path, item);
  }

  patchItem(path: string, change: Json) {
    return fb.patchItem(path, change);
  }

  async getKeys(req: any) {
    const scopedPath = getScopedPath(req, '', 'keys');
    const data = await this.getItem(scopedPath);
    return decodeJson(data);
  }

  async patchKeys(req: any, json: Json) {
    const scopedPath = getScopedPath(req, '', 'keys');
    const jsonEncoded = encodeJson(json);
    return this.patchItem(scopedPath, jsonEncoded);
  }

  async getCredits(req: any) {
    const scopedPath = getScopedPath(req, '', 'credits');
    const data = await this.getItem(scopedPath);
    return data.value;
  }

  async patchCredits(req: any, value: number) {
    const scopedPath = getScopedPath(req, '', 'credits');
    return this.patchItem(scopedPath, { value });
  }

  async addLog(req: any, json: Json = {}) {
    const id = guid4();

    const scopedPath = getScopedPath(req, `/${id}`, 'logs');

    return this.patchItem(scopedPath, {
      id,
      ...json,
    });
  }
}
