import React from 'react';
import classnames from 'classnames';
import { Container, Gap, Item } from './Toolbar.style';
import { IconButton } from '@fluentui/react';
import { IToolbarItem } from '../../types';

export type ToolbarProps = {
    items: IToolbarItem[];
    selectedId?: string;
    selectedInnerIds?: Json;
    horizontal?: boolean;
    calculatedWidth?: boolean;
    onClick: (item: IToolbarItem) => void;
};

export function Toolbar(props: ToolbarProps) {
    const {
        items = [],
        selectedId,
        selectedInnerIds = {},
        horizontal,
        calculatedWidth,
    } = props;

    let style: React.CSSProperties = {};

    if (horizontal && calculatedWidth) {
        style = {};
    }

    function renderItemWithOptions(item: IToolbarItem) {
        let { id, text, iconName, options = [] } = item;

        const menuProps: IContextualMenuProps = {
            items: options.map((option) => ({
                key: option.id,
                text: option.text,
                iconProps: { iconName: option.iconName },
                onClick: () => props.onClick(option),
            })),
            directionalHintFixed: true,
        };

        const selectedOption = options.find(
            (o) => o.id === selectedInnerIds[id]
        );

        if (selectedOption) {
            iconName = selectedOption.iconName;
            text = selectedOption.text;
        }

        const className = classnames('item', {
            selected: selectedId === id,
        });

        return (
            <Item key={id} className={className} title={text}>
                <IconButton
                    iconProps={{ iconName }}
                    className='icon'
                    menuProps={menuProps}
                    onMenuClick={() => props.onClick(item)}
                />
            </Item>
        );
    }

    function renderItem(item: IToolbarItem) {
        if (item.isGap) {
            return <Gap key={item.id} />;
        }

        if (item.options) {
            return renderItemWithOptions(item);
        }

        let { id, text, iconName } = item;

        const className = classnames('item', {
            selected: selectedId === id,
        });

        return (
            <Item key={id} className={className} title={text}>
                <IconButton
                    iconProps={{ iconName }}
                    className='icon'
                    onClick={() => props.onClick(item)}
                />
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
