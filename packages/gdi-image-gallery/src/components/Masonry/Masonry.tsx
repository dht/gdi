import React, { useEffect, useRef, useState } from 'react';
import { useMount } from 'react-use';
import { IImage } from '../../types';
import { Container, Image, ImageOverlay } from './Masonry.style';

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
};

export function Masonry(props: MasonryProps) {
    const { columns = 3, gutter = 10, items } = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [images, setImages] = useState<IItem[]>([]);
    const ref = useRef<HTMLDivElement>(null);

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
    }, [width]);

    function renderOverlay(item: IItem) {
        if (!props.renderOverlay) {
            return null;
        }

        return props.renderOverlay(item);
    }

    function renderItem(item: IItem) {
        const { imageUrl } = item;

        return (
            <Image
                url={imageUrl}
                key={item.id}
                className='item'
                style={item.style}
            >
                <ImageOverlay>{renderOverlay(item)}</ImageOverlay>
            </Image>
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
