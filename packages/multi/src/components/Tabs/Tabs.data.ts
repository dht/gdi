import { Json } from '../../types';
import { ITab } from '../../types';

export const tabNames: Json = {
  jsonEditor: 'Json',
  masonry: 'Gallery',
  sheet: 'Sheet',
  table: 'Table',
  lanes: 'Lanes',
  calendar: 'Calendar',
};

export const getTabs = (tabIds: string[] = []) => {
  return tabIds
    .map((tabId) => ({
      id: tabId,
      title: tabNames[tabId],
    }))
    .filter((tab) => tab.title);
};
