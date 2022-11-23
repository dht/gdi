import React, { useEffect, useRef, useState } from 'react';
import { useBoolean, useMeasure } from 'react-use';
import { Container, Item, Items, SwitchWrapper } from './LocalGallery.style';
import { Switch } from '@gdi/web-ui';
import { useTags } from '../../hooks/useTags';
import { useItemsPosition } from '../../hooks/useItemsPosition';
import classnames from 'classnames';
import { useDelay } from '../../hooks/useDelay';

export type LocalGalleryProps = {
    items: Json[];
};

export function LocalGallery(props: LocalGalleryProps) {
    const [ref, { width }] = useMeasure<HTMLDivElement>();
    const [currentTag, setCurrentTag] = useState('All');

    const tags = useTags(props.items);
    const animated = useDelay(300);

    const items = useItemsPosition(props.items, currentTag, {
        width,
        itemsPerRow: 4,
        itemHeight: 290,
    });

    function renderItem(item: Json) {
        return <Image key={item.id} item={item} />;
    }

    function renderItems() {
        return items.map((item: Json) => renderItem(item));
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
        </Container>
    );
}

type ImageProps = {
    item: Json;
};

function Image(props: ImageProps) {
    const { item } = props;
    const { title, imageUrl } = item;

    const style = {
        ...item.style,
        top: `${item.position.top}px`,
        left: `${item.position.left}px`,
    };

    return (
        <Item key={item.id} className='item' imageUrl={imageUrl} style={style}>
            {title}
        </Item>
    );
}

export default LocalGallery;
