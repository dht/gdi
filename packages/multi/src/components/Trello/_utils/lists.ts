import { IDndList, IDndLists } from '../Trello.types';
import { uniq } from 'lodash';

export const getListByDataTags = (
  scopedPermutationId: string,
  dataTags: string[] = [],
  lists: IDndLists
): IDndList | undefined => {
  return Object.values(lists).find((list) => {
    const { dataTags: listDataTags = [] } = list;

    const listDataTagsWithPrefix = listDataTags.map((tag) => {
      return parseTag(scopedPermutationId, tag);
    });

    const listDataTagsSorted = listDataTagsWithPrefix.sort();
    const itemDataTagsSorted = dataTags.sort();

    const sameTags = listDataTagsSorted.every((tag) => itemDataTagsSorted.includes(tag));

    if (sameTags) {
      return true;
    }

    const isOther = listDataTags.includes('$other');

    if (isOther) {
      return noMatches(lists, scopedPermutationId, dataTags);
    }

    return false;
  });
};

type DataTagCommand = {
  type: 'add' | 'remove';
  tag: string;
};

export const getNewDataTagsByList = (
  scopedPermutationId: string,
  currentDataTags: string[],
  lists: IDndList[],
  listId: string
) => {
  let output: string[] = [...currentDataTags];
  const commands: DataTagCommand[] = [];
  const list = lists.find((list) => list.id === listId);
  const otherLists = lists.filter((list) => list.id !== listId);

  if (!list) {
    return output;
  }

  (list.dataTags ?? []).forEach((tag) => {
    commands.push({ type: 'add', tag });
  });

  otherLists.forEach((list) => {
    (list.dataTags ?? []).forEach((tag) => {
      commands.push({ type: 'remove', tag });
    });
  });

  commands
    .map((c) => parseCommand(c, scopedPermutationId))
    .forEach((c) => {
      const { type, tag } = c;

      switch (type) {
        case 'add':
          output.push(tag);
          break;
        case 'remove':
          output = output.filter((t) => t !== tag);
          break;
      }
    });

  return uniq(output.sort());
};

export const noMatches = (lists: IDndLists, scopedPermutationId: string, tags: string[]) => {
  const allTags: string[] = [];

  Object.values(lists).forEach((list) => {
    (list.dataTags ?? []).forEach((tag) => {
      allTags.push(parseTag(scopedPermutationId, tag));
    });
  });

  return !allTags.some((t) => tags.includes(t));
};

export const parseCommand = (command: DataTagCommand, scopedPermutationId: string) => {
  const { tag } = command;

  return {
    ...command,
    tag: parseTag(scopedPermutationId, tag),
  };
};

export const parseTag = (scopedPermutationId: string, tag: string) => {
  if (tag in specialTags) {
    return (specialTags as any)[tag]({
      scopedPermutationId,
      tag,
    }) as string;
  }

  return `${scopedPermutationId}-${tag}`;
};

type ParseTagParams = {
  scopedPermutationId: string;
  tag: string;
};

const specialTags = {
  $other: (params: ParseTagParams) => '',
  $today: (params: ParseTagParams) => params.scopedPermutationId + '-' + today(), // prettier-ignore
  $tomorrow: (params: ParseTagParams) => params.scopedPermutationId + '-' + tomorrow(), // prettier-ignore
  $yesterday: (params: ParseTagParams) => params.scopedPermutationId + '-' + yesterday(), // prettier-ignore
};

const lz = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${lz(date.getMonth() + 1)}-${lz(date.getDate())}`;
};

const today = () => {
  const date = new Date();
  return formatDate(date);
};

const tomorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return formatDate(date);
};

const yesterday = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return formatDate(date);
};
