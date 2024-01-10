import { Json } from '../../types';
import { ITab } from './Tabs.types';

export const tabNames: Json = {
  jsonEditor: 'Json',
  masonry: 'Masonry',
  spreadsheet: 'Spreadsheet',
  table: 'Table',
  board: 'Board',
};

export const getTabs = (tabIds: string[] = []) => {
  return tabIds
    .map((tabId) => ({
      id: tabId,
      title: tabNames[tabId],
    }))
    .filter((tab) => tab.title);
};
