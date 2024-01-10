import type { IContextBarItems } from '@gdi/ui';
import { ContextBar } from '@gdi/ui';
import { IWidgets } from 'igrid';
import { useCallback, useReducer } from 'react';
import { generateActionsForStore, generateReducersForStore } from 'redux-store-generator';
import { Json } from '../types';

export type ContextBarProps = {
  contextBarItems: IContextBarItems;
  widgetLibrary: IWidgets;
};

export enum PopoiState {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  FLOATING = 'FLOATING',
}

const popois: IPopois = {
  '1': {
    id: '1',
    title: '',
    state: PopoiState.OPEN,
  },
};

const reducers = generateReducersForStore({ popois });
const actions = generateActionsForStore({ popois }).popois;
delete popois['1'];

let id = 0;

export function ContextBarContainer(props: ContextBarProps) {
  const { contextBarItems, widgetLibrary } = props;
  const isDarkMode = true;
  const [state, dispatch]: [any, any] = useReducer<any>(reducers.popois, popois);

  const onAction = useCallback(
    (payload: Json) => {
      const { contextBarItemId } = payload;

      const contextBarItemDefinition = contextBarItems.find((item) => item.id === contextBarItemId);

      if (!contextBarItemDefinition) {
        return;
      }

      const { label, widgetId, responsive } = contextBarItemDefinition;
      const existingWidget = Object.values(state).find(
        (item: any) => item.widgetId === widgetId
      ) as IPopoi;

      if (existingWidget) {
        const currentState = existingWidget.state;
        const nextState = currentState === PopoiState.CLOSED ? PopoiState.OPEN : PopoiState.CLOSED; // prettier-ignore
        dispatch(actions.patch(existingWidget.id, { state: nextState }));
        return;
      }

      id++;

      dispatch(
        actions.set(String(id), {
          id: String(id),
          widgetId,
          order: id,
          title: label,
          state: responsive ? PopoiState.OPEN : PopoiState.FLOATING,
        })
      );
    },
    [state]
  );

  function renderWidget(widgetId: string) {
    const widget = widgetLibrary[widgetId];

    if (!widget) {
      console.log(`could not find widget "${widgetId}"`);
      return null;
    }

    return widget.component!();
  }

  // useCustomEvent('ADD_ITEM_TO_CONTEXT_BAR', onAction);

  function onClose(item: IPopoi) {
    const action = actions.patch(item.id, { state: PopoiState.CLOSED });
    dispatch(action);
  }

  function onOpen(item: IPopoi) {
    const action = actions.patch(item.id, { state: PopoiState.OPEN });
    dispatch(action);
  }

  function onMaximize(item: IPopoi) {
    const action = actions.patch(item.id, { state: PopoiState.FLOATING });
    dispatch(action);
  }

  function onExit(item: IPopoi) {
    const action = actions.delete(item.id);
    dispatch(action);
    return false;
  }

  return (
    <ContextBar
      items={state as Record<string, IPopoi>}
      onClose={onClose}
      onOpen={onOpen}
      onMaximize={onMaximize}
      onExit={onExit}
      renderWidget={renderWidget}
      isDarkMode={isDarkMode}
    />
  );
}

export type IPopoi = {
  id: string;
  order?: number;
  state: PopoiState;
  title: string;
  iconUrl?: string;
  widgetId?: string;
};

export type IPopois = Record<string, IPopoi>;

export default ContextBarContainer;
