import { IMultiView } from 'multi';
import { calendar } from './posts.multi.calendar';
import { jsonEditor } from './posts.multi.json';
import { lanes } from './posts.multi.lanes';
import { masonry } from './posts.multi.masonry';
import { sheet } from './posts.multi.sheet';
import { table } from './posts.multi.table';

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
  id: 'posts',
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
