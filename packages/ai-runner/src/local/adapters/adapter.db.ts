import * as fdb from '../fileDb';
import kleur from 'kleur';
import fs from 'fs-extra';
import { DBAdapter } from '../types';
import { guid4 } from 'shared-base';

export class FsDbAdapter implements DBAdapter {
  private rootPath: string;
  private keys: Json = {};
  private io: any;

  constructor(projectRoot: any, dbPath: string, env: Json) {
    this.rootPath = projectRoot + dbPath;

    this.keys['openAI'] = env.OPENAI_API_KEY;
    this.keys['elevenLabs'] = env.ELEVENLABS_API_KEY;
    this.keys['envato'] = env.ENVATO_PERSONAL_TOKEN;

    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
      console.log(`Created ${kleur.cyan('DB')} directory at ${kleur.magenta(dbPath)}`);
    }

    fdb.init(projectRoot, dbPath);
  }

  getCollection(path: string) {
    return fdb.getCollection(path);
  }

  replaceCollection(path: string, arr: Json[] | Json) {
    return fdb.replaceCollection(path, arr);
  }

  deleteItem(path: string) {
    return fdb.deleteItem(path);
  }

  getItem(path: string) {
    return fdb.getItem(path);
  }

  setItem(path: string, item: any) {
    return fdb.setItem(path, item);
  }

  patchItem(path: string, change: Json, merge: boolean = true) {
    return fdb.patchItem(path, change, merge);
  }

  getKeys(_req: any) {
    return Promise.resolve(this.keys);
  }

  patchKeys(_req: any, _json: Json) {
    return Promise.resolve();
  }

  async addLog(_req: any, json: Json = {}) {
    const id = guid4();

    return fdb.setItem(`userData/user/logs/${id}`, {
      id,
      ...json,
    });
  }
}
