import { createContext as createContextOriginal, useMemo } from 'react';
import { useMount, useSetState } from 'react-use';
import { IContext, IContextCallbacks, IContextProviderProps, IContextState, Json } from '../types';
import { get, set } from 'lodash';
import { useFuzzySearchQ } from '../hooks/useFuzzySearch';

export function createContext<S extends IContextState, C extends IContextCallbacks>(
  initialState: S,
  extraCallbacks: Partial<C>
) {
  return createContextOriginal<IContext<S, C>>({
    state: initialState as any,
    callbacks: {
      onAction: (verb: string, _params?: Json) => {},
      onItemAction: (id: string, verb: string, _params?: Json) => {},
      onSearch: (q: string) => {},
      ...extraCallbacks,
    },
    patchState: (change: Partial<S>) => {},
    data: [],
  });
}

export function createProvider<S extends IContextState, C extends IContextCallbacks>(
  initialState: S,
  extraCallbacks: Partial<C>,
  context: React.Context<IContext<S, C>>
) {
  return (props: IContextProviderProps<S, C>) => {
    const { callbacks: inCallbacks, state: stateFromProps = {}, data } = props;
    const [state, patchState] = useSetState<S>(initialState);
    const { q } = state;

    useMount(() => {
      patchState({
        isReady: true,
        ...stateFromProps,
      } as any);
    });

    const callbacks = useMemo(
      () => ({
        onAction: (verb: any, params?: Json): any => {
          inCallbacks.onAction(verb, params);
        },
        onItemAction: (id: string, verb: any, params: Json = {}): any => {
          inCallbacks.onItemAction(id, verb, params);

          const items = get(state, 'data');
          if (!items) return;

          const index = items.findIndex((item: any) => item.id === id);
          const key = Object.keys(params)[0];

          if (index < 0 || !key) return;

          switch (verb) {
            case 'edit':
              set(state, `data[${index}].${key}`, params[key]);
              break;
            case 'delete':
              items.splice(index, 1);
              break;
          }
        },
        onSearch: (q: string) => {
          patchState({ q } as any);
        },
        ...extraCallbacks,
      }),
      [state, extraCallbacks]
    );

    const filteredData = useFuzzySearchQ(data, ['name', 'email', 'phone', 'context', 'tags'], q);

    const cValue = useMemo(
      () => ({
        state,
        patchState,
        callbacks,
        data: filteredData,
      }),
      [state, callbacks, filteredData]
    );

    const Cmp = context.Provider as any;

    return <Cmp value={cValue}>{props.children}</Cmp>;
  };
}
