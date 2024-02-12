import { useDispatch, useSelector } from '@gdi/store-base';
import { actions, selectors } from '@gdi/store-iso';
import { useBlackBk } from '@gdi/ui';
import { useEffect, useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import { ScenePlayer } from './ScenePlayer';
import BitLayerContainer from '../bit-builder/_parts/BitLayer/BitLayer.container';

export type ScenePlayerContainerProps = {};

export function ScenePlayerContainer(_props: ScenePlayerContainerProps) {
  const dispatch = useDispatch();
  const bits = useSelector(selectors.base.$bits);
  const sceneState = useSelector(selectors.raw.$rawSceneState);
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);
  const waveTracks = useSelector(selectors.wave.$tracks);
  const waveOptions = useSelector(selectors.wave.$options);
  const { bitId } = currentIds;

  useSagas([
    'widgets.player.audio',
    'widgets.player.animation',
    'widgets.player.bits',
    'widgets.player.bootstrap',
    'widgets.player.effects',
    'widgets.player.playback',
    'widgets.player.time',
    'widgets.player.preloadImages',
  ]);

  const callbacks = useMemo(
    () => ({
      onBit: (verb: string, id: string, data?: Json) => {
        dispatch({
          type: 'BIT',
          verb,
          id,
          payload: data,
        });
      },
      onToolbox: (commandId: string) => {
        dispatch({
          type: 'TOOLBOX',
          verb: commandId,
        });
      },
    }),
    [bitId]
  );

  return (
    <ScenePlayer
      bits={bits as any}
      bitId={bitId}
      cue={sceneState.cue}
      waveTracks={waveTracks}
      waveOptions={waveOptions as any}
      isAudioReady={sceneState.isAudioReady}
      freeMove={sceneState.freeMove}
      isLoading={sceneState.isLoading}
      isPlaying={sceneState.isPlaying}
      timeline={{} as any}
      callbacks={callbacks}
    >
      <BitLayerContainer absolute />
    </ScenePlayer>
  );
}

export default ScenePlayerContainer;
