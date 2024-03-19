import { all as assets } from './db.assets';
import { all as boards } from './db.boards';
import { all as clip } from './db.clip';
import { all as credits } from './db.credits';
import { all as docs } from './db.docs';
import { all as flow, getXPath } from './db.flow';
import { all as ids } from './db.ids';
import { all as issues } from './db.issues';
import { all as messages } from './db.messages';
import { all as scene } from './db.scene';
import { all as settings } from './db.settings';
import { all as tags } from './db.tags';
import { all as user } from './db.user';

export default {
  getXPath,
  ...assets,
  ...boards,
  ...credits,
  ...docs,
  ...ids,
  ...issues,
  ...messages,
  ...clip,
  ...flow,
  ...scene,
  ...settings,
  ...tags,
  ...user,
};
