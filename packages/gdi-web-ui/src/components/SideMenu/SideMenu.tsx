import React from 'react';
import classnames from 'classnames';
import { Logo } from '../Logo/Logo';
import { Icon } from '@gdi/web-base-ui';
import { Link } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useLocation, useSetState, useToggle } from 'react-use';
import { upperFirst } from 'lodash';
import './SideMenu.scss';

export type SideMenuProps = {
    data: IMenuItem[];
    groups: string[];
    children?: JSX.Element;
};

export function SideMenu(props: SideMenuProps) {
    const { data, groups } = props;
    const [sections, updateSections] = useSetState<Record<string, boolean>>({});
    const [slim, toggleSlim] = useToggle(true);
    const location = useLocation();

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
            <Link
                to={path}
                key={path}
                draggable={false}
                className={className}
                onClick={() => toggleSlim(true)}
            >
                <Icon className='icon' iconName={icon} />
                <div className='title'>{label}</div>
            </Link>
        );
    }

    function renderItems(items: IMenuItem[]) {
        return (
            <div className='items'>{items.map((item) => renderItem(item))}</div>
        );
    }

    function renderGroup(groupId: string) {
        const isSectionVisible = sections[groupId];

        const className = classnames('group', {
            open: isSectionVisible,
        });

        const items = data.filter((item) => item.groupId === groupId);

        return (
            <div key={groupId} className={className}>
                <div className='title' onClick={() => toggleGroup(groupId)}>
                    {upperFirst(groupId)}
                    <Icon iconName='ChevronDown' className='chevron'></Icon>
                </div>
                {isSectionVisible && renderItems(items)}
            </div>
        );
    }

    function renderGroups() {
        return groups.map((group) => renderGroup(group));
    }

    const className = classnames('SideMenu-container', {
        slim,
    });

    return (
        <div className={className}>
            <div className='header'>
                <Logo small={slim} onClick={toggleSlim} />
                <Icon
                    className='cancel'
                    iconName='ChevronLeftSmall'
                    onClick={toggleSlim}
                />
            </div>
            {slim ? renderItems(slimItems) : renderGroups()}
            {!slim && <div className='overlay' onClick={toggleSlim}></div>}
            {props.children}
        </div>
    );
}

export default SideMenu;
