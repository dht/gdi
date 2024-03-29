import { IFilterParams } from '../types';
import { IItem } from '../types.md';
import { today } from './date';

const checkTags = (globalTags: string[] = [], itemTags: string[] = []) => {
  return globalTags.every((tag) => itemTags.includes(tag));
};

const now = today();

export const filterItem = <T extends IItem>(item: T, params: IFilterParams) => {
  const { focusTiers, weekId, projectId, todayId, globalTags, focusProject, focusTags } = params;
  const { project, tier, week, tags = [], date } = item;

  const ok = {
    tier: false,
    week: false,
    project: false,
    tags: false,
    today: false,
  };

  ok.tier = focusTiers.includes(String(tier)) || !tier;
  ok.week = weekId === String(week) || weekId === 'all' || (!week && weekId === 'none');
  ok.today = !date || date === now || todayId === 'all';

  switch (focusProject) {
    case 'none':
      ok.project = !project;
      break;
    case 'current':
      ok.project = project === projectId;
      break;
    case 'all':
      ok.project = true;
      break;
  }

  switch (focusTags) {
    case 'none':
      ok.tags = tags.length === 0;
      break;
    case 'current':
      ok.tags = checkTags(globalTags, tags);
      break;
    case 'all':
      ok.tags = true;
      break;
  }

  return Object.values(ok).every((v) => v);
};

export const filterItems = <T extends IItem>(items: T[], params: IFilterParams) => {
  const newItem = items.find((item) => item.id === params.newItemId);
  const output = items.filter((item) => filterItem(item, params));

  if (newItem) return [newItem, ...output];

  return output;
};
