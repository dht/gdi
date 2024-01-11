import { useEffect, useReducer } from 'react';
import { useSetState } from 'react-use';
import { IHudItem, IVisibilityState, Json } from '../Hud.types';

export function useTimeline(items: IHudItem[] = []) {
  const [timers, patchTimers] = useSetState<Record<string, any>>({});
  const [visible, dispatch] = useReducer(allVisibility, {});

  useEffect(() => {
    items.forEach((frame) => {
      const { id, tsStart, tsEnd } = frame;

      let timer;

      timer = setTimeout(() => {
        dispatch({
          id: id,
          type: 'APPEAR',
        });
      }, tsStart);

      patchTimers({ [id + '_appear']: timer });

      timer = setTimeout(() => {
        dispatch({
          id: id,
          type: 'DISAPPEAR',
        });
      }, tsEnd);

      patchTimers({ [id + '_disappear']: timer });
    });

    return () => {
      Object.values(timers).forEach((timer: any) => {
        clearTimeout(timer);
      });
    };
  }, []);

  return visible as Record<string, IVisibilityState>;
}

export function itemVisibility(state: IVisibilityState, action: Json) {
  switch (action.type) {
    case 'APPEAR':
      return {
        ...state,
        isVisible: true,
      };
    case 'DISAPPEAR':
      return {
        ...state,
        isFadingOut: true,
      };
    default:
      return state;
  }
}

export function allVisibility(state: Record<string, IVisibilityState> = {}, action: Json) {
  const { id } = action;

  switch (action.type) {
    case 'APPEAR':
    case 'DISAPPEAR':
      return {
        ...state,
        [id]: itemVisibility(state[id], action),
      };
    default:
      return state;
  }
}
