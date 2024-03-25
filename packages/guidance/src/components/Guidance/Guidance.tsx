import React from 'react';
import { Wrapper } from './Guidance.style';
import Cursor from '../Cursor/Cursor';
import AvatarContainer from '../Avatar/Avatar.container';
import SubtitlesContainer from '../Subtitles/Subtitles.container';

export type GuidanceProps = {};

export function Guidance(_props: GuidanceProps) {
  return (
    <Wrapper className='Guidance-wrapper' data-testid='Guidance-wrapper'>
      <Cursor />
      <AvatarContainer />
      <SubtitlesContainer />
    </Wrapper>
  );
}

export default Guidance;
