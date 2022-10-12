import React from 'react';
import { Icon } from '@fluentui/react';
import { Container, Gap, Item } from './Toolbar.style';
import classnames from 'classnames';
import { useKey } from '@gdi/hooks';
import { IToolbarItem } from '../../types';

export type ToolbarProps = {
    items: IToolbarItem[];
    selectedItemId?: string;
    horizontal?: boolean;
    calculatedWidth?: boolean;
    onClick: (item: IToolbarItem) => void;
};

export function Toolbar(props: ToolbarProps) {
    const { items = [], selectedItemId, horizontal, calculatedWidth } = props;

    useKey(
        (ev) => {
            if (!ev.withCtrl) {
                return;
            }
            const index = items.findIndex((i) => i.id === selectedItemId);
            const nextIndex = (index + 1) % items.length;
            props.onClick(items[nextIndex]);
        },
        { filterKeys: ['`'] },
        [items, selectedItemId]
    );

    let style: React.CSSProperties = {};

    if (horizontal && calculatedWidth) {
        const countGaps = items.filter((item) => item.isGap).length;
        const countItems = items.length - countGaps;
        const maxWidth = 41 * countItems + 10 * countGaps;

        style = {
            maxWidth: maxWidth + 'px',
        };
    }

    function renderItem(item: IToolbarItem) {
        const { id, text, iconName } = item;
        const className = classnames('item', {
            selected: selectedItemId === id,
        });

        if (item.isGap) {
            return <Gap key={id} />;
        }

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

    const className = classnames('Toolbar-container', { horizontal });

    return (
        <Container
            className={className}
            data-testid='Toolbar-container'
            horizontal={horizontal}
            style={style}
        >
            {renderItems()}
        </Container>
    );
}

export default Toolbar;
