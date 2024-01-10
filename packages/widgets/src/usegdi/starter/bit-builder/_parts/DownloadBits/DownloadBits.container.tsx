import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import React, { useMemo } from 'react';
import { DownloadBits } from './DownloadBits';
import { downloadJson } from 'shared-base';

export type DownloadBitsContainerProps = {};

export function DownloadBitsContainer(_props: DownloadBitsContainerProps) {
  const dispatch = useDispatch();
  const bits = useSelector(selectors.raw.$rawSceneBits);
  const dots = useSelector(selectors.raw.$rawSceneDots);

  const callbacks = useMemo(
    () => ({
      onDownload: () => {
        downloadJson('scene.json', { bits, dots });
      },
    }),
    [bits, dots]
  );

  return <DownloadBits onDownload={callbacks.onDownload} />;
}

export default DownloadBitsContainer;
