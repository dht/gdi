import { IDndItem, IDndItems, IDndLists } from '../Trello.types';
import { sortBy } from 'shared-base';

type CurrentNextPrevious = {
  current?: IDndItem;
  next?: IDndItem;
  previous?: IDndItem;
  listId?: string;
};

export const getCurrentNextPrevious = (items: IDndItems, selectedId: string) => {
  const output: CurrentNextPrevious = {
    current: undefined,
    next: undefined,
    previous: undefined,
  };
  if (selectedId.match(/^NEW_/)) {
    return getCurrentNextPreviousForNew(items, selectedId);
  }

  const itemInfo = getItemInfo(items, selectedId);

  if (!itemInfo) {
    return output;
  }

  output.current = itemInfo.item;
  output.listId = itemInfo.listId;

  const index = itemInfo.index;

  const indexPrevious = index - 1;
  const indexNext = index + 1;

  output.previous = itemInfo.itemsInSameList[indexPrevious];
  output.next = itemInfo.itemsInSameList[indexNext];

  return output;
};

export const getCurrentNextPreviousForNew = (items: IDndItems, selectedId: string) => {
  const output: CurrentNextPrevious = {
    current: undefined,
    next: undefined,
    previous: undefined,
  };

  const listId = extractListIdFromItemId(selectedId);
  if (!listId) {
    return output;
  }

  output.listId = listId;

  const itemsArr = Object.values(items);
  const itemsInSameList = itemsArr.filter((i) => i.listId === listId).sort(sortBy('order'));

  output.previous = itemsInSameList.pop();

  return output;
};

export const getOrderForMove = (
  items: IDndItems,
  movableItemId: string,
  destinationListId: string,
  destinationIndex: number
): number | null => {
  const itemsArr = Object.values(items);

  const item = itemsArr.find((i) => i.id === movableItemId);

  if (!item) {
    return null;
  }

  const itemsInDestinationList = itemsArr
    .filter((i) => i.listId === destinationListId)
    .filter((i) => i.id !== movableItemId)
    .sort(sortBy('order'));

  const itemInDestinationPosition = itemsInDestinationList[destinationIndex];

  let currentOrder = 0,
    previousOrder = 0;

  if (!itemInDestinationPosition) {
    const lastItem = itemsInDestinationList.pop();

    if (!lastItem) {
      return 1;
    }

    previousOrder = lastItem.order;
    currentOrder = previousOrder + 1;
  } else {
    const currentNextPrevious = getCurrentNextPrevious(items, itemInDestinationPosition.id);

    if (!currentNextPrevious.current) {
      return 1;
    }

    currentOrder = currentNextPrevious.current.order;

    previousOrder = Math.max(currentNextPrevious.previous?.order || currentOrder - 1, 0);
  }

  return (currentOrder + previousOrder) / 2;
};

export const getOrderForNew = (items: IDndItems, listId: string) => {
  const itemsArr = Object.values(items);

  const itemsInDestinationList = itemsArr.filter((i) => i.listId === listId).sort(sortBy('order'));

  const lastItem = itemsInDestinationList.pop();

  if (!lastItem) {
    return 1;
  }

  const currentOrder = lastItem.order;

  return currentOrder + 1;
};

export const getNextSelectedIdForDeleted = (items: IDndItems, itemId: string): string | null => {
  const itemsArr = Object.values(items);

  const item = itemsArr.find((i) => i.id === itemId);

  if (!item) {
    return null;
  }

  const listId = item.listId;

  const itemsInSameList = itemsArr.filter((i) => i.listId === item.listId).sort(sortBy('order'));

  const itemIndex = itemsInSameList.indexOf(item);
  const nextIndex = itemIndex + 1;

  const nextItem = itemsInSameList[nextIndex];

  if (!nextItem) {
    return listId ? `NEW_${listId}` : null;
  }

  return nextItem.id;
};

export type ListAndItemId = {
  listId: string;
  itemId: string;
};

export const getSiblingItemForKeyboard = (
  lists: IDndLists,
  items: IDndItems,
  itemId: string,
  deltaIndex: number
): ListAndItemId | null => {
  const output: ListAndItemId = {
    listId: '',
    itemId: '',
  };

  const itemsArr = Object.values(items);
  const item = itemsArr.find((i) => i.id === itemId);

  let listId: string | null | undefined;

  if (item) {
    listId = item.listId;
  } else if (itemId.match(/^NEW_/)) {
    listId = extractListIdFromItemId(itemId);
  }

  if (!listId) {
    return null;
  }

  const itemsInSameList = itemsArr.filter((i) => i.listId === listId).sort(sortBy('order'));

  const itemIndex = item ? itemsInSameList.indexOf(item) : itemsInSameList.length - 1;

  const nextList = getNextList(lists, items, listId, deltaIndex);

  if (!nextList) {
    return null;
  }

  output.listId = nextList.listId;
  const siblingDirect = nextList.items[itemIndex];

  if (siblingDirect) {
    output.itemId = siblingDirect.id;
    return output;
  }

  if (nextList.items.length === 0) {
    output.itemId = `NEW_${nextList.listId}`;
    return output;
  }

  const lastItem = nextList.items.pop();

  if (!lastItem) {
    return null;
  }

  output.itemId = lastItem.id;

  return output;
};

export type ListAndOrder = {
  listId: string;
  order: number;
};

export const nudgeUp = (items: IDndItems, itemId: string): ListAndOrder | null => {
  const output = {
    listId: '',
    order: 0,
  };

  const itemsArr = Object.values(items);

  const item = itemsArr.find((i) => i.id === itemId);

  if (!item) {
    return null;
  }

  output.listId = item.listId;

  const itemsInSameList = itemsArr.filter((i) => i.listId === item.listId).sort(sortBy('order'));

  const itemIndex = itemsInSameList.indexOf(item);
  if (itemIndex === 0) {
    return null;
  }

  const delta_2 = itemIndex - 2;
  const delta_1 = itemIndex - 1;

  const item_2 = itemsInSameList[delta_2] || { order: 0 };
  const item_1 = itemsInSameList[delta_1];

  output.order = (item_2.order + item_1.order) / 2;

  return output;
};

export const nudgeDown = (items: IDndItems, itemId: string): ListAndOrder | null => {
  const output = {
    listId: '',
    order: 0,
  };

  const itemsArr = Object.values(items);

  const item = itemsArr.find((i) => i.id === itemId);

  if (!item) {
    return null;
  }

  output.listId = item.listId;

  const itemsInSameList = itemsArr.filter((i) => i.listId === item.listId).sort(sortBy('order'));

  const itemIndex = itemsInSameList.indexOf(item);
  if (itemIndex === itemsInSameList.length - 1) {
    return null;
  }

  const delta_2 = itemIndex + 2;
  const delta_1 = itemIndex + 1;

  const item_1 = itemsInSameList[delta_1];
  const item_2 = itemsInSameList[delta_2] || { order: item_1.order + 1 };

  output.order = (item_2.order + item_1.order) / 2;

  return output;
};

export const nudgeVertical = (
  items: IDndItems,
  itemId: string,
  isUp?: boolean
): ListAndOrder | null => {
  if (isUp) {
    return nudgeUp(items, itemId);
  } else {
    return nudgeDown(items, itemId);
  }
};

export const nudgeHorizontal = (
  lists: IDndLists,
  items: IDndItems,
  itemId: string,
  deltaIndex: number
): ListAndOrder | null => {
  const output = {
    listId: '',
    order: 1,
  };

  const itemInfo = getItemInfo(items, itemId);

  if (!itemInfo) {
    return null;
  }

  const nextList = getNextList(lists, items, itemInfo.listId, deltaIndex);

  if (!nextList) {
    return null;
  }

  output.listId = nextList.listId;

  const sibling = nextList.items[itemInfo.index];

  if (!sibling) {
    const lastItem = nextList.items.pop();
    output.order = lastItem ? lastItem.order + 1 : 1;
  } else {
    const siblingTop = nextList.items[itemInfo.index - 1] || { order: 0 };
    output.order = (sibling.order + siblingTop.order) / 2;
  }

  return output;
};

const extractListIdFromItemId = (itemId: string) => {
  const match = /^NEW_([a-z0-9]+)/g.exec(itemId);

  if (!match || match.length < 2) {
    return null;
  }

  return match[1];
};

const getItemInfo = (items: IDndItems, itemId: string) => {
  const itemsArr = Object.values(items).sort(sortBy('order'));

  const item = itemsArr.find((i) => i.id === itemId);

  if (!item) {
    return null;
  }

  const itemsInSameList = itemsArr.filter((i) => i.listId === item.listId).sort(sortBy('order'));

  const itemIndex = itemsInSameList.indexOf(item);

  return {
    id: itemId,
    item,
    itemsInSameList,
    index: itemIndex,
    listId: item.listId,
  };
};

const getNextList = (lists: IDndLists, items: IDndItems, listId: string, deltaIndex: number) => {
  const itemsArr = Object.values(items).sort(sortBy('order'));

  const listsArr = Object.values(lists).sort(sortBy('order'));
  const listIndex = listsArr.findIndex((l) => l.id === listId);

  if (listIndex === -1) {
    return null;
  }

  const nextListIndex = listIndex + deltaIndex;
  const nextList = listsArr[nextListIndex];

  if (!nextList) {
    return null;
  }

  const itemsInNextList = itemsArr.filter((i) => i.listId === nextList.id);

  return {
    listId: nextList.id,
    list: nextList,
    items: itemsInNextList,
  };
};
