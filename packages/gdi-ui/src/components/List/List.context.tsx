import { createContext, useEffect, useMemo } from 'react';
import { useSetState } from 'react-use';
import { useListData, useListNavigation, useListSearch, useListSelection } from './List.hooks';
import { IListContext, IListProviderProps, IListState, defaultListState } from './List.types';
import { nextSort } from './List.utils';

export const ListContext = createContext<IListContext>({
  state: defaultListState,
  patchState: () => {},
  callbacks: {
    onClick: (_id: string) => {},
    onSort: (_fieldName: string) => {},
    onPreview: (_asset: Json) => {},
    onDrillUp: () => {},
    onDrillDown: (_asset: Json) => {},
    onFunctionKey: (_asset: Json, _key: string, _ev: any) => {},
  },
  data: [],
});

export const ListProvider = (props: IListProviderProps) => {
  const { root, data: inData, isFocused } = props;

  const [state, patchState] = useSetState<IListState>({
    ...defaultListState,
  });

  const { sort, q, focusedId } = state;

  const data = useListData(inData, sort, q);

  useEffect(() => {}, [root, data, focusedId]);

  const callbacks = useMemo(
    () => ({
      onClick: (id: string) => {
        patchState({ focusedId: id });
      },
      onSort: (fieldName: string) => {
        const sort = nextSort(state.sort, fieldName);
        patchState({ sort });
      },
      onPreview: (asset: Json) => {
        props.onPreview(asset);
      },
      onDrillUp: () => {
        props.onDrillUp();
      },
      onDrillDown: (asset: Json) => {
        props.onDrillDown(asset);
      },
      onFunctionKey: (asset: Json, key: string, ev: any) => {
        props.onFunctionKey(asset, key, ev);
      },
      onAction: (key: string) => {
        const asset = data.find((asset) => asset.id === focusedId);
        props.onFunctionKey(asset!, key, {} as any);
      },
    }),
    [state]
  );
  const params = { state, patchState, isFocused, root };
  useListSelection(data, params);
  useListSearch(data, params);
  useListNavigation(data, params, callbacks);

  const cValue = useMemo(
    () => ({
      state,
      patchState,
      callbacks,
      data: data,
    }),
    [state, callbacks, data]
  );

  return <ListContext.Provider value={cValue}>{props.children}</ListContext.Provider>;
};
