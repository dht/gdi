import { IMultiView } from 'multi';
import { calendar } from './events.multi.calendar';
import { jsonEditor } from './events.multi.json';
import { lanes } from './events.multi.lanes';
import { masonry } from './events.multi.masonry';
import { sheet } from './events.multi.sheet';
import { table } from './events.multi.table';

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
  itemDisplay: {
    title: ['title'],
    subtitle: [],
  },
};
