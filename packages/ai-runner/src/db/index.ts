import { all as assets } from './db.assets';
import { all as boards } from './db.boards';
import { all as issues } from './db.issues';
import { all as clip } from './db.clip';
import { all as flow, getXPath } from './db.flow';
import { all as scene } from './db.scene';
import { all as settings } from './db.settings';
import { all as tags } from './db.tags';
import { all as user } from './db.user';

export default {
  getXPath,
  ...assets,
  ...boards,
  ...issues,
  ...clip,
  ...flow,
  ...scene,
  ...settings,
  ...tags,
  ...user,
};
