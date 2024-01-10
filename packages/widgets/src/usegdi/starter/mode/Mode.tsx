import React from 'react';
import { Wrapper } from './Mode.style';

export type ModeProps = {};

export function Mode(_props: ModeProps) {
  return (
    <Wrapper className='Mode-wrapper' data-testid='Mode-wrapper'>
      Playback Mode
    </Wrapper>
  );
}

export default Mode;
