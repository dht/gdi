import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';
import { parseItemsBalance } from '../utils/balance';
import { filterItems } from '../utils/filter';
import { parseItemsRepeat } from '../utils/repeat';
import * as base from './selectors.base';
import * as raw from './selectors.raw';

export const $externalEvents = createSelector(
  raw.$rawExternalEvents,
  base.$filterParams,
  (items, $filterParams) => {
    const arr = Object.values(items);

    const output = filterItems(arr, $filterParams) //
      .sort(sortBy('title', 'desc'));

    return output;
  }
);

export const $reminders = createSelector(
  raw.$rawReminders,
  base.$filterParams,
  (items, $filterParams) => {
    const arr = Object.values(items);

    const output = filterItems(arr, $filterParams) //
      .sort(sortBy('title', 'desc'));

    return output;
  }
);

export const $reads = createSelector(raw.$rawReads, base.$filterParams, (items, $filterParams) => {
  const arr = Object.values(items);

  const output = filterItems(arr, $filterParams) //
    .sort(sortBy('title', 'desc'));

  return output;
});

export const $todos = createSelector(raw.$rawTodos, base.$filterParams, (items, $filterParams) => {
  const arr = Object.values(items);

  const output = filterItems(arr, $filterParams) //
    .sort(sortBy('title', 'desc'));

  return output;
});

export const $lists = createSelector(raw.$rawLists, base.$filterParams, (items, $filterParams) => {
  const arr = Object.values(items);

  const output = filterItems(arr, $filterParams) //
    .sort(sortBy('title', 'desc'));

  return output;
});

export const $listItems = createSelector(
  raw.$rawCurrentIds,
  raw.$rawListItems,
  base.$filterParams,
  (currentIds, items, $filterParams) => {
    const { listId } = currentIds;

    const arr = Object.values(items).filter((item) => item.listId === listId);

    const output = filterItems(arr, $filterParams) //
      .sort(sortBy('title', 'desc'));

    return output;
  }
);

export const $documents = createSelector(
  raw.$rawDocs,
  base.$filterParams,
  (items, $filterParams) => {
    const arr = Object.values(items);

    const output = filterItems(arr, $filterParams) //
      .sort(sortBy('title', 'desc'));

    return output;
  }
);

export const $posts = createSelector(raw.$rawPosts, base.$filterParams, (items, $filterParams) => {
  const arr = Object.values(items);

  const output = filterItems(arr, $filterParams) //
    .sort(sortBy('title', 'desc'));

  return output;
});

export const $contacts = createSelector(
  raw.$rawContacts,
  base.$filterParams,
  (items, $filterParams) => {
    const arr = Object.values(items);

    const output = filterItems(arr, $filterParams) //
      .map((item) => {
        const { firstName, email } = item;

        return {
          ...item,
          firstName: firstName || email,
        };
      })
      .sort(sortBy('firstName', 'asc'));

    return output;
  }
);

export const $events = createSelector(
  raw.$rawEvents,
  base.$filterParams,
  (items, $filterParams) => {
    const arr = parseItemsRepeat(Object.values(items) as any) as any;

    const output = filterItems(arr, $filterParams) //
      .map((item) => {
        const { firstName, email, date, startTime = '00:00' } = item;

        const dateFull = `${date} ${startTime}`;

        return {
          ...item,
          firstName: firstName || email,
          dateFull,
        };
      })
      .sort(sortBy('dateFull', 'asc'));

    return output;
  }
);

export const $financeLines = createSelector(
  raw.$rawFinanceLines,
  base.$filterParams,
  (items, $filterParams) => {
    let arr: any = Object.values(items);
    arr = filterItems(arr, $filterParams);
    arr = parseItemsRepeat(arr).sort(sortBy(['date']));
    arr = parseItemsBalance(arr);

    return arr;
  }
);
