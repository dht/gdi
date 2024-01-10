import { selectors } from '@gdi/store-base';
import { useMemo } from 'react';
import { useDispatch, useSelector } from '@gdi/store-base';
import Playback from './Playback';

export type PlaybackContainerProps = {};

export function PlaybackContainer(_props: PlaybackContainerProps) {
  const dispatch = useDispatch();
  const playbackInfo = useSelector(selectors.base.$playbackInfo);

  const callbacks = useMemo(
    () => ({
      onPlaybackAction: (verb: string) => {
        dispatch({ type: verb });
      },
    }),
    []
  );

  return <Playback playbackInfo={playbackInfo} callbacks={callbacks} />;
}

export default PlaybackContainer;
