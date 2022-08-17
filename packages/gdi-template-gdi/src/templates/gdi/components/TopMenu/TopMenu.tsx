import React from 'react';
import { Container, Link } from './TopMenu.style';

export type TopMenuProps = {
    items: IMenuItem[];
};

type IMenuItem = {
    href: string;
    title: string;
};

export function TopMenu(props: TopMenuProps) {
    const { items } = props;

    function renderItem(item: IMenuItem) {
        const { title, href } = item;
        return (
            <Link key={item.title} className='item' href={href}>
                {title}
            </Link>
        );
    }

    function renderItems() {
        return items.map((item: IMenuItem) => renderItem(item));
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
