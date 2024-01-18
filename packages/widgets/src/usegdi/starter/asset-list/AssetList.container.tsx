import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { useKey } from 'react-use';
import { AssetList } from './AssetList';
import { useSaga } from '../../../helpers/useSaga';

export type AssetListContainerProps = {
  listId: string;
};

export function AssetListContainer(props: AssetListContainerProps) {
  const { listId } = props;
  const dispatch = useDispatch();
  const assets = useSelector(selectors.assets.$byList);
  const appState = useSelector(selectors.raw.$rawAppState);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);

  const { isFocusLeft } = appState;
  const isFocused = listId === (isFocusLeft ? 'left' : 'right');
  const root = (currentIds as any)[`${listId}Id`];

  useSaga('widgets.assetsList', listId === 'left');

  const callbacks = useMemo(
    () => ({
      onClick: () => {
        dispatch(actions.appState.patch({ isFocusLeft: listId === 'left' }));
      },
      onDrillDown: (asset: Json) => {
        dispatch({
          type: 'ASSET_LIST',
          verb: 'drillDown',
          id: listId,
          payload: { asset },
        });
      },
      onDrillUp: () => {
        dispatch({
          type: 'ASSET_LIST',
          verb: 'drillUp',
          id: listId,
        });
      },
      onPreview: (asset: Json) => {
        dispatch({
          type: 'ASSET_LIST',
          verb: 'preview',
          id: listId,
          payload: { asset },
        });
      },
      onEscape: () => {
        dispatch({
          type: 'ASSET_LIST',
          verb: 'closeViewer',
          payload: {},
        });
      },
      onSwitchPanel: (ev: any) => {
        ev.preventDefault();

        dispatch({
          type: 'ASSET_LIST',
          verb: 'switchPanel',
          payload: {},
        });
      },
      onFunctionKey: (asset: Json, key: string, ev: any) => {
        dispatch({
          type: 'ASSET_LIST',
          verb: 'functionKey',
          payload: {
            asset,
            key,
            ev,
          },
        });
      },
    }),
    [listId]
  );

  useKey('Escape', callbacks.onEscape);
  useKey('Tab', callbacks.onSwitchPanel);

  return (
    <AssetList
      assets={(assets as any)[listId]}
      root={root}
      isFocused={isFocused}
      callbacks={callbacks}
    />
  );
}

export default AssetListContainer;
