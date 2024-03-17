import { IMultiView } from 'multi';
import { calendar } from './calendar.multi.calendar';
import { jsonEditor } from './calendar.multi.json';
import { lanes } from './calendar.multi.lanes';
import { masonry } from './calendar.multi.masonry';
import { sheet } from './calendar.multi.sheet';
import { table } from './calendar.multi.table';

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
