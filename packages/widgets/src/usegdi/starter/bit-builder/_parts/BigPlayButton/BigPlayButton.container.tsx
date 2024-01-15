import { useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-base';
import { selectors as selectorsIso } from '@gdi/store-iso';
import { isMobile } from '@gdi/ui';
import { invokeEvent } from 'shared-base';
import { BigPlayButton } from './BigPlayButton';

export type BigPlayButtonContainerProps = {};

export function BigPlayButtonContainer(_props: BigPlayButtonContainerProps) {
  const state = useSelector(selectors.raw.$rawAppState);
  const sceneState = useSelector(selectorsIso.raw.$rawSceneState);

  const { boardDbPath } = state;

  function onPlay() {
    invokeEvent('waveform/play');
  }

  if (sceneState.isPlaying) {
    return null;
  }

  if (!isMobile() && !boardDbPath) {
    return null;
  }

  return <BigPlayButton onPlay={onPlay} />;
}

export default BigPlayButtonContainer;
