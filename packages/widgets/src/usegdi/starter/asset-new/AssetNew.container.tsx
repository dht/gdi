import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { AssetNew } from './AssetNew';

export type AssetNewContainerProps = {};

export function AssetNewContainer(_props: AssetNewContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onDrop: (acceptedFiles: File[]) => {
        dispatch({
          type: 'ASSET',
          verb: 'create',
          payload: acceptedFiles,
        });
      },
      onUpload: () => {
        dispatch({
          type: 'ASSET',
          verb: 'new',
        });
      },
    }),
    []
  );

  return <AssetNew tags={appState.tags} callbacks={callbacks} />;
}

export default AssetNewContainer;
