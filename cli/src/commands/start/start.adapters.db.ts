import { DBAdapter, Json, getScopedPath } from '@gdi/ai-runner';
import * as fdb from '../../fileDb';
import chalk from 'chalk';
import fs from 'fs-extra';

export class FsDbAdapter implements DBAdapter {
  private rootPath: string;
  private keys: Json = {};
  private io: any;

  constructor(projectRoot: any, dbPath: string, env: Json) {
    this.rootPath = projectRoot + dbPath;

    this.keys['openAI'] = env.OPENAI_API_KEY;
    this.keys['elevenLabs'] = env.ELEVENLABS_API_KEY;

    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
      console.log(
        `Created ${chalk.cyan('DB')} directory at ${chalk.magenta(dbPath)}`
      );
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

  patchItem(path: string, change: Json) {
    return fdb.patchItem(path, change);
  }

  getKeys(_req: any) {
    return Promise.resolve(this.keys);
  }

  patchKeys(_req: any, _json: Json) {
    return Promise.resolve();
  }
}
