import React, { useContext, useMemo } from 'react';
import { Icon, KeyboardHint, SideMenu, UserMenu } from '@gdi/web-ui';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlatformContext } from '../core/Platform.context';
import { IMenuItem } from '../types';
import { auth } from '@gdi/store-auth';
import { useKey } from '@gdi/hooks';
import { invokeEvent, sortBy } from 'shared-base';
import { useLanguage } from '@gdi/language';
import screenfull from 'screenfull';

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
    const { menuItems, menuGroups } = useContext(PlatformContext).state;
    const me = useSelector(auth.selectors.raw.$rawMe);
    const { t } = useLanguage();

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

    const menuGroupsTranslated = useMemo(() => {
        return menuGroups.map((i) => t(i));
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
            <ActionWrapper>
                <KeyboardHint shortKeys={shortKeys} />
            </ActionWrapper>
        );
    }

    function renderToggleFullscreen() {
        return (
            <ActionWrapper onClick={() => screenfull.request()}>
                <Icon iconName='FullScreen' />
            </ActionWrapper>
        );
    }

    return (
        <SideMenu
            data={menuItemsSorted}
            groups={menuGroups}
            groupsTranslated={menuGroupsTranslated}
            userMenu={renderUserMenu()}
        >
            <ActionsWrapper>
                {renderKeyboardShortcuts()}
                {renderToggleFullscreen()}
            </ActionsWrapper>
        </SideMenu>
    );
}

const ActionsWrapper = styled.div`
    position: absolute;
    bottom: 75px;
    ${(props) => props.theme.left('10px')}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ActionWrapper = styled.div`
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;

const UserMenuWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    ${(props) => props.theme.left('5px')}
`;

function useCycleScreens(menuItems: IMenuItems, menuGroups: string[]) {
    const sortedMenuItems = useMemo(() => {
        let output: IMenuItem[] = [];

        menuGroups.forEach((group) => {
            menuItems
                .filter((item: IMenuItem) => item.groupId === group)
                .sort(sortBy('order'))
                .forEach((item: IMenuItem) => {
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

const userAgent = navigator.userAgent.toLowerCase();
const isTablet =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        userAgent
    );

if (screenfull.isEnabled && isTablet) {
    screenfull.request();
}
