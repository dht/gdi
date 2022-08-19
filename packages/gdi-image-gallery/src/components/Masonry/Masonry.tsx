import React, { useEffect, useRef, useState } from 'react';
import { useMount } from 'react-use';
import { useInViewPort } from '../../hooks/useInViewPort';
import { IImage } from '../../types';
import { Container, Image, ImageOverlay, ImageWrapper } from './Masonry.style';

export type IItem = IImage & {
    style?: Style;
};

type Style = {
    top: number;
    left: number;
    width: number;
    height: number;
};

export type MasonryProps = {
    items: IItem[];
    columns?: number;
    gutter?: number;
    renderOverlay?: (item: IItem) => JSX.Element;
    onClick?: (id: string) => void;
    onDoubleClick?: (id: string) => void;
    oneWayReveal?: boolean;
};

export function Masonry(props: MasonryProps) {
    const { columns = 3, gutter = 10, items, oneWayReveal = true } = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [images, setImages] = useState<IItem[]>([]);
    const ref = useRef<HTMLDivElement>(null);

    useInViewPort(ref, '.masonry-item', oneWayReveal, [items]);

    useMount(() => {
        if (!ref.current) {
            return;
        }

        const boundingBox = ref.current.getBoundingClientRect();
        setWidth(boundingBox.width);
        setHeight(boundingBox.height);
    });

    useEffect(() => {
        const parsedItems = positionImages(items, {
            width,
            columns,
            gutter,
        });
        setImages(parsedItems);
    }, [width, items]);

    function onClick(id: string) {
        if (!props.onClick) {
            return;
        }

        props.onClick(id);
    }

    function onDoubleClick(id: string) {
        if (!props.onDoubleClick) {
            return;
        }

        props.onDoubleClick(id);
    }

    function renderOverlay(item: IItem) {
        if (!props.renderOverlay) {
            return null;
        }

        return props.renderOverlay(item);
    }

    function renderItem(item: IItem) {
        const { imageThumbUrl, imageUrl } = item;

        return (
            <ImageWrapper
                style={item.style}
                onClick={() => onClick(item.id)}
                className='masonry-item'
                onDoubleClick={() => onDoubleClick(item.id)}
            >
                <Image
                    url={imageThumbUrl}
                    key={item.id + '_thumb'}
                    className='masonry-image'
                />
                <Image url={imageUrl} key={item.id} className='masonry-image' />
                <ImageOverlay>{renderOverlay(item)}</ImageOverlay>
            </ImageWrapper>
        );
    }

    function renderItems() {
        return images.map((item: IItem) => renderItem(item));
    }

    return (
        <Container
            className='Masonry-container'
            data-testid='Masonry-container'
            ref={ref}
        >
            {renderItems()}
        </Container>
    );
}

type Options = {
    width: number;
    columns: number;
    gutter: number;
};

export const positionImages = (items: IItem[], options: Options) => {
    const { width, columns, gutter } = options;

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

    return items.map((item) => {
        const { ratio } = item;
        const columnIndex = getMinimumTopColumnIndex();

        const top = topPerColumn[columnIndex];
        const left = leftPerColumn[columnIndex];
        const width = columnWidth;
        const height = columnWidth / ratio;

        topPerColumn[columnIndex] += height + gutter;

        return {
            ...item,
            style: {
                top,
                left,
                width,
                height,
            },
        };
    });
};

export default Masonry;
