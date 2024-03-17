import { IMultiView } from 'multi';
import { calendar } from './lists.multi.calendar';
import { jsonEditor } from './lists.multi.json';
import { lanes } from './lists.multi.lanes';
import { masonry } from './lists.multi.masonry';
import { sheet } from './lists.multi.sheet';
import { table } from './lists.multi.table';

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
