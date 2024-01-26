import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import React, { useMemo } from 'react';
import { VideoThumbs } from './VideoThumbs';

export type VideoThumbsContainerProps = {};

export function VideoThumbsContainer(_props: VideoThumbsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const waveTracks = useSelector(selectors.wave.$tracks);
  const waveOptions = useSelector(selectors.wave.$options);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <VideoThumbs waveTracks={waveTracks} waveOptions={waveOptions} />;
}

export default VideoThumbsContainer;
