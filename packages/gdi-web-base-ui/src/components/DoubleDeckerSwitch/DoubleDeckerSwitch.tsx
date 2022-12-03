import React, { useMemo, useRef } from 'react';
import { useShortKeys } from '@gdi/hooks';
import {
    Wrapper,
    Count,
    Item,
    Letter,
    Title,
} from './DoubleDeckerSwitch.style';
import classnames from 'classnames';
import Draggable from 'react-draggable';
import Toolbar from '../Toolbar/Toolbar';

type DoubleDeckerItem = {
    id: string;
    title: string;
    order: number;
    count?: number;
    data?: Json[];
    shortKey?: IShortKey;
};

export type DoubleDeckerSwitchProps = {
    items: DoubleDeckerItem[];
    currentId: string;
    onSelectNode: (nodeId: string) => void;
};

export function DoubleDeckerSwitch(props: DoubleDeckerSwitchProps) {
    const { items, currentId } = props;
    const ref = useRef<HTMLDivElement>(null);

    const shortKeys = useMemo(() => {
        return items
            .filter((item) => item.shortKey)
            .map((item) => item.shortKey) as IShortKey[];
    }, [items]);

    useShortKeys(
        shortKeys,
        (nodeId: string) => {
            props.onSelectNode(nodeId);
        },
        [shortKeys]
    );

    function renderItem(item: Json) {
        const { id, title, count, shortKey, data = [] } = item;
        const { key } = shortKey;

        const className = classnames('item', {
            selected: currentId === id,
        });

        let number = count || data.length;

        return (
            <Item
                key={item.id}
                className={className}
                onClick={() => props.onSelectNode(id)}
            >
                <Title>{title}</Title>
                <Count>{number} items</Count>
                <Letter>{key.toUpperCase()}</Letter>
            </Item>
        );
    }

    function renderItems() {
        return items.map((item: Json) => renderItem(item));
    }

    const style: React.CSSProperties = {
        maxWidth: Math.round(items.length / 2) * 71 + 'px',
    };

    const Cmp: any = Draggable;

    return (
        <Cmp nodeRef={ref}>
            <Wrapper
                ref={ref}
                className='DoubleDeckerSwitcher-wrapper'
                data-testid='DoubleDeckerSwitcher-wrapper'
                style={style}
            >
                {renderItems()}
            </Wrapper>
        </Cmp>
    );
}

export default DoubleDeckerSwitch;
