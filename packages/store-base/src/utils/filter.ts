import { FilterParams } from '../types';
import { IItem } from '../types.md';

const checkTags = (globalTags: string[] = [], itemTags: string[] = []) => {
  return globalTags.every((tag) => itemTags.includes(tag));
};

export const filterItem = <T extends IItem>(item: T, params: FilterParams) => {
  const { focusTiers, weekId, projectId, globalTags, focusProject, focusTags } = params;
  const { project, tier, week, tags = [] } = item;

  const ok = {
    tier: false,
    week: false,
    project: false,
    tags: false,
  };

  ok.tier = focusTiers.includes(String(tier)) || !tier;
  ok.week = weekId === String(week) || weekId === 'all' || (!week && weekId === 'none');

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

export const filterItems = <T extends IItem>(items: T[], params: FilterParams) => {
  return items.filter((item) => filterItem(item, params));
};
