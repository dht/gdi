import React from 'react';
import { Wrapper } from './PreviewImage.style';

export type PreviewImageProps = {
    item: any;
};

export function PreviewImage(_props: PreviewImageProps) {
    return (
        <Wrapper
            className='PreviewImage-wrapper'
            data-testid='PreviewImage-wrapper'
        >
            PreviewImage
        </Wrapper>
    );
}

export default PreviewImage;
