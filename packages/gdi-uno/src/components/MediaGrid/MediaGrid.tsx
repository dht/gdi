import React from 'react';
import { Wrapper } from './MediaGrid.style';
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
        <Wrapper className='MediaGrid-wrapper' data-testid='MediaGrid-wrapper'>
            <LocalGallery items={items} />
        </Wrapper>
    );
}

export default MediaGrid;
