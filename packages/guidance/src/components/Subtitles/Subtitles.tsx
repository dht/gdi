import React from 'react';
import { Line, Wrapper } from './Subtitles.style';

export type SubtitlesProps = {};

export function Subtitles(_props: SubtitlesProps) {
  return (
    <Wrapper className='Subtitles-wrapper' data-testid='Subtitles-wrapper'>
      <Line>This is the first line of the</Line>
      <Line>subtitle. and this is the second</Line>
    </Wrapper>
  );
}

export default Subtitles;
