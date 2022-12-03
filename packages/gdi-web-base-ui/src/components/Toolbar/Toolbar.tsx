import React from 'react';
import classnames from 'classnames';
import { Wrapper, Gap, Item } from './Toolbar.style';
import { IconButton, IContextualMenuProps } from '@fluentui/react';
import { IOption } from '../../types';

export type ToolbarProps = {
    items: IOption[];
    selectedId?: string;
    selectedInnerIds?: Json;
    horizontal?: boolean;
    calculatedWidth?: boolean;
    onClick: (item: IOption, isExtra?: boolean) => void;
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

    function renderItemWithOptions(item: IOption) {
        let { id, text, iconName, options = [] } = item;

        const menuProps: IContextualMenuProps = {
            items: options.map((option) => ({
                key: option.id,
                text: option.text,
                iconProps: { iconName: option.iconName },
                onClick: () => props.onClick(option, true),
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

    function renderItem(item: IOption) {
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
        return items
            .filter((item) => !item.isExtra)
            .map((item: IOption) => renderItem(item));
    }

    function renderExtraItems() {
        const itemsExtra = items.filter((item) => item.isExtra);

        if (itemsExtra.length === 0) {
            return null;
        }

        return renderItemWithOptions({
            id: 'more',
            iconName: 'MoreVertical',
            text: 'More',
            options: itemsExtra,
        });
    }

    const className = classnames('Toolbar-wrapper', { horizontal });

    return (
        <Wrapper
            className={className}
            data-testid='Toolbar-wrapper'
            horizontal={horizontal}
            style={style}
        >
            {renderItems()}
            {renderExtraItems()}
        </Wrapper>
    );
}

export default Toolbar;
