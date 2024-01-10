import { useMemo, useState } from 'react';
import {
  IBucketDefinition,
  IBucketsConfig,
  IBucketsPermutation,
  IDndItems,
  IDndLists,
} from '../Trello.types';
import { getListByDataTags } from '../_utils/lists';
import { Json } from '../../../types';

export function usePermutations(
  config: IBucketsConfig,
  permutations: IBucketsPermutation[],
  permutationId: string,
  data: Json[]
) {
  const permutation = useMemo(
    () => permutations.find((p) => p.id === permutationId),
    [permutations, permutationId]
  );

  const { buckets = [] } = permutation ?? {};
  const scopedPermutationId = `${config.id}-${permutationId}`;

  const lists = useMemo(() => {
    return buckets.reduce((acc: Json, b: IBucketDefinition, index: number) => {
      const { id, title, dataTags } = b;

      acc[b.id] = {
        id,
        title,
        dataTags,
        order: index,
      };
      return acc;
    }, {} as Json);
  }, [buckets]);

  const items = useMemo(() => {
    return data.reduce((acc, item, index) => {
      const { id, order: orderAll = {} } = item;

      const title = item[config.titleFieldId];
      const list = getListByDataTags(scopedPermutationId, item.dataTags, lists);

      const listId = list?.id ?? null;

      const order = orderAll[scopedPermutationId] ?? {
        [scopedPermutationId]: index,
      };

      acc[id] = {
        id,
        ...item,
        title,
        listId,
        order,
        color: 'purple',
      };
      return acc;
    }, {} as Json);
  }, [buckets, data]);

  return [lists, items] as [IDndLists, IDndItems];
}
