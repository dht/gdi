import React from 'react';
import { Wrapper } from './SideBar.style';
import { Logo } from '@gdi/web-ui';
import { LogoWrapper } from '../Blkr/Blkr.style';

export type SideBarProps = {};

export function SideBar(_props: SideBarProps) {
    return (
        <Wrapper className='SideBar-wrapper' data-testid='SideBar-wrapper'>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
        </Wrapper>
    );
}

export default SideBar;
