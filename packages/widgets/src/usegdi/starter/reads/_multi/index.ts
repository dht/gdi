import { IMultiView } from 'multi';
import { calendar } from './reads.multi.calendar';
import { jsonEditor } from './reads.multi.json';
import { lanes } from './reads.multi.lanes';
import { masonry } from './reads.multi.masonry';
import { sheet } from './reads.multi.sheet';
import { table } from './reads.multi.table';

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
