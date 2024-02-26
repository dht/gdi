import React from 'react';
import { Gap, Wrapper } from './MuxTopBar.style';
import UserMenuContainer from '../UserMenu/UserMenu.container';
import MuxFocus from '../MuxFocus/MuxFocus';

export type MuxTopBarProps = {};

export function MuxTopBar(_props: MuxTopBarProps) {
  return (
    <Wrapper className='MuxTopBar-wrapper' data-testid='MuxTopBar-wrapper'>
      <Gap />
      {/* <MuxFocus /> */}
      <UserMenuContainer />
    </Wrapper>
  );
}

export default MuxTopBar;
