import { createContext as createContextOriginal, useMemo } from 'react';
import { useMount, useSetState } from 'react-use';
import { IContext, IContextCallbacks, IContextProviderProps, IContextState, Json } from '../types';

export function createContext<S extends IContextState, C extends IContextCallbacks>(
  initialState: S,
  extraCallbacks: Partial<C>
) {
  return createContextOriginal<IContext<S, C>>({
    state: initialState as any,
    callbacks: {
      onAction: (verb: string, _params?: Json) => {},
      ...extraCallbacks,
    },
    patchState: (change: Partial<S>) => {},
  });
}

export function createProvider<S extends IContextState, C extends IContextCallbacks>(
  initialState: S,
  extraCallbacks: Partial<C>,
  context: React.Context<IContext<S, C>>
) {
  return (props: IContextProviderProps<S, C>) => {
    const { callbacks: inCallbacks, state: stateFromProps = {} } = props;
    const [state, patchState] = useSetState<S>(initialState);

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
        ...extraCallbacks,
      }),
      [state, extraCallbacks]
    );

    const cValue = useMemo(
      () => ({
        state,
        patchState,
        callbacks,
      }),
      [state, callbacks]
    );

    const Cmp = context.Provider as any;

    return <Cmp value={cValue}>{props.children}</Cmp>;
  };
}
