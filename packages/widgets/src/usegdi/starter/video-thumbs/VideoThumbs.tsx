import React from 'react';
import { Wrapper } from './VideoThumbs.style';
import { MultiTrack } from '@gdi/ui';

export type VideoThumbsProps = {
  waveTracks: any;
  waveOptions: any;
  callbacks: any;
};

export function VideoThumbs(props: VideoThumbsProps) {
  const { waveTracks, waveOptions } = props;

  return (
    <Wrapper className='VideoThumbs-wrapper' data-testid='VideoThumbs-wrapper'>
      <MultiTrack options={waveOptions} tracks={waveTracks} />
    </Wrapper>
  );
}

export default VideoThumbs;
