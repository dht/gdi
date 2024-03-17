import { IMultiView } from 'multi';
import { calendar } from './todos.multi.calendar';
import { jsonEditor } from './todos.multi.json';
import { lanes } from './todos.multi.lanes';
import { masonry } from './todos.multi.masonry';
import { sheet } from './todos.multi.sheet';
import { table } from './todos.multi.table';

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
