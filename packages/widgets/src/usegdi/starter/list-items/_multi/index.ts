import { IMultiView } from 'multi';
import { calendar } from './listItems.multi.calendar';
import { jsonEditor } from './listItems.multi.json';
import { lanes } from './listItems.multi.lanes';
import { masonry } from './listItems.multi.masonry';
import { sheet } from './listItems.multi.sheet';
import { table } from './listItems.multi.table';

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
  id: 'listItems',
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
