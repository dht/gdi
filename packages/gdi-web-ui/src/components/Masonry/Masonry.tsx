import React, { useEffect, useRef, useState } from 'react';
import { useMount } from 'react-use';
import { Container, Image } from './Masonry.style';
import { items } from './meta/Masonry.items';

export type IItem = {
    id: string | number;
    imageUrl: string;
    ratio: number;
    style?: Style;
};

type Style = {
    top: number;
    left: number;
    width: number;
    height: number;
};

export type MasonryProps = {
    columns?: number;
    gutter?: number;
};

export function Masonry(props: MasonryProps) {
    const { columns = 3, gutter = 10 } = props;
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

    function renderItem(item: IItem) {
        const { imageUrl } = item;

        return (
            <Image
                url={imageUrl}
                key={item.id}
                className='item'
                style={item.style}
            />
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
