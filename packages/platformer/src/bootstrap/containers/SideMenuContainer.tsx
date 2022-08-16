import React, { useContext, useMemo } from 'react';
import { SideMenu, UserMenu } from '@gdi/web-ui';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PlatformContext } from '../../core/platform-context';
import { IMenuItem } from '../../types';

type SideMenuContainerProps = {};

const items = [
    // {
    //     id: 'account',
    //     title: 'Account',
    //     icon: 'CrownSolid',
    // },
    // {
    //     id: 'apps',
    //     title: 'Apps & stats',
    //     icon: 'GridViewSmall',
    // },
    // {
    //     id: 'settings',
    //     title: 'Settings',
    //     icon: 'Settings',
    // },
    // {
    //     id: 'connectDevice',
    //     title: 'Connect device',
    //     icon: 'CellPhone',
    // },
    {
        id: 'logout',
        title: 'Logout',
        icon: 'Cafe',
    },
];

export function SideMenuContainer(_props: SideMenuContainerProps) {
    const dispatch = useDispatch();
    const { menuItems, menuGroups } = useContext(PlatformContext);

    const onUserMenuClick = useCallback((actionId: string) => {
        switch (actionId) {
            case 'account':
                dispatch({ type: 'NAVIGATE_EXTERNAL', path: '/account' });
                break;
            case 'apps':
                dispatch({ type: 'NAVIGATE_EXTERNAL', path: '/apps' });
                break;
            case 'settings':
                dispatch({ type: 'NAVIGATE_EXTERNAL', path: '/settings' });
                break;
            case 'connectDevice':
                dispatch({
                    type: 'NAVIGATE_EXTERNAL',
                    path: '/connect-device',
                });
                break;
            case 'logout':
                // signOut();
                dispatch({ type: 'LOGOUT' });
                break;
        }
    }, []);

    const menuItemsSorted = useMemo(() => {
        let output: IMenuItem[] = [];
        menuGroups.forEach((group) => {
            menuItems
                .filter((item) => item.groupId === group)
                .forEach((item) => {
                    output.push(item);
                });
        });
        return output;
    }, []);

    return (
        <SideMenu data={menuItemsSorted} groups={menuGroups}>
            <UserMenuWrapper>
                <UserMenu
                    user={{} as any}
                    items={items}
                    onClick={onUserMenuClick}
                />
            </UserMenuWrapper>
        </SideMenu>
    );
}

const UserMenuWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 5px;
`;
