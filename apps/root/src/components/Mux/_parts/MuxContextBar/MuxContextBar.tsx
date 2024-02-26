import React from 'react';
import { Wrapper } from './MuxContextBar.style';

export type MuxContextBarProps = {};

export function MuxContextBar(_props: MuxContextBarProps) {
  return (
    <Wrapper
      className='MuxContextBar-wrapper'
      data-testid='MuxContextBar-wrapper'
    ></Wrapper>
  );
}

export default MuxContextBar;
