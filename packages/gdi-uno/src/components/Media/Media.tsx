import React, { useState } from 'react';
import {
    Arrow,
    Container,
    ContainerArrows,
    ContainerDots,
    ContainerItem,
    Content,
    Dot,
    Image,
} from './Media.style';

export type MediaProps = {
    data: Json;
};

export function Media(props: MediaProps) {
    const { data } = props;
    const { media: items } = data;
    const [activeIndex, setActiveIndex] = useState(0);

    function renderItem(item: string, index: number) {
        const style: React.CSSProperties = {
            transform: `translateX(${(index - activeIndex) * 100}%)`,
        };

        return <MediaItem key={item} item={item} style={style} />;
    }

    function renderItems() {
        return items.map((item: string, index: number) =>
            renderItem(item, index)
        );
    }
    return (
        <Container className='Media-container' data-testid='Media-container'>
            <Arrows
                items={items}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
            />
            <Content>{renderItems()}</Content>
            <Dots
                items={items}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
            />
        </Container>
    );
}

export type MediaItemProps = {
    item: string;
    style: React.CSSProperties;
};

export function MediaItem(props: MediaItemProps) {
    const { item } = props;

    const isVideo = item.includes('youtube.com');

    const Cmp = isVideo ? MediaItemVideo : MediaItemImage;

    return <Cmp {...props} key={item} />;
}

export function MediaItemVideo(props: MediaItemProps) {
    const { style, item } = props;

    return (
        <ContainerItem style={style}>
            <iframe
                width='650'
                height='404'
                src={item}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            ></iframe>
        </ContainerItem>
    );
}

export function MediaItemImage(props: MediaItemProps) {
    const { style, item } = props;

    return (
        <ContainerItem style={style}>
            <Image url={item} />
        </ContainerItem>
    );
}

type DotsProps = {
    items: string[];
    activeIndex: number;
    onChange: (index: number) => void;
};

export function Dots(props: DotsProps) {
    const { items, activeIndex } = props;

    function renderDot(_item: string, index: number) {
        return (
            <Dot
                key={index}
                className='item'
                onClick={() => props.onChange(index)}
                active={index === activeIndex}
            />
        );
    }

    function renderDots() {
        return items.map((item: string, index) => renderDot(item, index));
    }

    return <ContainerDots>{renderDots()}</ContainerDots>;
}

type ArrowsProps = {
    items: string[];
    activeIndex: number;
    onChange: (index: number) => void;
};

export function Arrows(props: ArrowsProps) {
    const { items, activeIndex } = props;

    function onRight() {
        const nextIndex = activeIndex + 1;
        const next = nextIndex < items.length ? nextIndex : 0;
        props.onChange(next);
    }

    function onLeft() {
        const nextIndex = activeIndex - 1;
        const next = nextIndex >= 0 ? nextIndex : items.length - 1;
        props.onChange(next);
    }

    return (
        <ContainerArrows>
            <Arrow onClick={onLeft}>
                <i className='material-icons'>keyboard_arrow_left</i>
            </Arrow>
            <Arrow onClick={onRight}>
                <i className='material-icons'>keyboard_arrow_right</i>
            </Arrow>
        </ContainerArrows>
    );
}

export default Media;
