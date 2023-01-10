import React from 'react';
import { Wrapper } from './BlkrGallery.style';
import { BlkrContainer } from '@gdi/blkr';

export type BlkrGalleryProps = {};

export function BlkrGallery(_props: BlkrGalleryProps) {
    return (
        <Wrapper
            className='BlkrGallery-wrapper'
            data-testid='BlkrGallery-wrapper'
        >
            <BlkrContainer paddingLeft={55} />
        </Wrapper>
    );
}

export default BlkrGallery;
