import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { PlayerLog, useBlackBk } from '@gdi/ui';
import { CurrentIds } from 'isokit2';
import { useMemo } from 'react';
import { useKey } from 'react-use';
import { useSagas } from '../../../helpers/useSaga';
import { SceneModalsContainer } from '../scene-modals/SceneModals.container';
import { BitBuilder } from './BitBuilder';
import BitLayerContainer from './_parts/BitLayer/BitLayer.container';
import BitTimelineContainer from './_parts/BitTimeline/BitTimeline.container';
import CopyClipContainer from './_parts/CopyClip/CopyClip.container';
import DotTimelineContainer from './_parts/DotTimeline/DotTimeline.container';
import DownloadBitsContainer from './_parts/DownloadBits/DownloadBits.container';
import DynamicTimelineContainer from './_parts/DynamicTimeline/DynamicTimeline.container';
import MakeKeyframeContainer from './_parts/MakeKeyframe/MakeKeyframe.container';
import BigPlayButtonContainer from './_parts/BigPlayButton/BigPlayButton.container';
import { getBoolean } from 'shared-base';

export type BitBuilderContainerProps = {};

export function BitBuilderContainer(_props: BitBuilderContainerProps) {
  const dispatch = useDispatch();
  const bit = useSelector(selectors.base.$bit);
  const sceneState = useSelector(selectors.raw.$rawSceneState);
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);
  const waveTracks = useSelector(selectors.wave.$tracks);
  const waveOptions = useSelector(selectors.wave.$options);
  const elementLabels = useSelector(selectors.base.$elementLabels);

  const { bitId, dotId } = currentIds;

  const hideBase = getBoolean('HIDE_GRID', true);

  useSagas([
    'widgets.scene.bootstrap',
    'widgets.3d.grid',
    // 'widgets.3d.manual',
    'widgets.3d.selection',
    'widgets.3d.toolbox',
    'widgets.player.audio',
    'widgets.player.animation',
    'widgets.player.effects',
    'widgets.player.playback',
    'widgets.player.time',
    'widgets.player.preloadImages',
    'widgets.clip.audio',
    'widgets.clip.bootstrap',
    'widgets.clip.bits',
    'widgets.clip.dots',
    'widgets.clip.effects',
    'widgets.clip.elements',
    // 'widgets.clip.live',
    'widgets.clip.keys',
    'widgets.clip.keyframes',
    'widgets.clip.position.camera',
    'widgets.clip.position.mesh',
    'widgets.clip.save',
  ]);

  useBlackBk();

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
    [bitId]
  );

  useKey(
    't',
    (ev) => {
      if (ev.ctrlKey) {
        callbacks.onBit('split');
      }
    },
    {},
    [callbacks]
  );

  return (
    <BitBuilder
      bit={bit}
      dotId={dotId}
      waveTracks={waveTracks}
      waveOptions={waveOptions}
      elementLabels={elementLabels}
      hideBase={hideBase}
      callbacks={callbacks}
      timelines={[DynamicTimelineContainer, BitTimelineContainer, DotTimelineContainer]}
      state={sceneState}
    >
      <SceneModalsContainer />
      <MakeKeyframeContainer />
      <BitLayerContainer />
      <PlayerLog />
      <CurrentIds data={currentIds} />
      <DownloadBitsContainer />
      <CopyClipContainer />
      <BigPlayButtonContainer />
    </BitBuilder>
  );
}

export default BitBuilderContainer;
