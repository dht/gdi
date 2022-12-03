import React, { FC } from 'react';
import MasonryItem from '../Galleries/items/ItemImage/ItemImage';
import { Backdrop, Wrapper, Content, Expander } from './Masonry.style';
import { IImage } from '../../types';
import { throttle } from 'shared-base';
import { useWindowSize } from 'react-use';
import { useTheme } from 'styled-components';
import classnames from 'classnames';
import { useEffect, useMemo, useRef, useState } from '@gdi/hooks';

const VIRTUALIZED_SCROLL_GUTTER = 600;
const VIRTUALIZED_ITEMS_COUNT = 100;
const VIRTUALIZED_THROTTLE = 5;
const VIRTUALIZED_BOTTOM_REACH_GUTTER = 100;

export type IItem = IImage & {
    style?: Style;
    top: number;
    bottom: number;
};

type Style = {
    top: number;
    left: number;
    width: number;
    height: number;
};

export type MasonryProps = {
    items: IImage[];
    columns?: number;
    gutter?: number;
    fixedRatio?: number;
    renderOverlay?: (item: IItem) => JSX.Element;
    onClick?: (id: string, item: IItem) => void;
    onDoubleClick?: (id: string) => void;
    onBottomReach?: () => void;
    onMouseEvent?: (ev: MouseEv) => void;
    customItem?: FC<MasonryItemProps>;
    focusedItemId?: string;
};

export type MasonryItemProps = {
    item: IItem;
    renderOverlay: (item: IItem) => JSX.Element | null;
    onClick: (id: string, item: IItem) => void;
    onDoubleClick: (id: string) => void;
    onMouseEvent?: (ev: MouseEv) => void;
    isFocused: boolean;
};

export function Masonry(props: MasonryProps) {
    const {
        columns = 3,
        gutter = 10,
        items,
        customItem,
        fixedRatio,
        focusedItemId,
    } = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [innerHeight, setInnerHeight] = useState(0);
    const [itemsWithPositions, setItemsWithPositions] = useState<IItem[]>([]);
    const [itemsInViewport, setItemsInViewport] = useState<IItem[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const theme = useTheme();

    const virtualItems = useMemo(() => {
        return [...new Array(VIRTUALIZED_ITEMS_COUNT)].map((_i, index) => ({
            id: index,
        }));
    }, []);

    const scrollTop = useThrottledScroll(ref, VIRTUALIZED_THROTTLE);

    // set width & height of container
    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const boundingBox = ref.current.getBoundingClientRect();

        setWidth(boundingBox.width);
        setHeight(boundingBox.height);
    }, [windowWidth, windowHeight]);

    // position virtualized items

    useEffect(() => {
        const positionResult = positionImages(items, {
            width,
            columns,
            gutter,
            fixedRatio,
            isRtl: (theme as any).isRtl,
        });

        setInnerHeight(positionResult.maxBottom);
        setItemsWithPositions(positionResult.items as any);
    }, [width, items]);

    // find items in current viewport
    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const box = ref.current.getBoundingClientRect();
        const { height } = box;

        const minTop = scrollTop - VIRTUALIZED_SCROLL_GUTTER;
        const maxTop = scrollTop + height + VIRTUALIZED_SCROLL_GUTTER;

        const visibleImages = itemsWithPositions.filter((item) => {
            const { top, bottom } = item;

            const isTopVisible = top > minTop && top < maxTop;
            const isBottomVisible = bottom > minTop && bottom < maxTop;

            return isTopVisible || isBottomVisible;
        });

        setItemsInViewport(visibleImages);
    }, [scrollTop, itemsWithPositions]);

    // onBottomReach
    useEffect(() => {
        if (!props.onBottomReach) {
            return;
        }

        if (
            height + scrollTop + VIRTUALIZED_BOTTOM_REACH_GUTTER >
            innerHeight
        ) {
            props.onBottomReach();
        }
    }, [scrollTop]);

    function onClick(id: string, item: IItem) {
        if (!props.onClick) {
            return;
        }

        props.onClick(id, item);
    }

    function onDoubleClick(id: string) {
        if (!props.onDoubleClick) {
            return;
        }

        props.onDoubleClick(id);
    }

    function onMouseEvent(ev: MouseEv) {
        if (!props.onMouseEvent) {
            return;
        }

        props.onMouseEvent(ev);
    }

    function renderOverlay(item: IItem) {
        if (!props.renderOverlay) {
            return null;
        }

        return props.renderOverlay(item);
    }

    function renderItem(index: number) {
        const item = itemsInViewport[index];

        if (!item) {
            return;
        }

        const Cmp = customItem ? customItem : MasonryItem;

        return (
            <Cmp
                key={index}
                item={item}
                renderOverlay={renderOverlay}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                onMouseEvent={onMouseEvent}
                isFocused={focusedItemId === item.id}
            />
        );
    }

    function renderItems() {
        return virtualItems.map((_i, index) => renderItem(index));
    }

    function renderExpander() {
        const style = {
            height: innerHeight + 'px',
        };

        return <Expander style={style} />;
    }

    const className = classnames('backdrop', {
        on: typeof focusedItemId === 'string' && focusedItemId.length > 0,
    });

    return (
        <Wrapper className='Masonry-wrapper' data-testid='Masonry-wrapper'>
            <Content ref={ref}>
                {renderExpander()}
                {renderItems()}
            </Content>
            <Backdrop className={className} />
        </Wrapper>
    );
}

type Options = {
    width: number;
    columns: number;
    gutter: number;
    fixedRatio?: number;
    isRtl?: boolean;
};

export const positionImages = (allItems: IImage[], options: Options) => {
    const { width, columns, gutter, fixedRatio } = options;

    const columnWidth = (width - gutter * columns - gutter) / columns;

    const leftPerColumn = [...new Array(columns)].map((_i, index) => {
        return gutter + (columnWidth + gutter) * index;
    });

    const topPerColumn = [...new Array(columns)].map((_i) => {
        return gutter;
    });

    const getMinimumTopColumnIndex = () => {
        const min = topPerColumn.reduce(
            (output, value) => Math.min(output, value),
            Number.MAX_SAFE_INTEGER
        );

        return topPerColumn.findIndex((top) => top === min);
    };

    let maxBottom = 0;

    const items = allItems.map((item) => {
        let { ratio } = item;

        if (fixedRatio) {
            ratio = fixedRatio;
        }

        const columnIndex = getMinimumTopColumnIndex();

        const top = topPerColumn[columnIndex];
        const left = leftPerColumn[columnIndex];
        const width = columnWidth;
        const height = columnWidth / ratio;

        topPerColumn[columnIndex] += height + gutter;

        const bottom = top + height;

        maxBottom = Math.max(maxBottom, bottom);

        const leftKey = options.isRtl ? 'right' : 'left';

        return {
            ...item,
            style: {
                top,
                [leftKey]: left,
                width,
                height: height ?? 0,
            },
            top,
            bottom: top + height,
        };
    });

    return {
        items,
        maxBottom,
    };
};

function useThrottledScroll(
    ref: React.RefObject<HTMLDivElement>,
    throttleValue: number
) {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        setScrollTop(ref.current.scrollTop);

        const onScroll = (ev: any) => {
            setScrollTop(ev.target.scrollTop);
        };

        const onScrollThrottled = throttle(onScroll, throttleValue);

        ref.current.addEventListener('scroll', onScrollThrottled);

        return () => {
            ref.current?.removeEventListener('scroll', onScrollThrottled);
        };
    }, []);

    return scrollTop;
}

export default Masonry;
