import React from 'react';
import Search from '../../components/Search/Search';
import SocialMenu from '../../components/SocialMenu/SocialMenu';
import {
    Container,
    Flex,
    Inner,
    MenuItem,
    MenuItemLink,
} from './UserMenu.style';

export const id = 'com.usegdi.templates.blog.userMenu-simple';

export type UserMenuProps = {};

export function UserMenu(_props: UserMenuProps) {
    return (
        <Container
            className='UserMenu-container'
            data-testid='UserMenu-container'
        >
            <Inner>
                <MenuItem>
                    <MenuItemLink href=''>Tech</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href=''>Reviews</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href=''>Science</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href=''>Creators</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href=''>Entertainment</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href=''>Video</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href=''>Features</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink href=''>More</MenuItemLink>
                </MenuItem>
                <Flex />
                <SocialMenu />
                <Search />
            </Inner>
        </Container>
    );
}

export default UserMenu;
