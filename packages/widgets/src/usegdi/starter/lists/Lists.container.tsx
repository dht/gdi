import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Lists } from './Lists';
import { useSagas } from '../../../helpers/useSaga';

export type ListsContainerProps = {
  data: any;
};

export function ListsContainer(props: ListsContainerProps) {
  const dispatch = useDispatch();
  const lists = useSelector(selectors.base.$listItems);

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

  return <Lists data={lists} callbacks={callbacks} />;
}

export default ListsContainer;
