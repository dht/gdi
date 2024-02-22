import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MusicPreview } from './MusicPreview';

export type MusicPreviewContainerProps = {};

export function MusicPreviewContainer(_props: MusicPreviewContainerProps) {
  const dispatch = useDispatch();
  const currentItem = useSelector(selectors.music.$currentItem);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <MusicPreview item={currentItem} />;
}

export default MusicPreviewContainer;
