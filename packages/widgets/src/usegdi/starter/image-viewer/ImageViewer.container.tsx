import { selectors, useSelector } from '@gdi/store-base';
import SavePanelContainer from '../save-panel/SavePanel.container';
import ImageViewer from './ImageViewer';

export type ImageViewerContainerProps = {};

export function ImageViewerContainer(_props: ImageViewerContainerProps) {
  const appState = useSelector(selectors.raw.$rawAppState);
  const promptOriginal = useSelector(selectors.raw.$rawAppState).promptOriginal;

  const { imageUrl, suggestedFileName } = appState;
  const disabled = imageUrl === '';

  function renderSavePanel() {
    if (!imageUrl) {
      return null;
    }
    return (
      <SavePanelContainer
        defaultValue={suggestedFileName}
        what='image'
        verb='saveImage'
        disabled={disabled}
      />
    );
  }

  return (
    <ImageViewer imageUrl={imageUrl} prompt={promptOriginal}>
      {renderSavePanel()}
    </ImageViewer>
  );
}

export default ImageViewerContainer;
