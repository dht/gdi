import { IMultiView } from 'multi';
import { calendar } from './reminders.multi.calendar';
import { jsonEditor } from './reminders.multi.json';
import { lanes } from './reminders.multi.lanes';
import { masonry } from './reminders.multi.masonry';
import { sheet } from './reminders.multi.sheet';
import { table } from './reminders.multi.table';

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
