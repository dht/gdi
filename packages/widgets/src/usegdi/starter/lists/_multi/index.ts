import { calendar as calendarLists } from './lists.multi.calendar';
import { jsonEditor as jsonEditorLists } from './lists.multi.json';
import { lanes as lanesLists } from './lists.multi.lanes';
import { masonry as masonryLists } from './lists.multi.masonry';
import { sheet as sheetLists } from './lists.multi.sheet';
import { table as tableLists } from './lists.multi.table';

export const multi = {
  initialView: 'sheet',
  views: ['sheet', 'table', 'masonry', 'calendar', 'lanes', 'jsonEditor'],
  config: {
    id: 'lists',
    calendar: calendarLists,
    jsonEditor: jsonEditorLists,
    masonry: masonryLists,
    sheet: sheetLists,
    lanes: lanesLists,
    table: tableLists,
    itemDisplay: {
      title: ['title'],
      subtitle: [],
    },
  },
};
