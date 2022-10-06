import React, { useContext, useMemo } from 'react';
import { KeyboardHint, SideMenu, UserMenu } from '@gdi/web-ui';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlatformContext } from '../../core/platform-context';
import { IMenuItem } from '../../types';
import { auth } from '@gdi/store-auth';
import { useKey } from '@gdi/hooks';
import { invokeEvent, sortBy } from 'shared-base';

type SideMenuContainerProps = {};

const items = [
    {
        id: 'account',
        title: 'Account',
        icon: 'CrownSolid',
    },
    {
        id: 'apps',
        title: 'Apps',
        icon: 'GridViewSmall',
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: 'Settings',
    },
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
    const me = useSelector(auth.selectors.raw.$rawMe);

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

    useCycleScreens(menuItems, menuGroups);

    function renderUserMenu() {
        return (
            <UserMenuWrapper>
                <UserMenu user={me} items={items} onClick={onUserMenuClick} />
            </UserMenuWrapper>
        );
    }

    function renderKeyboardShortcuts() {
        return (
            <KeyboardShortcutsWrapper>
                <KeyboardHint shortKeys={shortKeys} />
            </KeyboardShortcutsWrapper>
        );
    }

    return (
        <SideMenu data={menuItemsSorted} groups={menuGroups}>
            {renderUserMenu()}
            {renderKeyboardShortcuts()}
        </SideMenu>
    );
}

const KeyboardShortcutsWrapper = styled.div`
    position: absolute;
    bottom: 85px;
    left: 5px;
    margin: 0 10px;
`;

const UserMenuWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 5px;
`;

function useCycleScreens(menuItems: IMenuItems, menuGroups: string[]) {
    const sortedMenuItems = useMemo(() => {
        let output: IMenuItem[] = [];
        menuGroups.forEach((group) => {
            menuItems
                .filter((item) => item.groupId === group)
                .sort(sortBy('order'))
                .forEach((item) => {
                    output.push(item);
                });
        });
        return output;
    }, []);

    useKey(
        () => {
            const currentPath = window.location.pathname;
            const menuItemIndex = sortedMenuItems.findIndex(
                (item) => item.path === currentPath
            );

            if (menuItemIndex === -1) {
                // return;
                // will return to first screen
            }

            const nextIndex =
                (menuItemIndex + 1) % (sortedMenuItems.length - 1);

            const nextItem = sortedMenuItems[nextIndex];

            invokeEvent('navigate', { path: nextItem.path });
        },
        {
            filterKeys: ['ArrowDown'],
            filterModifiers: ['ctrlKey', 'altKey'],
        }
    );
}

const shortKeys: IShortKey[] = [
    {
        key: 'K',
        withCommand: true,
        description: 'Command Palette',
    },
    {
        key: 'F1, F2, F3...',
        description: 'Switch view modes',
    },
    {
        key: '↑',
        withCtrl: true,
        withAlt: true,
        description: 'Quick Navigation',
    },
    {
        key: '↓',
        withCtrl: true,
        withAlt: true,
        description: 'Next Screen',
    },
    {
        key: '`',
        description: 'Redux connected network',
    },
];
