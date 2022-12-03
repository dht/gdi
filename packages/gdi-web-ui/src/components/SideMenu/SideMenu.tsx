import React from 'react';
import classnames from 'classnames';
import { Icon, Logo } from '@gdi/web-base-ui';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useLocation, useSetState, useToggle } from 'react-use';
import { upperFirst } from 'shared-base';
import './SideMenu.scss';
import { sortBy } from 'shared-base';
import {
    Wrapper,
    Content,
    Group,
    GroupTitle,
    Header,
    Item,
    Items,
    Overlay,
    Title,
} from './SideMenu.style';
import { useTheme } from 'styled-components';

export type SideMenuProps = {
    data: IMenuItem[];
    groups: string[];
    groupsTranslated: string[];
    userMenu?: JSX.Element;
    children?: JSX.Element | JSX.Element[];
};

export function SideMenu(props: SideMenuProps) {
    const { data, groups, groupsTranslated } = props;
    const [sections, updateSections] = useSetState<Record<string, boolean>>({});
    const [slim, toggleSlim] = useToggle(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { isRtl } = useTheme() as any;

    useEffect(() => {
        const visibleGroups = groups.filter((group) => {
            const items = data.filter((item) => item.groupId === group);
            return items.length > 0;
        });

        if (visibleGroups.length === 0) {
            return;
        }

        updateSections({
            [visibleGroups[0]]: true,
        });
    }, [groups, updateSections]);

    const slimItems = data.filter(
        (item) => item.showOnSlim || item.path === location.pathname
    );

    const toggleGroup = useCallback(
        (groupId: string) => {
            updateSections({
                [groupId]: !sections[groupId],
            });
        },
        [sections, updateSections]
    );

    function renderItem(item: IMenuItem) {
        const { icon, label, path } = item;

        const className = classnames('item', {
            selected: location.pathname === path,
        });

        return (
            <Item
                key={path}
                draggable={false}
                className={className}
                onClick={() => toggleSlim(true)}
                onMouseDown={() => navigate(path)}
                onTouchStart={() => navigate(path)}
            >
                <Icon className='icon' iconName={icon} />
                <Title className='title'>{label}</Title>
            </Item>
        );
    }

    function renderItems(items: IMenuItem[]) {
        return (
            <Items className='items'>
                {items.map((item) => renderItem(item))}
            </Items>
        );
    }

    function renderGroup(groupId: string, index: number) {
        const isSectionVisible = sections[groupId];

        const className = classnames('group', {
            open: isSectionVisible,
        });

        const items = data
            .filter((item) => item.groupId === groupId)
            .sort(sortBy('order'));

        if (items.length === 0) {
            return null;
        }

        return (
            <Group key={groupId} className={className}>
                <GroupTitle
                    className='title'
                    onMouseDown={() => toggleGroup(groupId)}
                >
                    {upperFirst(groupsTranslated[index])}
                    <Icon iconName='ChevronDown' className='chevron'></Icon>
                </GroupTitle>
                {isSectionVisible && renderItems(items)}
            </Group>
        );
    }

    function renderGroups() {
        return groups.map((group, index) => renderGroup(group, index));
    }

    const className = classnames('SideMenu-wrapper', {
        slim,
        rtl: isRtl,
    });

    return (
        <Wrapper className={className}>
            <Header className='header'>
                <Logo small={slim} onClick={toggleSlim} />
                <Icon
                    className='cancel'
                    iconName='ChevronLeftSmall'
                    onMouseDown={toggleSlim}
                />
            </Header>
            <Content>{slim ? renderItems(slimItems) : renderGroups()}</Content>
            {!slim && (
                <Overlay className='overlay' onClick={toggleSlim}></Overlay>
            )}
            {props.userMenu}
            {slim && props.children}
        </Wrapper>
    );
}

export default SideMenu;
