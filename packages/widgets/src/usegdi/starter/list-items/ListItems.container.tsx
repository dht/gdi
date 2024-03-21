import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ListItems } from './ListItems';
import { useSagas } from '../../../helpers/useSaga';

export type ListItemsContainerProps = {
  data: any;
};

export function ListItemsContainer(props: ListItemsContainerProps) {
  const dispatch = useDispatch();
  const listItems = useSelector(selectors.md.$listItems);

  useSagas([
    'widgets.listItems', //
    'widgets.listItem',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'LIST_ITEM',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'LIST_ITEM',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <ListItems data={listItems} callbacks={callbacks} />;
}

export default ListItemsContainer;
