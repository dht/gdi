import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { useBlackBk } from '@gdi/ui';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import BitTimelineContainer from '../bit-builder/_parts/BitTimeline/BitTimeline.container';
import DotTimelineContainer from '../bit-builder/_parts/DotTimeline/DotTimeline.container';
import DynamicTimelineContainer from '../bit-builder/_parts/DynamicTimeline/DynamicTimeline.container';
import { FourthWall } from './FourthWall';

export type FourthWallContainerProps = {};

export function FourthWallContainer(_props: FourthWallContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const bit = useSelector(selectors.base.$bit);
  const sceneState = useSelector(selectors.raw.$rawSceneState);
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);
  const waveTracks = useSelector(selectors.wave.$tracks);
  const waveOptions = useSelector(selectors.wave.$options);
  const elementLabels = useSelector(selectors.base.$elementLabels);
  const { bitId, dotId } = currentIds;

  useBlackBk();

  useSagas([
    'widgets.fourthWall', //
    'widgets.3d.selection',
    'widgets.scene.bootstrap',
    'widgets.clip.bootstrap',
    'widgets.player.audio',
    'widgets.player.animation',
    'widgets.player.bits',
    'widgets.player.bootstrap',
    'widgets.player.characters',
    'widgets.player.effects',
    'widgets.player.playback',
    'widgets.player.subtitles',
    'widgets.player.time',
    'widgets.player.preloadImages',
  ]);

  const callbacks = useMemo(
    () => ({
      onAudio: (verb: string) => {
        dispatch({
          type: 'AUDIO',
          verb,
          id: bitId,
        });
      },
      onBit: (verb: string) => {
        dispatch({
          type: 'BIT',
          verb,
          id: bitId,
        });
      },
      onToolbox: (commandId: string) => {
        dispatch({
          type: 'TOOLBOX',
          verb: commandId,
        });
      },
    }),
    []
  );

  return (
    <FourthWall
      bit={bit}
      dotId={dotId}
      waveTracks={waveTracks}
      waveOptions={waveOptions}
      elementLabels={elementLabels}
      callbacks={callbacks}
      timelines={[DynamicTimelineContainer, BitTimelineContainer, DotTimelineContainer]}
      state={sceneState}
      hideBase={true}
    />
  );
}

export default FourthWallContainer;
