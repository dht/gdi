import React, { useState } from 'react';
import { useMeasure } from 'react-use';
import {
    Wrapper,
    Item,
    Items,
    SwitchWrapper,
    Title,
    Overlay,
} from './LocalGallery.style';
import { useTags } from '../../hooks/useTags';
import { useItemsPosition } from '../../hooks/useItemsPosition';
import classnames from 'classnames';
import { useDelay } from '../../hooks/useDelay';
import LightBox from '../LightBox/LightBox';
import Switch from '../Switch/Switch';

export type LocalGalleryProps = {
    items: Json[];
    itemsPerRow?: number;
    itemHeight?: number;
    lightMode?: boolean;
    contain?: boolean;
    renderOverlay?: (item: Json) => JSX.Element;
    onClick?: (item: Json) => void;
    onView?: (item: Json) => void;
    onTagChange?: (tagId: string) => void;
};

export function LocalGallery(props: LocalGalleryProps) {
    let { itemsPerRow, itemHeight, lightMode, contain } = props;
    const [ref, { width }] = useMeasure<HTMLDivElement>();
    const [currentTag, setCurrentTag] = useState('All');
    const [currentItem, setCurrentItem] = useState<Json | null>(null);

    const tags = useTags(props.items);
    const animated = useDelay(300);

    const isMobile = width < 600;

    if (!itemsPerRow) {
        itemsPerRow = isMobile ? 2 : 4;
    }

    if (!itemHeight) {
        itemHeight = isMobile ? 150 : 290;
    }

    const items = useItemsPosition(props.items, currentTag, {
        width,
        itemsPerRow,
        itemHeight,
    });

    function onTagChange(option: IOption) {
        setCurrentTag(option.id);

        if (props.onTagChange) {
            props.onTagChange(option.id);
        }
    }

    function onClick(item: Json) {
        const { href } = item;

        if (href) {
            if (props.onClick) {
                props.onClick(item);
            }
        } else {
            if (props.onView) {
                props.onView(item);
            }

            setCurrentItem(item);
        }
    }

    function renderItem(item: Json) {
        return (
            <Image
                key={item.id}
                item={item}
                onClick={() => onClick(item)}
                contain={contain}
                renderOverlay={props.renderOverlay}
                itemHeight={itemHeight}
            />
        );
    }

    function renderItems() {
        return items.map((item: Json) => renderItem(item));
    }

    function renderLightBox() {
        if (!currentItem) {
            return null;
        }

        return (
            <LightBox item={currentItem} onClose={() => setCurrentItem(null)} />
        );
    }

    const visibleItems = items.filter((i) => i.isVisible).length;

    const style = {
        height: `${Math.ceil(visibleItems / 4) * 290}px`,
    };

    const className = classnames('LocalGallery-wrapper', {
        animated,
    });

    return (
        <Wrapper
            className={className}
            data-testid='LocalGallery-wrapper'
            ref={ref}
        >
            <SwitchWrapper>
                <Switch
                    options={tags}
                    value={currentTag}
                    lightMode={lightMode}
                    onChange={onTagChange}
                />
            </SwitchWrapper>
            <Items className='items' style={style}>
                {renderItems()}
            </Items>
            {renderLightBox()}
        </Wrapper>
    );
}

type ImageProps = {
    item: Json;
    onClick: () => void;
    contain?: boolean;
    renderOverlay?: (item: Json) => JSX.Element | null;
    itemHeight?: number;
};

function Image(props: ImageProps) {
    const { item, contain, itemHeight = 290 } = props;
    const { title, thumbImageUrl, imageUrl, href } = item;

    const style = {
        ...item.style,
        top: `${item.position.top}px`,
        left: `${item.position.left}px`,
    };

    function renderOverlay() {
        if (!props.renderOverlay) {
            return null;
        }

        return props.renderOverlay(item);
    }

    return (
        <Item
            key={item.id}
            className='item'
            imageUrl={thumbImageUrl || imageUrl}
            style={style}
            onClick={props.onClick}
            contain={contain}
            itemHeight={itemHeight}
            href={href}
            target='_blank'
        >
            <Overlay className='overlay'>{renderOverlay()}</Overlay>
            {props.renderOverlay === null && <Title>{title}</Title>}
        </Item>
    );
}

export default LocalGallery;
