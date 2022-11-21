import React from 'react';
import Search from '../Search/Search';
import SocialMenu from '../SocialMenu/SocialMenu';
import {
    Container,
    Flex,
    Github,
    Inner,
    MenuItem,
    MenuItemLink,
} from './TopMenu.style';

export type TopMenuProps = {};

export function TopMenu(_props: TopMenuProps) {
    return (
        <Container
            className='TopMenu-container'
            data-testid='TopMenu-container'
        >
            <Inner>
                <MenuItem>
                    <MenuItemLink href='#templates'>Templates</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href='#apps'>Apps</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink
                        href='https://usegdi.com/docs/docs/getting-started/installation'
                        target='_blank'
                    >
                        Docs
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink
                        href='https://github.com/dht/gdi/discussions'
                        target='_blank'
                    >
                        Community
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href='#features'>Features</MenuItemLink>
                </MenuItem>
                <Flex />
                <SocialMenu />
                <Github href='https://github.com/dht/gdi' target='_blank'>
                    <img src='/github.svg' />
                </Github>
            </Inner>
        </Container>
    );
}

export default TopMenu;
