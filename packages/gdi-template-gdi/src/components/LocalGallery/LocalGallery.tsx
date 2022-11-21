import React, { useMemo } from 'react';
import { useMeasure } from 'react-use';
import { Container, Item, Items, SwitchWrapper } from './LocalGallery.style';
import { uniq } from 'lodash';
import { Switch } from '@gdi/web-ui';

export type LocalGalleryProps = {
    items: Json[];
};

export function LocalGallery(props: LocalGalleryProps) {
    const { items = [] } = props;
    const [ref, { width }] = useMeasure<HTMLDivElement>();

    const tags = useMemo(() => {
        const output: string[] = [];

        items.forEach((item) => {
            output.push(...item.tags);
        });

        output.push('All');

        return uniq(output)
            .sort()
            .map((tag) => ({
                id: tag,
                label: tag,
            }));
    }, [items]);

    function renderItem(item: Json) {
        const { title, imageUrl } = item;

        const itemWidth = (width - 10) / 4;

        return (
            <Item
                key={item.id}
                className='item'
                imageUrl={imageUrl}
                width={itemWidth}
            >
                {title}
            </Item>
        );
    }

    function renderItems() {
        return items.map((item: Json) => renderItem(item));
    }

    return (
        <Container
            className='LocalGallery-container'
            data-testid='LocalGallery-container'
            ref={ref}
        >
            <SwitchWrapper>
                <Switch options={tags}></Switch>
            </SwitchWrapper>
            <Items>{renderItems()}</Items>
        </Container>
    );
}

export default LocalGallery;
