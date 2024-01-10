import React, { useEffect, useMemo, useRef } from 'react';
import { createContext } from 'react';
import {
  IDndBox,
  IDndItem,
  IDndItems,
  IDndLists,
  IDndOptions,
  IDndPoint,
  IDndState,
} from '../Trello.types';
import { useArrows, useDelete, useEnter } from '../_hooks';
import { useSetState } from 'react-use';
import {
  getCurrentNextPrevious,
  getNextSelectedIdForDeleted,
  getOrderForMove,
  getOrderForNew,
  getSiblingItemForKeyboard,
  ListAndItemId,
  ListAndOrder,
  nudgeHorizontal,
  nudgeVertical,
} from '../_utils/nudgeAndMove';
import { useTheme } from 'styled-components';

export type DndCallbacksOuter = {
  onMove: (itemId: string, destinationListId: string, order: number) => void;
  onEdit: (itemId: string, value: string) => void;
  onNew: (listId: string, value: string, order: number) => void;
  onDelete: (itemId: string) => Promise<boolean>;
  onEditList: (listId: string, value: string) => void;
  onSelect: (itemId: string) => void;
};

type DndContextProps = {
  id: string;
  options: IDndOptions;
  lists: IDndLists;
  items: IDndItems;
  callbacks: DndCallbacksOuter;
};

type IDndContext = {
  patchState: (change: Partial<IDndState>) => void;
  options: IDndOptions;
  state: IDndState;
  callbacks: DndCallbacks;
};

const initialValue: IDndContext = {
  patchState: () => {},
  state: {
    selectedItemId: '',
    movableItemId: '',
    editableItemId: '',
    destinationIndex: 0,
    hoverListId: '',
    movableListId: '',
    selectedListId: '',
    destinationListId: '',
    movingBox: { x: 0, y: 0, width: 0, height: 0 },
    startPoint: { x: 0, y: 0 },
    containerPosition: { x: 0, y: 0 },
    editableNewId: '',
    growMirror: false,
  },
  options: {},
  callbacks: {
    onMouseOver: (params: MouseItemParams) => {},
    onMouseOverList: (params: MouseItemParams) => {},
    onMoveStart: (params: MouseItemParams) => {},
    onMoveEnd: (params: MouseItemParams) => {},
    onSelect: (params: MouseItemParams) => {},
    onNewStart: (listId: string) => {},
    onNewDone: (listId: string, value: string) => {},
    onNewCancel: (listId: string) => {},
    onEditStart: (itemId: string) => {},
    onEditDone: (itemId: string, newValue: string) => {},
    onEditCancel: (itemId: string) => {},
    onEditList: (listId: string, value: string) => {},
    onDelete: (itemId: string) => {},
    onArrow: (direction: string) => {},
  },
};

export const DndContext = createContext<IDndContext>(initialValue);

export const DndContextProvider = (props: WithChildren<DndContextProps>) => {
  const timeout = useRef<any>();
  const { options, items, lists, callbacks } = props;

  const configValue = useMemo(
    () => ({
      ...initialValue,
      options,
    }),
    []
  );

  const [state, patchState] = useSetState<IDndState>({
    ...initialValue.state,
  });

  useEffect(() => {
    const { selectedItemId } = state;

    if (selectedItemId.match(/^NEW/)) {
      return;
    }

    callbacks.onSelect(selectedItemId);
  }, [state.selectedItemId]);

  const callbacksDnd = useMemo(
    () => ({
      onMouseOver: (params: MouseItemParams) => {
        patchState({
          destinationIndex: params.index,
        });
      },
      onMouseOverList: (params: MouseItemParams) => {
        patchState({
          destinationListId: params.listId,
        });
      },
      onMoveStart: (params: MouseItemParams) => {
        patchState({
          movableItemId: params.itemId,
          startPoint: params.point,
          movingBox: params.box,
        });
      },
      onMoveEnd: (_params: MouseItemParams) => {
        const order = getOrderForMove(
          items,
          state.movableItemId,
          state.destinationListId,
          state.destinationIndex
        );

        if (order === null || isNaN(order)) {
          return;
        }

        callbacks.onMove(state.movableItemId, state.destinationListId, order);

        patchState({
          movableItemId: '',
          startPoint: { x: 0, y: 0 },
          movingBox: { x: 0, y: 0, width: 0, height: 0 },
        });
      },
      onSelect: (params: MouseItemParams) => {
        if (!params.itemId?.match(/^NEW_/)) {
          callbacksDnd.onMoveStart(params);
        }

        timeout.current = setTimeout(() => {
          patchState({
            selectedItemId: params.itemId,
          });
        }, 10);
      },
      onEditStart: (itemId: string) => {
        patchState({ editableItemId: itemId });
      },
      onEditDone: (itemId: string, newValue: string) => {
        patchState({ editableItemId: '' });

        setTimeout(() => {
          patchState({ editableItemId: '' });
        });
        callbacks.onEdit(itemId, newValue);
      },
      onEditList: (listId: string, newValue: string) => {
        callbacks.onEditList(listId, newValue);
      },
      onEditCancel: (_itemId: string) => {
        patchState({ editableItemId: '' });
      },
      onNewStart: (listId: string) => {
        patchState({ editableNewId: `NEW_${listId}` });
      },
      onNewDone: (listId: string, value: string) => {
        patchState({ editableNewId: '' });
        const order = getOrderForNew(items, listId);

        callbacks.onNew(listId, value, order);
      },
      onNewCancel: (_listId: string) => {
        patchState({ editableNewId: '' });
      },
      onDelete: async (itemId: string) => {
        const wasDeleted = await callbacks.onDelete(itemId);

        if (wasDeleted) {
          const selectedId = getNextSelectedIdForDeleted(items, itemId);

          if (selectedId) {
            patchState({ selectedItemId: selectedId });
          }
        }
      },
      onArrow: (direction: string) => {
        const previousNext = getCurrentNextPrevious(items, state.selectedItemId);

        const newKey = `NEW_${previousNext.listId}`;
        let listAndItem: ListAndItemId | null;

        switch (direction) {
          case 'ArrowUp':
            if (!previousNext.previous) {
              return;
            }
            patchState({
              selectedItemId: previousNext.previous.id,
            });
            break;
          case 'ArrowDown':
            patchState({
              selectedItemId: previousNext.next?.id || newKey,
            });

            break;
          case 'ArrowRight':
          case 'ArrowLeft':
            const d = direction === 'ArrowRight' ? 1 : -1;

            listAndItem = getSiblingItemForKeyboard(lists, items, state.selectedItemId, d);

            if (!listAndItem) {
              return;
            }

            patchState({
              selectedItemId: listAndItem.itemId,
            });
            break;
        }
      },
      onNudge: (direction: string) => {
        let listAndOrder: ListAndOrder | null;

        switch (direction) {
          case 'ArrowUp':
          case 'ArrowDown':
            listAndOrder = nudgeVertical(items, state.selectedItemId, direction === 'ArrowUp');

            if (!listAndOrder) {
              return;
            }

            callbacks.onMove(state.selectedItemId, listAndOrder.listId, listAndOrder.order);

            patchState({
              movableItemId: '',
              startPoint: { x: 0, y: 0 },
              movingBox: { x: 0, y: 0, width: 0, height: 0 },
            });

            break;

          case 'ArrowRight':
          case 'ArrowLeft':
            const d = direction === 'ArrowRight' ? 1 : -1;

            listAndOrder = nudgeHorizontal(lists, items, state.selectedItemId, isRtl ? -d : d);

            if (!listAndOrder) {
              return;
            }

            callbacks.onMove(state.selectedItemId, listAndOrder.listId, listAndOrder.order);

            patchState({
              movableItemId: '',
              startPoint: { x: 0, y: 0 },
              movingBox: { x: 0, y: 0, width: 0, height: 0 },
            });

            break;
        }
      },
    }),
    [state]
  );

  useEffect(() => {
    clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    patchState({ growMirror: true });
  }, [state.destinationListId]);

  useEffect(() => {
    patchState({ growMirror: false });
  }, [state.destinationIndex]);

  useEnter(() => {
    if (!state.selectedItemId || state.editableItemId || state.editableNewId) {
      return;
    }
    callbacksDnd.onEditStart(state.selectedItemId);
  }, [state]);

  useArrows(
    (shortKey) => {
      if (!state.selectedItemId || state.editableItemId || state.editableNewId) {
        return;
      }

      if (shortKey.withAlt) {
        callbacksDnd.onNudge(shortKey.key);
      } else {
        callbacksDnd.onArrow(shortKey.key);
      }
    },
    [state]
  );

  useDelete(() => {
    if (!state.selectedItemId || state.editableItemId) {
      return;
    }

    callbacksDnd.onDelete(state.selectedItemId);
  }, [state]);

  return (
    <DndContext.Provider
      value={{
        ...configValue,
        state,
        patchState: patchState as any,
        callbacks: callbacksDnd,
      }}
    >
      {props.children}
    </DndContext.Provider>
  );
};

type WithChildren<T> = T & {
  children?: JSX.Element | JSX.Element[];
};

export type DndCallbacks = {
  onMouseOver: (params: MouseItemParams) => void;
  onMouseOverList: (params: MouseItemParams) => void;
  onMoveStart: (params: MouseItemParams) => void;
  onMoveEnd: (params: MouseItemParams) => void;
  onSelect: (params: MouseItemParams) => void;
  onNewStart: (listId: string) => void;
  onNewDone: (listId: string, value: string) => void;
  onNewCancel: (listId: string) => void;
  onEditStart: (itemId: string) => void;
  onEditDone: (itemId: string, newValue: string) => void;
  onEditCancel: (itemId: string) => void;
  onEditList: (listId: string, newValue: string) => void;
  onDelete: (itemId: string) => void;
  onArrow: (direction: string) => void;
  renderItem?: (item: IDndItem) => React.ReactNode;
};

type MouseEventParams = {
  ev: React.MouseEvent<HTMLDivElement>;
  point: IDndPoint;
  box?: IDndBox;
};

type MouseItemParams = MouseEventParams & {
  itemId?: string;
  listId?: string;
  index?: number;
};
