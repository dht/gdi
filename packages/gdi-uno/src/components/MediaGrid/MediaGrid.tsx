import React from 'react';
import { Container } from './MediaGrid.style';
import { LocalGallery } from '@gdi/web-base-ui';
import { IUnoSection } from '../../types';

export type MediaGridProps = {
    data: Json;
    section: IUnoSection;
};

export function MediaGrid(props: MediaGridProps) {
    const { data } = props;
    const { media: items } = data;

    return (
        <Container
            className='MediaGrid-container'
            data-testid='MediaGrid-container'
        >
            <LocalGallery items={items} />
        </Container>
    );
}

export default MediaGrid;
