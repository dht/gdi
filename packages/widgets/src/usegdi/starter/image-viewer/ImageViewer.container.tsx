import { selectors, useSelector } from '@gdi/store-base';
import ImageViewer from './ImageViewer';
import { useMemo } from 'react';
import SavePanelContainer from '../save-panel/SavePanel.container';

export type ImageViewerContainerProps = {};

export function ImageViewerContainer(_props: ImageViewerContainerProps) {
  const imageUrl = useSelector(selectors.raw.$rawAppState).imageUrl;
  const promptOriginal = useSelector(selectors.raw.$rawAppState).promptOriginal;
  const disabled = imageUrl === '';

  const callbacks = useMemo(
    () => ({
      onSave: () => {},
    }),
    []
  );

  return (
    <ImageViewer imageUrl={imageUrl} prompt={promptOriginal} onSave={callbacks.onSave}>
      {imageUrl && <SavePanelContainer what='image' verb='saveImage' disabled={disabled} />}
    </ImageViewer>
  );
}

export default ImageViewerContainer;
