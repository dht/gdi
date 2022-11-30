import React from 'react';
import { Container, MenuItem, MenuItemLink } from './TopMenu.style';
import classnames from 'classnames';

export type TopMenuProps = {
    items: IMenuItem[];
};

type IMenuItem = {
    href: string;
    title: string;
};

export function TopMenu(props: TopMenuProps) {
    const { items } = props;

    function renderItem(item: IMenuItem, index: number) {
        const { title, href } = item;

        if (!title) {
            return null;
        }

        const className = classnames(item, {
            selected: false,
        });

        return (
            <MenuItem key={href}>
                <MenuItemLink
                    key={item.title + String(index)}
                    className={className}
                    href={href}
                >
                    {title}
                </MenuItemLink>
            </MenuItem>
        );
    }

    function renderItems() {
        return items.map((item: IMenuItem, index) => renderItem(item, index));
    }

    return (
        <Container
            className='TopMenu-container'
            data-testid='TopMenu-container'
        >
            {renderItems()}
        </Container>
    );
}

export default TopMenu;
