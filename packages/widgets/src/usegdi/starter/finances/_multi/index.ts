import { IMultiView } from 'multi';
import { calendar } from './finances.multi.calendar';
import { jsonEditor } from './finances.multi.json';
import { lanes } from './finances.multi.lanes';
import { masonry } from './finances.multi.masonry';
import { sheet } from './finances.multi.sheet';
import { table } from './finances.multi.table';

export const initialView: IMultiView = 'sheet';

export const views: IMultiView[] = ['summary', 'sheet', 'table', 'calendar', 'lanes', 'jsonEditor'];

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
