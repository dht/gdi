import React from 'react';
import { Wrapper } from './BkGradient.style';

export type BkGradientProps = {
    imageUrl?: string;
};

export function BkGradient(props: BkGradientProps) {
    const { imageUrl } = props;

    return (
        <Wrapper
            className='BkGradient-wrapper'
            data-testid='BkGradient-wrapper'
            imageUrl={imageUrl}
        ></Wrapper>
    );
}

export default BkGradient;
