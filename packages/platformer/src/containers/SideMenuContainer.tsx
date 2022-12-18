import React, { useContext, useMemo } from 'react';
import screenfull from 'screenfull';
import styled from 'styled-components';
import { auth } from '@gdi/store-auth';
import { changeLanguage } from '@gdi/language';
import { Icon, KeyboardHint, prompt, SideMenu, UserMenu } from '@gdi/web-ui';
import { IMenuItem } from '../types';
import { invokeEvent, sortBy } from 'shared-base';
import { PlatformContext } from '../core/Platform.context';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useKey } from '@gdi/hooks';
import { useLanguage } from '@gdi/language';

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

    const pickLanguage = useCallback(async () => {
        const { value, didCancel } = await prompt.choice({
            title: 'Language',
            options: languages,
            submitButtonText: 'Set language',
            defaultValue: 'en',
        });

        if (didCancel || !value) {
            return;
        }

        changeLanguage(value as LanguageIso);
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

    function renderLanguagePicker() {
        return (
            <ActionWrapper
                onClick={pickLanguage}
                style={{ marginBottom: '15px' }}
            >
                <Icon iconName='LocaleLanguage' />
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
                {renderLanguagePicker()}
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

    i {
        cursor: pointer;
        font-size: 22px;

        &:hover {
            color: gold;
        }
    }
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

const languages = [
    {
        id: 'en',
        text: 'English',
    },
    {
        id: 'de',
        text: 'Deutsch',
    },
    {
        id: 'es',
        text: 'Español',
    },
    {
        id: 'fr',
        text: 'Français',
    },
    {
        id: 'it',
        text: 'Italiano',
    },
    {
        id: 'nl',
        text: 'Nederlands',
    },
    {
        id: 'he',
        text: 'עברית',
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
