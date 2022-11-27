import React, { useState } from 'react';
import { useMeasure } from 'react-use';
import {
    Container,
    Item,
    Items,
    SwitchWrapper,
    Title,
} from './LocalGallery.style';
import { useTags } from '../../hooks/useTags';
import { useItemsPosition } from '../../hooks/useItemsPosition';
import classnames from 'classnames';
import { useDelay } from '../../hooks/useDelay';
import LightBox from '../LightBox/LightBox';
import Switch from '../Switch/Switch';

export type LocalGalleryProps = {
    items: Json[];
};

export function LocalGallery(props: LocalGalleryProps) {
    const [ref, { width }] = useMeasure<HTMLDivElement>();
    const [currentTag, setCurrentTag] = useState('All');
    const [currentItem, setCurrentItem] = useState<Json | null>(null);

    const tags = useTags(props.items);
    const animated = useDelay(300);

    const items = useItemsPosition(props.items, currentTag, {
        width,
        itemsPerRow: 4,
        itemHeight: 290,
    });

    function renderItem(item: Json) {
        return (
            <Image
                key={item.id}
                item={item}
                onClick={() => setCurrentItem(item)}
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

    const className = classnames('LocalGallery-container', {
        animated,
    });

    return (
        <Container
            className={className}
            data-testid='LocalGallery-container'
            ref={ref}
        >
            <SwitchWrapper>
                <Switch
                    options={tags}
                    value={currentTag}
                    onChange={(option) => setCurrentTag(option.id)}
                />
            </SwitchWrapper>
            <Items className='items' style={style}>
                {renderItems()}
            </Items>
            {renderLightBox()}
        </Container>
    );
}

type ImageProps = {
    item: Json;
    onClick: () => void;
};

function Image(props: ImageProps) {
    const { item } = props;
    const { title, thumbImageUrl, imageUrl } = item;

    const style = {
        ...item.style,
        top: `${item.position.top}px`,
        left: `${item.position.left}px`,
    };

    return (
        <Item
            key={item.id}
            className='item'
            imageUrl={thumbImageUrl || imageUrl}
            style={style}
            onClick={props.onClick}
        >
            <Title>{title}</Title>
        </Item>
    );
}

export default LocalGallery;
