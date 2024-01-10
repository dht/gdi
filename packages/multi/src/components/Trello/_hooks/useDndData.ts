import { useMemo, useReducer } from 'react';
import { combineReducers } from 'redux';
import { DndCallbacksOuter } from '../_context/Dnd.context';
import { guid4 } from 'shared-base';
import { IDndData, IDndItems, IDndLists } from '../Trello.types';
import { generateActionsForStore, generateReducersForStore } from 'redux-store-generator';

export function useDndData(data: IDndData) {
  const actions = useMemo(() => {
    return generateActionsForStore<IDndData>(data);
  }, []);

  const reducers = useMemo(() => {
    const root = generateReducersForStore<IDndData>(data);
    return combineReducers(root);
  }, []) as any;

  const root = useReducer(reducers, data);
  const state = root[0] as IDndData;
  const dispatch = root[1] as any;

  const callbacks = useMemo(
    () => ({
      onMove: (itemId: string, destinationListId: string, order: number) => {
        dispatch(
          actions.items.patch(itemId, {
            listId: destinationListId,
            order,
          })
        );
      },
      onEdit: (itemId: string, value: string) => {
        dispatch(
          actions.items.patch(itemId, {
            title: value,
          })
        );
      },
      onNew: (listId: string, value: string, order: number) => {
        const id = guid4();
        dispatch(
          actions.items.set(id, {
            id,
            title: value,
            order,
            listId,
          })
        );
      },
      onDelete: (itemId: string) => {
        dispatch(actions.items.delete(itemId));
        return Promise.resolve(true);
      },
      onEditList: (listId: string, newValue: string) => {
        dispatch(actions.lists.patch(listId, { title: newValue }));
      },
    }),
    []
  );

  return [state.lists, state.items, callbacks] as [IDndLists, IDndItems, DndCallbacksOuter];
}
