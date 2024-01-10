import React from 'react';
import { Wrapper } from './Stopwatch.style';
import { PlaybackInfo } from '../../Playback.types';
import { useStopwatch } from './Stopwatch.hooks';

export type StopwatchProps = {
  playbackInfo: PlaybackInfo;
};

export function Stopwatch(props: StopwatchProps) {
  const { playbackInfo } = props;
  const value = useStopwatch(playbackInfo);

  return (
    <Wrapper className='Stopwatch-wrapper' data-testid='Stopwatch-wrapper'>
      {value}
    </Wrapper>
  );
}

export default Stopwatch;
