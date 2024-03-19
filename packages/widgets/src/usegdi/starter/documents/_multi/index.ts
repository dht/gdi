import { IMultiView } from 'multi';
import { calendar } from './documents.multi.calendar';
import { jsonEditor } from './documents.multi.json';
import { lanes } from './documents.multi.lanes';
import { masonry } from './documents.multi.masonry';
import { sheet } from './documents.multi.sheet';
import { table } from './documents.multi.table';

export const initialView: IMultiView = 'sheet';

export const views: IMultiView[] = [
  // 'summary',
  'sheet',
  'table',
  'masonry',
  'calendar',
  'lanes',
  'jsonEditor',
  'focus',
];

export const multi = {
  id: 'documents',
  calendar,
  jsonEditor,
  masonry,
  sheet,
  lanes,
  table,
  itemDisplay: {
    title: ['title'],
    subtitle: [],
  },
};
