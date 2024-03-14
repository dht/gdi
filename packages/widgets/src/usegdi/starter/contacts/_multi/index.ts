import { IMultiView } from 'multi';
import { calendar } from './contacts.multi.calendar';
import { jsonEditor } from './contacts.multi.json';
import { lanes } from './contacts.multi.lanes';
import { masonry } from './contacts.multi.masonry';
import { sheet } from './contacts.multi.sheet';
import { table } from './contacts.multi.table';

export const initialView: IMultiView = 'sheet';

export const views: IMultiView[] = [
  // 'summary',
  'sheet',
  'table',
  'masonry',
  'calendar',
  'lanes',
  'jsonEditor',
];

export const multi = {
  calendar,
  jsonEditor,
  masonry,
  sheet,
  lanes,
  table,
};
