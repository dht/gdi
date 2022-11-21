import { Icon } from '@fluentui/react';
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
    Quote,
    QuoteBody,
    QuoteContent,
    QuotePerson,
    QuotePersonImage,
    QuotePersonJobTitle,
    QuotePersonName,
    QuoteSign,
} from './Quotes.style';

export const id = 'com.usegdi.templates.starter.quotes-basic';

export type QuotesProps = {
    strings: QuotesStrings;
    colors: QuotesColors;
    extra: QuotesExtra;
};

export type QuotesStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type QuotesColors = {
    background?: string;
    text?: string;
};

export type QuotesExtra = {
    href: string;
    imageUrl: string;
};

export function Quotes(props: QuotesProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    function renderItem(item: Json, index: number) {
        const { name, jobTitle, company, avatarUrl, description } = item;
        const style: React.CSSProperties = {
            transform: `translateX(${(index - activeIndex) * 100}%)`,
        };

        return (
            <Quote style={style} key={item.id}>
                <QuoteContent>
                    <QuoteBody>{description}</QuoteBody>
                    <QuoteSign>
                        <Icon iconName='RightDoubleQuote' />
                    </QuoteSign>
                </QuoteContent>
                <QuotePerson>
                    <QuotePersonImage imageUrl={avatarUrl} />
                    <QuotePersonName>{name}</QuotePersonName>
                    <QuotePersonJobTitle>
                        {jobTitle} {company && ', ' + company}
                    </QuotePersonJobTitle>
                </QuotePerson>
            </Quote>
        );
    }

    function renderItems() {
        return items.map((item: Json, index: number) =>
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
    items: Json[];
    activeIndex: number;
    onChange: (index: number) => void;
};

export function Dots(props: DotsProps) {
    const { items, activeIndex } = props;

    function renderDot(_item: Json, index: number) {
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
        return items.map((item: Json, index) => renderDot(item, index));
    }

    return <ContainerDots>{renderDots()}</ContainerDots>;
}

type ArrowsProps = {
    items: Json[];
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

const items = [
    {
        id: '1',
        name: 'William Baker',
        jobTitle: 'CEO',
        company: 'Google',
        avatarUrl: 'https://i.pravatar.cc/100?u=100',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc.',
    },
    {
        id: '2',
        name: 'William Baker',
        jobTitle: 'CEO',
        company: 'Google',
        avatarUrl: 'https://i.pravatar.cc/100?u=101',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc.',
    },
    {
        id: '3',
        name: 'William Baker',
        jobTitle: 'CEO',
        company: 'Google',
        avatarUrl: 'https://i.pravatar.cc/100?u=102',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc.',
    },
    {
        id: '4',
        name: 'William Baker',
        jobTitle: 'CEO',
        company: 'Google',
        avatarUrl: 'https://i.pravatar.cc/100?u=103',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nisl, eget aliquam nisl lorem quis nunc.',
    },
];

export default Quotes;
