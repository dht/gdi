import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { delay } from 'shared-base';
import { Icon } from '@fluentui/react';
import { useEscape, useKeyHold, useClickAway } from '@gdi/hooks';
import { useToggle } from 'react-use';
import {
    Circle,
    Container,
    IconWrapper,
    Point,
    PointInner,
    PointText,
    ShortKey,
    Trigger,
} from './PieMenu.style';

export type PieMenuProps = {
    items: IOption[];
    onSelect: (item: IOption) => void;
};

export function PieMenu(props: PieMenuProps) {
    const { items = [] } = props;
    const ref = useRef<HTMLDivElement>(null);
    const count = items.length;
    const [r, setR] = useState(0);
    const [isOpen, toggle] = useToggle(false);

    const activeKey = useKeyHold(
        (ev: KeyboardEvent) => {
            if (!isOpen) {
                return;
            }

            const item = items.find((item) => item.shortKey?.key === ev.key);

            if (item) {
                onSelectOption(item);
            }
        },
        [isOpen]
    );

    useClickAway(
        ref,
        () => {
            toggle();
        },
        []
    );

    useEffect(() => {
        setR(isOpen ? 110 : 10);
    }, [isOpen]);

    useEscape(() => {
        if (!isOpen) {
            return;
        }

        toggle();
    }, [isOpen]);

    async function onSelectOption(item: IOption) {
        await delay(70);
        props.onSelect(item);
        toggle();
    }

    function renderText(text: string) {
        const spans: JSX.Element[] = [];

        let index = 0;

        const capitals = text.match(/[A-Z]/g) || [];

        text.split(/[A-Z]/g).forEach((p) => {
            spans.push(<span key={'r' + index}>{p}</span>);
            spans.push(
                <span className='capital' key={'c' + index}>
                    {capitals[index]}
                </span>
            );
            index++;
        });

        return spans;
    }

    function renderItem(item: IOption, index: number) {
        const { text, iconName, shortKey } = item;
        const { key = '' } = shortKey || {};

        let angle = 360 - ((200 + (360 / count) * index) % 360);

        let y = Math.sin((angle * Math.PI) / 180) * r;
        let x = Math.cos((angle * Math.PI) / 180) * r;

        const style: React.CSSProperties = {
            transform: `translate(${x}px, ${y}px)`,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'all' : 'none',
        };

        const className = classnames({
            bottomRight: angle > 0 && angle < 90,
            bottomLeft: angle > 90 && angle < 180,
            topLeft: angle > 180 && angle < 270,
            topRight: angle > 270 && angle < 360,
            keyboardOn: isOpen && key === activeKey,
        });

        return (
            <Point key={index} className='item' style={style}>
                <PointInner
                    className={className}
                    onClick={() => onSelectOption(item)}
                >
                    <IconWrapper>
                        <Icon iconName={iconName} />
                    </IconWrapper>
                    <PointText>{renderText(text)}</PointText>
                    <ShortKey className='key'>{key}</ShortKey>
                </PointInner>
            </Point>
        );
    }

    function renderItems() {
        return items.map((item: IOption, index) => renderItem(item, index));
    }

    return (
        <Container
            className='PieMenu-container'
            data-testid='PieMenu-container'
            ref={ref}
        >
            {renderItems()}
            <Circle />
            <Trigger onMouseDown={toggle} />
        </Container>
    );
}

export type Point = {
    x: number;
    y: number;
};

export default PieMenu;
