import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { AssetPreview } from './AssetPreview';
import { useMount } from 'react-use';

export type AssetPreviewContainerProps = {};

export function AssetPreviewContainer(_props: AssetPreviewContainerProps) {
  const dispatch = useDispatch();
  const asset = useSelector(selectors.base.$asset);

  const callbacks = useMemo(
    () => ({
      onClose: () => {
        dispatch({
          type: 'ASSET_LIST',
          verb: 'closeViewer',
        });
      },
    }),
    []
  );

  return <AssetPreview asset={asset} callbacks={callbacks} />;
}

export default AssetPreviewContainer;
