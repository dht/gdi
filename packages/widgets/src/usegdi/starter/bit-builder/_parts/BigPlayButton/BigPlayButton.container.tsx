import { useSelector } from '@gdi/store-base';
import { selectors as selectorsIso } from '@gdi/store-iso';
import { invokeEvent } from 'shared-base';
import { BigPlayButton } from './BigPlayButton';

export type BigPlayButtonContainerProps = {};

export function BigPlayButtonContainer(_props: BigPlayButtonContainerProps) {
  const sceneState = useSelector(selectorsIso.raw.$rawSceneState);

  function onPlay() {
    invokeEvent('waveform/play');
  }

  if (sceneState.isPlaying) {
    return null;
  }

  return <BigPlayButton onPlay={onPlay} />;
}

export default BigPlayButtonContainer;
