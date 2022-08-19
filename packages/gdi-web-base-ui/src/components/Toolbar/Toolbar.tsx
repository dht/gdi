import { Icon } from '@fluentui/react';
import React from 'react';
import { Container, Item } from './Toolbar.style';
import classnames from 'classnames';
import { useKey } from '../../hooks/useKey';

export type IToolbarItem = {
    id: string;
    text: string;
    iconName?: string;
    secondaryText?: string;
};

export type ToolbarProps = {
    items: IToolbarItem[];
    selectedItemId?: string;
    horizontal?: boolean;
    onClick: (item: IToolbarItem) => void;
};

export function Toolbar(props: ToolbarProps) {
    const { items = [], selectedItemId, horizontal } = props;

    useKey(
        (ev) => {
            if (!ev.ctrlKey) {
                return;
            }
            const index = items.findIndex((i) => i.id === selectedItemId);
            const nextIndex = (index + 1) % items.length;
            props.onClick(items[nextIndex]);
        },
        { filterKeys: ['`'] },
        [items, selectedItemId]
    );

    function renderItem(item: IToolbarItem) {
        const { id, text, iconName } = item;
        const className = classnames({
            selected: selectedItemId === id,
        });

        return (
            <Item
                key={id}
                className={className}
                title={text}
                onClick={() => props.onClick(item)}
            >
                <Icon iconName={iconName} className='icon' />
            </Item>
        );
    }

    function renderItems() {
        return items.map((item: IToolbarItem) => renderItem(item));
    }

    return (
        <Container
            className='Toolbar-container'
            data-testid='Toolbar-container'
            horizontal={horizontal}
        >
            {renderItems()}
        </Container>
    );
}

export default Toolbar;
