import React from 'react';
import classnames from 'classnames';
import { Icon, Logo } from '@gdi/web-base-ui';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useLocation, useSetState, useToggle } from 'react-use';
import { upperFirst } from 'lodash';
import './SideMenu.scss';
import { sortBy } from 'shared-base';
import {
    Container,
    Group,
    GroupTitle,
    Header,
    Item,
    Items,
    Overlay,
    Title,
} from './SideMenu.style';

export type SideMenuProps = {
    data: IMenuItem[];
    groups: string[];
    children?: JSX.Element | JSX.Element[];
};

export function SideMenu(props: SideMenuProps) {
    const { data, groups } = props;
    const [sections, updateSections] = useSetState<Record<string, boolean>>({});
    const [slim, toggleSlim] = useToggle(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (groups.length === 0) {
            return;
        }

        updateSections({
            [groups[0]]: true,
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

    function renderGroup(groupId: string) {
        const isSectionVisible = sections[groupId];

        const className = classnames('group', {
            open: isSectionVisible,
        });

        const items = data
            .filter((item) => item.groupId === groupId)
            .sort(sortBy('order'));

        return (
            <Group key={groupId} className={className}>
                <GroupTitle
                    className='title'
                    onMouseDown={() => toggleGroup(groupId)}
                >
                    {upperFirst(groupId)}
                    <Icon iconName='ChevronDown' className='chevron'></Icon>
                </GroupTitle>
                {isSectionVisible && renderItems(items)}
            </Group>
        );
    }

    function renderGroups() {
        return groups.map((group) => renderGroup(group));
    }

    const className = classnames('SideMenu-container', {
        slim,
    });

    return (
        <Container className={className}>
            <Header className='header'>
                <Logo small={slim} onClick={toggleSlim} />
                <Icon
                    className='cancel'
                    iconName='ChevronLeftSmall'
                    onClick={toggleSlim}
                />
            </Header>
            {slim ? renderItems(slimItems) : renderGroups()}
            {!slim && (
                <Overlay className='overlay' onClick={toggleSlim}></Overlay>
            )}
            {props.children}
        </Container>
    );
}

export default SideMenu;
