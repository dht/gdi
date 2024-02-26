import React from 'react';
import { Top, Wrapper } from './MuxSideBar.style';
import Logo from '../Logo/Logo';
import MuxCommandPalette from '../MuxCommandPalette/MuxCommandPalette';
import MuxMenu from '../MuxMenu/MuxMenu';
import UserMenuContainer from '../UserMenu/UserMenu.container';
import { Icon } from '@gdi/ui';

export type MuxSideBarProps = {};

export function MuxSideBar(_props: MuxSideBarProps) {
  return (
    <Wrapper className='MuxSideBar-wrapper' data-testid='MuxSideBar-wrapper'>
      <Top>
        <Logo />
        <Icon color='#999' name='map' />
      </Top>
      <MuxCommandPalette />
      <MuxMenu />
    </Wrapper>
  );
}

export default MuxSideBar;
