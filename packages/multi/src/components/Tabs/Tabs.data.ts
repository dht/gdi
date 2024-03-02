import { Json } from '../../types';
import { ITab } from './Tabs.types';

export const tabNames: Json = {
  jsonEditor: 'Json',
  masonry: 'Gallery',
  sheet: 'Sheet',
  table: 'Table',
  lanes: 'Lanes',
};

export const getTabs = (tabIds: string[] = []) => {
  return tabIds
    .map((tabId) => ({
      id: tabId,
      title: tabNames[tabId],
    }))
    .filter((tab) => tab.title);
};
