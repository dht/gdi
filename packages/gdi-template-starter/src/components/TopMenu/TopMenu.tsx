import React from 'react';
import { Wrapper, Link } from './TopMenu.style';
import classnames from 'classnames';

export type TopMenuProps = {
    items: IMenuItem[];
    onClick: (item: IMenuItem) => void;
};

type IMenuItem = {
    href: string;
    title: string;
};

export function TopMenu(props: TopMenuProps) {
    const { items } = props;

    function renderItem(item: IMenuItem, index: number) {
        const { title, href } = item;

        const className = classnames(item, {
            selected: false,
        });

        return (
            <Link
                key={item.title + String(index)}
                className={className}
                href={href}
                onClick={() => props.onClick(item)}
            >
                {title}
            </Link>
        );
    }

    function renderItems() {
        return items.map((item: IMenuItem, index) => renderItem(item, index));
    }

    return (
        <Wrapper className='TopMenu-container' data-testid='TopMenu-container'>
            {renderItems()}
        </Wrapper>
    );
}

export default TopMenu;
