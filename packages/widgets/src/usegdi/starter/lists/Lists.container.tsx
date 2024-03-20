import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useCustomEvent } from '@gdi/ui';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import { multi } from './_multi';
import { Lists } from './Lists';

export type ListsContainerProps = {};

export function ListsContainer(_props: ListsContainerProps) {
  const dispatch = useDispatch();
  const lists = useSelector(selectors.base.$lists);

  useSagas([
    'widgets.lists', //
    'widgets.list',
  ]);

  const callbacks = useMemo(
    () => ({
      onDrillDown: (id: string) => {
        dispatch({
          type: 'LISTS',
          verb: 'drillDown',
          id,
        });
      },
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'LIST',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'LIST',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  useCustomEvent(
    'multi/item/drillDown',
    (ev: any) => {
      const { id } = ev;
      callbacks.onDrillDown(id);
    },
    [callbacks]
  );

  return <Lists data={lists} multi={multi} callbacks={callbacks} />;
}

export default ListsContainer;
